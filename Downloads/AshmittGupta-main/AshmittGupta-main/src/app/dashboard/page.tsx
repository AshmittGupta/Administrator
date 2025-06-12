'use client';

import { Card, Metric, Text, BarChart, Title, Flex } from '@tremor/react';

const data = [
  {
    date: "Jan 23",
    "Active Users": 2890,
    "Session Duration": 145,
  },
  {
    date: "Feb 23",
    "Active Users": 2756,
    "Session Duration": 190,
  },
  // Add more sample data here
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome to the LearnXR Analytics Dashboard</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Text>Total Users</Text>
          <Metric>5,670</Metric>
        </Card>
        <Card>
          <Text>Active Today</Text>
          <Metric>1,234</Metric>
        </Card>
        <Card>
          <Text>Avg. Session Duration</Text>
          <Metric>24.3 min</Metric>
        </Card>
      </div>

      <Card>
        <Title>User Activity</Title>
        <BarChart
          className="mt-6 h-72"
          data={data}
          index="date"
          categories={["Active Users", "Session Duration"]}
          colors={["blue", "teal"]}
        />
      </Card>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card>
          <Title>Most Active Lessons</Title>
          <div className="mt-4">
            <div className="space-y-3">
              <Flex>
                <Text>Introduction to VR</Text>
                <Text>89 users</Text>
              </Flex>
              <Flex>
                <Text>3D Modeling Basics</Text>
                <Text>76 users</Text>
              </Flex>
              <Flex>
                <Text>Animation Fundamentals</Text>
                <Text>65 users</Text>
              </Flex>
            </div>
          </div>
        </Card>

        <Card>
          <Title>Completion Rates</Title>
          <div className="mt-4">
            <div className="space-y-3">
              <Flex>
                <Text>Beginner Track</Text>
                <Text>78%</Text>
              </Flex>
              <Flex>
                <Text>Intermediate Track</Text>
                <Text>65%</Text>
              </Flex>
              <Flex>
                <Text>Advanced Track</Text>
                <Text>45%</Text>
              </Flex>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 