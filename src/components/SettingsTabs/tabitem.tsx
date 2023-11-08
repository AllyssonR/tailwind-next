'use client'
import * as Tabs from '@radix-ui/react-tabs'
export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}
export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700"
    >
      <span>{title}</span>
      {isSelected && (
        <div className="absolute inset-x-0 -bottom-px h-0.5 border-violet-700" />
      )}
    </Tabs.Trigger>
  )
}
