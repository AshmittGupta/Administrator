import { Card, Title, Text, Grid } from '@tremor/react';
import { format, subMonths } from 'date-fns';
import AnalyticsBarChart from '@/components/AnalyticsBarChart';
import AnalyticsChart from '@/components/AnalyticsChart';

async function getAnalytics() {
  // Sample data - replace with actual Firebase queries
  const monthlyData = Array.from({ length: 6 }, (_, i) => ({
    month: format(subMonths(new Date(), i), 'MMM yyyy'),
    'Monthly Active Users': Math.floor(Math.random() * 2000) + 1000,
    'Daily Active Users': Math.floor(Math.random() * 500) + 200,
  })).reverse();

  const sessionData = Array.from({ length: 6 }, (_, i) => ({
    month: format(subMonths(new Date(), i), 'MMM yyyy'),
    'Average Duration': Math.floor(Math.random() * 30) + 15,
    'Completion Rate': Math.floor(Math.random() * 40) + 60,
  })).reverse();

  return {
    monthlyData,
    sessionData,
  };
}

export default async function Analytics() {
  const { monthlyData, sessionData } = await getAnalytics();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-500 mt-2">Detailed metrics and trends</p>
      </div>

      <Card>
        <Title>User Activity Trends</Title>
        <Text>Monthly and daily active users over time</Text>
        <AnalyticsBarChart
          data={monthlyData}
          index="month"
          categories={['Monthly Active Users', 'Daily Active Users']}
          colors={['blue', 'cyan']}
        />
      </Card>

      <Grid numItems={1} numItemsSm={2} className="gap-6">
        <Card>
          <Title>Average Session Duration</Title>
          <Text>Time spent per session in minutes</Text>
          <AnalyticsChart
            data={sessionData}
            index="month"
            categories={['Average Duration']}
            colors={['green']}
            type="duration"
          />
        </Card>

        <Card>
          <Title>Lesson Completion Rate</Title>
          <Text>Percentage of lessons completed</Text>
          <AnalyticsChart
            data={sessionData}
            index="month"
            categories={['Completion Rate']}
            colors={['orange']}
            type="percentage"
          />
        </Card>
      </Grid>
    </div>
  );
} 