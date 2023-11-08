'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tabitem'

export function SettingsTabs() {
  return (
    <Tabs.Root>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem key={'tab1'} title="My Details" isSelected value="tab1" />
        <TabItem key={'tab2'} title="Profile" value="tab2" />
        <TabItem key={'tab3'} title="Password" value="tab3" />
        <TabItem key={'tab4'} title="Team" value="tab4" />
        <TabItem key={'tab5'} title="Plan" value="tab5" />
        <TabItem key={'tab6'} title="Billing" value="tab6" />
        <TabItem key={'tab7'} title="Email" value="tab7" />
        <TabItem key={'tab8'} title="Notifications" value="tab8" />
        <TabItem key={'tab9'} title="Integrations" value="tab9" />
        <TabItem key={'tab10'} title="API" value="tab10" />
      </Tabs.List>
    </Tabs.Root>
  )
}
