'use client';

import {
  Card,
  Title,
  Text,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
} from '@tremor/react';

async function getLessonMetrics() {
  // Sample data - replace with actual Firebase queries
  const lessons = [
    {
      id: 'lesson-1',
      name: 'Introduction to VR',
      completions: 450,
      attempts: 580,
      averageTime: 18,
      completionRate: 78,
    },
    {
      id: 'lesson-2',
      name: 'Basic 3D Modeling',
      completions: 380,
      attempts: 520,
      averageTime: 25,
      completionRate: 73,
    },
    {
      id: 'lesson-3',
      name: 'VR Interaction Design',
      completions: 290,
      attempts: 420,
      averageTime: 30,
      completionRate: 69,
    },
    {
      id: 'lesson-4',
      name: 'Advanced Animation',
      completions: 180,
      attempts: 300,
      averageTime: 35,
      completionRate: 60,
    },
  ];

  return lessons;
}

export default async function Lessons() {
  const lessons = await getLessonMetrics();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Lesson Analytics</h1>
        <p className="text-gray-500 mt-2">Performance metrics for individual lessons</p>
      </div>

      <Card>
        <Title>Lesson Performance</Title>
        <Table className="mt-4">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Lesson Name</TableHeaderCell>
              <TableHeaderCell>Completions</TableHeaderCell>
              <TableHeaderCell>Attempts</TableHeaderCell>
              <TableHeaderCell>Avg. Time (min)</TableHeaderCell>
              <TableHeaderCell>Completion Rate</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons.map((lesson) => (
              <TableRow key={lesson.id}>
                <TableCell>{lesson.name}</TableCell>
                <TableCell>{lesson.completions}</TableCell>
                <TableCell>{lesson.attempts}</TableCell>
                <TableCell>{lesson.averageTime}</TableCell>
                <TableCell>
                  <Badge color={lesson.completionRate >= 70 ? 'green' : lesson.completionRate >= 50 ? 'yellow' : 'red'}>
                    {lesson.completionRate}%
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
} 