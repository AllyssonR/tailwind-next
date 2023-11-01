import { Home, BarChart, Layers3, CheckSquare, Flag, Users } from 'lucide-react'
import { NavItem } from './NavItem'
export function MainNavigation() {
  return (
    <nav className="space-x-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projets" icon={Layers3} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
