'use client';

import { Card, Title, Text, AreaChart, Grid, Metric } from '@tremor/react'

const chartdata = [
  {
    date: "Jan 23",
    "Daily Active Users": 2890,
    "Session Duration": 45,
    "Completion Rate": 78,
  },
  {
    date: "Feb 23",
    "Daily Active Users": 3200,
    "Session Duration": 52,
    "Completion Rate": 85,
  },
  {
    date: "Mar 23",
    "Daily Active Users": 3500,
    "Session Duration": 48,
    "Completion Rate": 82,
  },
  {
    date: "Apr 23",
    "Daily Active Users": 3780,
    "Session Duration": 50,
    "Completion Rate": 88,
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Title>Analytics</Title>
        <Text>Detailed metrics and performance analysis</Text>
      </div>

      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card>
          <Text>Average Session Duration</Text>
          <Metric>48.5 minutes</Metric>
        </Card>
        <Card>
          <Text>Course Completion Rate</Text>
          <Metric>83.2%</Metric>
        </Card>
        <Card>
          <Text>Total Learning Hours</Text>
          <Metric>12,456</Metric>
        </Card>
      </Grid>

      <Card>
        <Title>Performance Trends</Title>
        <AreaChart
          className="mt-6 h-72"
          data={chartdata}
          index="date"
          categories={["Daily Active Users", "Session Duration", "Completion Rate"]}
          colors={["blue", "teal", "indigo"]}
        />
      </Card>
    </div>
  )
} 