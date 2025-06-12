import { Card, Title, Text, Grid, Button } from '@tremor/react'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Title>Settings</Title>
        <Text>Manage your platform settings and preferences</Text>
      </div>

      <Grid numItems={1} className="gap-6">
        <Card>
          <Title>Account Settings</Title>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <Text className="font-medium">Email Notifications</Text>
                <Text className="text-tremor-content-subtle">Receive email updates about platform activity</Text>
              </div>
              <Button variant="secondary" size="xs">Configure</Button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Text className="font-medium">Data Privacy</Text>
                <Text className="text-tremor-content-subtle">Manage data collection and privacy settings</Text>
              </div>
              <Button variant="secondary" size="xs">Configure</Button>
            </div>
          </div>
        </Card>

        <Card>
          <Title>Platform Settings</Title>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <Text className="font-medium">Course Display</Text>
                <Text className="text-tremor-content-subtle">Configure how courses are displayed to users</Text>
              </div>
              <Button variant="secondary" size="xs">Configure</Button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Text className="font-medium">Analytics</Text>
                <Text className="text-tremor-content-subtle">Configure analytics tracking and reporting</Text>
              </div>
              <Button variant="secondary" size="xs">Configure</Button>
            </div>
          </div>
        </Card>

        <Card>
          <Title>Integration Settings</Title>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <Text className="font-medium">API Configuration</Text>
                <Text className="text-tremor-content-subtle">Manage API keys and access tokens</Text>
              </div>
              <Button variant="secondary" size="xs">Configure</Button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Text className="font-medium">Third-party Services</Text>
                <Text className="text-tremor-content-subtle">Configure external service integrations</Text>
              </div>
              <Button variant="secondary" size="xs">Configure</Button>
            </div>
          </div>
        </Card>
      </Grid>
    </div>
  )
} 