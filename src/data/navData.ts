import {
  IoSparklesSharp,
  IoPush,
  IoAlbums,
  IoChatbubbles,
  IoChatbubbleSharp,
  IoBarChart,
  IoRefreshCircle,
  IoStarHalf,
  IoPeopleCircleOutline,
  IoShare,
  IoHelpBuoy,
  IoMic,
  IoStopwatchSharp,
} from 'react-icons/io5';

const navData = [
  { name: 'Feed', tag: 'default', url: '/app/', icon: IoSparklesSharp },
  { name: 'Your Posts', tag: 'default', url: '/app/posts/', icon: IoPush },
  { name: 'Media', tag: 'default', url: '/app/media/', icon: IoAlbums },
  {
    name: 'Comments',
    tag: 'default',
    url: '/app/comments/',
    icon: IoChatbubbleSharp,
  },
  {
    name: 'Analytics',
    tag: 'default',
    url: '/app/analytics/',
    icon: IoBarChart,
  },
  {
    name: 'Posts',
    tag: 'management',
    url: '/app/manage/posts/',
    icon: IoRefreshCircle,
  },
  {
    name: 'Categories',
    tag: 'management',
    url: '/app/categories/',
    icon: IoStarHalf,
  },
  {
    name: 'All comments',
    tag: 'management',
    url: '/app/manage/comments',
    icon: IoChatbubbles,
  },
  {
    name: 'Tokens',
    tag: 'management',
    url: '/app/tokens/',
    icon: IoStopwatchSharp,
  },
  {
    name: 'Community',
    tag: 'management',
    url: '/app/community/',
    icon: IoPeopleCircleOutline,
  },
  { name: 'Socials', tag: 'help', url: '/app/socials/', icon: IoShare },
  { name: 'Help Center', tag: 'help', url: '/app/help/', icon: IoHelpBuoy },
  {
    name: 'Chat & Support',
    tag: 'help',
    url: '/app/support/',
    icon: IoMic,
  },
];

export default navData;
