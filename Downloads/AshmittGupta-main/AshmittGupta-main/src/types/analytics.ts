export interface UserSession {
  userId: string;
  startTime: Date;
  endTime: Date;
  duration: number; // in minutes
  lessonId?: string;
  completed: boolean;
}

export interface DailyMetrics {
  date: string;
  activeUsers: number;
  averageSessionDuration: number;
  completionRate: number;
}

export interface MonthlyMetrics {
  month: string;
  activeUsers: number;
  averageSessionDuration: number;
  completionRate: number;
}

export interface LessonMetrics {
  lessonId: string;
  completionCount: number;
  averageTime: number;
  attemptCount: number;
} 