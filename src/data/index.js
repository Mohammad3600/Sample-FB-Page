import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeIcon from "@mui/icons-material/Home";
import AirplayIcon from "@mui/icons-material/Airplay";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupsIcon from "@mui/icons-material/Groups";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Switch from '@mui/material/Switch';
import {johnCena, wweSuperStars, Reigns, Taker, Triple, Orton, Rock} from '../assets'
import { Avatar } from '@mui/material';
import ArrowLeftRounded from '@mui/icons-material/ArrowLeftRounded';
export const loggerUserDetails = {
	firstName: "John",
    lastName: "Cena",
	profilePic : johnCena,
    posts: ["Hey There, I'm Using FB"]	
}

export const myProfileMenu = [
    {
        name: "Settings & Privacy",
        icon: SettingsIcon,
        endIcon: ArrowLeftRoundedIcon
    },
    {
        name: "Help & Support",
        icon: HelpIcon,
        endIcon: ArrowLeftRoundedIcon
    },
    {
        name: "Dark Mode",
        icon: NightlightIcon,
        endIcon: Switch
    },
    {
        name: "Switch to classic Facebook",
        icon: ArrowLeftRounded,
    },
    {
        name: "Send Feedback",
        icon: FeedbackRoundedIcon,
        endIcon: null
    },
    {
        name: "Logout",
        icon: LogoutRoundedIcon,
        endIcon: null
    },
]

export const mainMenu = [
    {
        icon: HomeIcon,
        name: "Home",
        path: "/home"
    },
    {
        icon: AirplayIcon,
        name: "Watch",
        path: "/watch"
    },
    {
        icon: EventAvailableIcon,
        name: "Events",
        path: "/events"
    },
    {
        icon: GroupsIcon,
        name: "Friends",
        path: "/friends"
    },
    {
        icon: ViewCompactIcon,
        name: "View",
        path: "/views"
    },
]

export const otherUserDetails = [
	{
		name: "The rock",
		story: Rock,
        icon: <Avatar alt="SuperStar" src={Rock} />,
		isActive: true
	},
	{
		name: "Roman",
		story: Reigns,
        icon: <Avatar alt="SuperStar" src={Reigns} />,
		isActive: true
	},
	{
		name: "UnderTaker",
		story: Taker,
        icon: <Avatar alt="SuperStar" src={Taker} />,
		isActive: false
	},
	{
		name: "Brock L",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: false
	},
	{
		name: "Batista",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: false
	},
	{
		name: "Triple H",
		story: Triple,
        icon: <Avatar alt="SuperStar" src={Triple} />,
		isActive: true
	},
	{
		name: "Brad H",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: false
	},
	{
		name: "Alex T",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: true
	},
	{
		name: "Kevin Nash",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: true
	},
	{
		name: "Finn Balor",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: false
	},
	{
		name: "Randy O",
		story: Orton,
        icon: <Avatar alt="SuperStar" src={Orton} />,
		isActive: true
	},
	
	{
		name: "Mysterio R",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: true
	},
	{
		name: "Lashely B",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: true
	},
	{
		name: "Micheals S",
		story: null,
        icon: <Avatar alt="SuperStar" src={wweSuperStars} />,
		isActive: true
	},

];

export const leftBarContents = [
	{
		icon: <AirplayIcon />,
		name: "Watch",
		path: "/watch"
	},
	{
		icon: <EventAvailableIcon />,
		name: "Events",
		path: "/events"
	},
	{
		icon: <GroupsIcon />,
		name: "Friends",
		path: "/friends"
	},
	{
		icon: <AccessTimeIcon />,
		name: "Memories",
		path: "/memories"
	},
];

export const shortcuts = [
    {
        img: <Avatar alt="trips" src="" />,
        name: "Weekend Trips"
    },
    {
        img: <Avatar alt="trips" src="" />,
        name: "Weekend Trips"
    },
    {
        img: <Avatar alt="trips" src="" />,
        name: "Weekend Trips"
    },
    {
        img: <Avatar alt="trips" src="" />,
        name: "Weekend Trips"
    },
]

