import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import { DashboardOutlined,SchoolOutlined } from "@material-ui/icons"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const routes = [
    {
        label: 'Dashboard',
        path: '/',
        icon: DashboardIcon,
        activeIcon:DashboardOutlined

    },
    {
        label: 'Courses',
        path: '/courses',
        icon: SchoolIcon,
        activeIcon:SchoolOutlined

    },
    {
        label: 'Logout',
        path: '/logout',
        icon: ArrowBackIcon,
        activeIcon:ArrowBackIcon

    },
]