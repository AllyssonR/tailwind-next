import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Logo } from './logo'
import {
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers3,
  LifeBuoy,
  Search,
  Settings,
  Users,
} from 'lucide-react'
export function Sidebar() {
  return (
    <aside className=" flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className=" mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 p-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600"
          placeholder="Search"
        />
      </div>
      <nav className="space-x-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart2} />
        <NavItem title="Projets" icon={Layers3} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Settings} />
      </div>
      <UsedSpaceWidget />
    </aside>
  )
}
