import { db } from './firebase';
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
  orderBy,
  limit,
} from 'firebase/firestore';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import type { UserSession, DailyMetrics, MonthlyMetrics, LessonMetrics } from '@/types/analytics';

export async function getDailyActiveUsers(date: Date = new Date()): Promise<number> {
  const sessionsRef = collection(db, 'sessions');
  const start = startOfDay(date);
  const end = endOfDay(date);

  const q = query(
    sessionsRef,
    where('startTime', '>=', Timestamp.fromDate(start)),
    where('startTime', '<=', Timestamp.fromDate(end))
  );

  const snapshot = await getDocs(q);
  const uniqueUsers = new Set(snapshot.docs.map(doc => doc.data().userId));
  return uniqueUsers.size;
}

export async function getAverageSessionDuration(date: Date = new Date()): Promise<number> {
  const sessionsRef = collection(db, 'sessions');
  const start = startOfDay(date);
  const end = endOfDay(date);

  const q = query(
    sessionsRef,
    where('startTime', '>=', Timestamp.fromDate(start)),
    where('startTime', '<=', Timestamp.fromDate(end))
  );

  const snapshot = await getDocs(q);
  const sessions = snapshot.docs.map(doc => doc.data() as UserSession);
  
  if (sessions.length === 0) return 0;
  
  const totalDuration = sessions.reduce((acc, session) => acc + session.duration, 0);
  return Math.round(totalDuration / sessions.length);
}

export async function getLessonCompletionRate(lessonId: string): Promise<number> {
  const sessionsRef = collection(db, 'sessions');
  const q = query(
    sessionsRef,
    where('lessonId', '==', lessonId),
    where('completed', '==', true)
  );

  const completedSnapshot = await getDocs(q);
  const totalAttempts = await getDocs(
    query(sessionsRef, where('lessonId', '==', lessonId))
  );

  if (totalAttempts.size === 0) return 0;
  return Math.round((completedSnapshot.size / totalAttempts.size) * 100);
}

export async function getLessonMetrics(lessonId: string): Promise<LessonMetrics> {
  const sessionsRef = collection(db, 'sessions');
  const q = query(sessionsRef, where('lessonId', '==', lessonId));
  const snapshot = await getDocs(q);
  const sessions = snapshot.docs.map(doc => doc.data() as UserSession);

  const completedSessions = sessions.filter(session => session.completed);
  const totalTime = completedSessions.reduce((acc, session) => acc + session.duration, 0);

  return {
    lessonId,
    completionCount: completedSessions.length,
    averageTime: completedSessions.length ? Math.round(totalTime / completedSessions.length) : 0,
    attemptCount: sessions.length,
  };
}

export async function getDailyMetrics(days: number = 7): Promise<DailyMetrics[]> {
  const metrics: DailyMetrics[] = [];

  for (let i = 0; i < days; i++) {
    const date = subDays(new Date(), i);
    const activeUsers = await getDailyActiveUsers(date);
    const averageSessionDuration = await getAverageSessionDuration(date);
    
    // Get completion rate across all lessons for the day
    const sessionsRef = collection(db, 'sessions');
    const dayStart = startOfDay(date);
    const dayEnd = endOfDay(date);
    const q = query(
      sessionsRef,
      where('startTime', '>=', Timestamp.fromDate(dayStart)),
      where('startTime', '<=', Timestamp.fromDate(dayEnd))
    );
    const snapshot = await getDocs(q);
    const sessions = snapshot.docs.map(doc => doc.data() as UserSession);
    const completionRate = sessions.length
      ? Math.round((sessions.filter(s => s.completed).length / sessions.length) * 100)
      : 0;

    metrics.push({
      date: format(date, 'MMM dd'),
      activeUsers,
      averageSessionDuration,
      completionRate,
    });
  }

  return metrics.reverse();
} 