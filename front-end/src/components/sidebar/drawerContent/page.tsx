// ** Icon imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Navigation = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/dashboard",
    children: [],
  }, 
  {
    title: "About",
    icon: <SpaceDashboardIcon />,
    path: `/about`,
  },
  {
    title: "Contact",
    icon: <MusicNoteIcon />,
    path: `/contact`,
  },
//   {
//     title: "Favourites",
//     icon: <FavoriteIcon />,
//     path: `/favourites`,
//   },
//   {
//     title: "Playlists",
//     icon: <HeadphonesIcon />,
//     path: `/playlists`,
//   },
];

export default Navigation;
