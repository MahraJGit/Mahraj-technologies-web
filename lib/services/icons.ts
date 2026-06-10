import {
  BarChart3,
  FileText,
  Link2,
  Megaphone,
  Search,
  LineChart,
  Target,
  Mail,
  Share2,
  TrendingUp,
  Users,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons = {
  barChart3: BarChart3,
  fileText: FileText,
  link2: Link2,
  megaphone: Megaphone,
  search: Search,
  lineChart: LineChart,
  target: Target,
  mail: Mail,
  share2: Share2,
  trendUp: TrendingUp,
  users: Users,
  smartphone: Smartphone,
} as const;

export type ServiceIconName = keyof typeof serviceIcons;

export function getServiceIcon(name: ServiceIconName): LucideIcon {
  return serviceIcons[name];
}
