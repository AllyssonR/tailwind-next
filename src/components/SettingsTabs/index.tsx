'use client'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './tabitem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          key={'tab1'}
          title="My Details"
          value="tab1"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          key={'tab2'}
          title="Profile"
          value="tab2"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          key={'tab3'}
          title="Password"
          value="tab3"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem
          key={'tab4'}
          title="Team"
          value="tab4"
          isSelected={currentTab === 'tab4'}
        />
        <TabItem
          key={'tab5'}
          title="Plan"
          value="tab5"
          isSelected={currentTab === 'tab5'}
        />
        <TabItem
          key={'tab6'}
          title="Billing"
          value="tab6"
          isSelected={currentTab === 'tab6'}
        />
        <TabItem
          key={'tab7'}
          title="Email"
          value="tab7"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          key={'tab8'}
          title="Notifications"
          value="tab8"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem
          key={'tab9'}
          title="Integrations"
          value="tab9"
          isSelected={currentTab === 'tab9'}
        />
        <TabItem
          key={'tab10'}
          title="API"
          value="tab10"
          isSelected={currentTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
