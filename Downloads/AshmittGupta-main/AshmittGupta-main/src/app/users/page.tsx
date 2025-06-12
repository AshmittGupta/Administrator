import { Card, Title, Text, Grid, Metric, List, ListItem, Badge } from '@tremor/react'

const users = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex.t@example.com",
    courses: 3,
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    courses: 5,
    status: "Active",
  },
  {
    id: 3,
    name: "James Miller",
    email: "james.m@example.com",
    courses: 2,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.d@example.com",
    courses: 4,
    status: "Active",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <Title>Users</Title>
        <Text>Manage and monitor user activity</Text>
      </div>

      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card>
          <Text>Total Users</Text>
          <Metric>1,234</Metric>
        </Card>
        <Card>
          <Text>Active Today</Text>
          <Metric>892</Metric>
        </Card>
        <Card>
          <Text>New This Week</Text>
          <Metric>156</Metric>
        </Card>
      </Grid>

      <Card>
        <Title>Recent Users</Title>
        <List className="mt-6">
          {users.map((user) => (
            <ListItem key={user.id} className="space-x-4">
              <div className="flex-1">
                <Text>{user.name}</Text>
                <Text className="text-tremor-content-subtle">{user.email}</Text>
              </div>
              <div className="flex items-center space-x-4">
                <Text>{user.courses} courses</Text>
                <Badge color={user.status === "Active" ? "green" : "red"}>
                  {user.status}
                </Badge>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  )
} 