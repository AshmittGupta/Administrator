'use client';

import { Card, Title, Text, Grid, Col, Metric, List, ListItem, Badge } from '@tremor/react'

const courses = [
  {
    id: 1,
    title: "Introduction to VR Development",
    enrolled: 245,
    completion: "82%",
    status: "Active",
  },
  {
    id: 2,
    title: "Advanced AR Applications",
    enrolled: 189,
    completion: "76%",
    status: "Active",
  },
  {
    id: 3,
    title: "3D Modeling for XR",
    enrolled: 156,
    completion: "91%",
    status: "Active",
  },
  {
    id: 4,
    title: "XR User Interface Design",
    enrolled: 203,
    completion: "68%",
    status: "Draft",
  },
]

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <Title>Courses</Title>
        <Text>Manage and monitor your XR courses</Text>
      </div>

      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card>
          <Text>Total Courses</Text>
          <Metric>24</Metric>
        </Card>
        <Card>
          <Text>Active Learners</Text>
          <Metric>793</Metric>
        </Card>
        <Card>
          <Text>Average Completion</Text>
          <Metric>79.2%</Metric>
        </Card>
      </Grid>

      <Card>
        <Title>Course List</Title>
        <List className="mt-6">
          {courses.map((course) => (
            <ListItem key={course.id} className="space-x-4">
              <div className="flex-1">
                <Text>{course.title}</Text>
                <Text className="text-tremor-content-subtle">{course.enrolled} students enrolled</Text>
              </div>
              <div className="flex items-center space-x-4">
                <Text>{course.completion}</Text>
                <Badge color={course.status === "Active" ? "green" : "yellow"}>
                  {course.status}
                </Badge>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  )
} 