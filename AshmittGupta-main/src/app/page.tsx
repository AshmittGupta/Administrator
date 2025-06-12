import { Card, Title, Text, Metric, BadgeDelta } from "@tremor/react";

export default function Home() {
  return (
    <div className="dashboard-section">
      <div className="mb-8 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
        <div className="relative bg-white rounded-lg p-6 shadow-xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            LearnXR Performance Metrics
          </h1>
          <Text className="mt-2 text-lg text-blue-600/80">Real-time analytics and key performance indicators</Text>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        <Card className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <Text>Monthly Active Users (MAU)</Text>
              <Metric className="mt-2">24,582</Metric>
              <div className="mt-2">
                <BadgeDelta deltaType="increase">12.3% vs last month</BadgeDelta>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <Text>Daily Active Users (DAU)</Text>
              <Metric className="mt-2">3,428</Metric>
              <div className="mt-2">
                <BadgeDelta deltaType="increase">8.7% vs yesterday</BadgeDelta>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <Text>Average Session Duration</Text>
              <Metric className="mt-2">32m 45s</Metric>
              <div className="mt-2">
                <BadgeDelta deltaType="moderateIncrease">5.2% vs last week</BadgeDelta>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="flex items-center justify-between">
            <div>
              <Text>Lesson Completion Rate</Text>
              <Metric className="mt-2">78.3%</Metric>
              <div className="mt-2">
                <BadgeDelta deltaType="increase">3.1% vs last month</BadgeDelta>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 