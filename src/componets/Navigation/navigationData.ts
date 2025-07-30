import { ComponentType } from "react";

import {
  Dashboard as DashboardIcon,
  BarChart as BarChartIcon,
  Assignment as AssignmentIcon,
  Email as EmailIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";

export interface INavigationData {
  key?: string;
  nameLink: string;
  icon: ComponentType;
  path: string;
}

export const navigationData: INavigationData[] = [
  {
    key: "Dashboard",
    nameLink: "Dashboard",
    icon: DashboardIcon,
    path: "/",
  },
  {
    key: "Chart",
    nameLink: "Chart",
    icon: BarChartIcon,
    path: "chart",
  },
  {
    key: "Form",
    nameLink: "Form",
    icon: AssignmentIcon,
    path: "/form",
  },
  {
    key: "Email",
    nameLink: "Email",
    icon: EmailIcon,
    path: "/email",
  },
  {
    key: "Profil",
    nameLink: "Profil",
    icon: PersonIcon,
    path: "/auth",
  },
  {
    key: "Setting",
    nameLink: "Setting",
    icon: SettingsIcon,
    path: "/setting",
  },
  {
    key: "Sign Out",
    nameLink: "Sign Out",
    icon: ExitToAppIcon,
    path: "/sign-out",
  },
];
