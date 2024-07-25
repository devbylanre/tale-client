import {
  TbStack,
  TbPencil,
  TbHearts,
  TbPassword,
  TbChartArcs,
  TbPinInvoke,
  TbMicrophone,
  TbMessageReply,
  TbLayoutKanban,
  TbMessageBolt,
  TbHistoryToggle,
  TbWorldLatitude,
  TbImageInPicture,
} from 'react-icons/tb';

const navData = [
  { name: 'App', tag: 'default', url: '/app/', icon: TbLayoutKanban },
  { name: 'Posts', tag: 'default', url: '/app/posts/', icon: TbPencil },
  { name: 'Media', tag: 'default', url: '/app/media/', icon: TbImageInPicture },
  {
    name: 'Comments',
    tag: 'default',
    url: '/app/comments/',
    icon: TbMessageReply,
  },
  {
    name: 'Analytics',
    tag: 'default',
    url: '/app/analytics/',
    icon: TbChartArcs,
  },
  {
    name: 'All posts',
    tag: 'management',
    url: '/app/manage/posts/',
    icon: TbHistoryToggle,
  },
  {
    name: 'Categories',
    tag: 'management',
    url: '/app/categories/',
    icon: TbStack,
  },
  {
    name: 'All comments',
    tag: 'management',
    url: '/app/manage/comments',
    icon: TbMessageBolt,
  },
  { name: 'Tokens', tag: 'management', url: '/app/tokens/', icon: TbPassword },
  {
    name: 'Community',
    tag: 'management',
    url: '/app/community/',
    icon: TbWorldLatitude,
  },
  { name: 'Socials', tag: 'help', url: '/app/socials/', icon: TbPinInvoke },
  { name: 'Help Center', tag: 'help', url: '/app/help/', icon: TbHearts },
  {
    name: 'Chat & Support',
    tag: 'help',
    url: '/app/support/',
    icon: TbMicrophone,
  },
];

export default navData;
