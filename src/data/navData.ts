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
  { name: 'Posts', tag: 'default', url: '/posts/', icon: TbPencil },
  { name: 'Media', tag: 'default', url: '/media/', icon: TbImageInPicture },
  { name: 'Comments', tag: 'default', url: '/app/', icon: TbMessageReply },
  { name: 'Analytics', tag: 'default', url: '/app/', icon: TbChartArcs },
  { name: 'All posts', tag: 'management', url: '/app/', icon: TbHistoryToggle },
  { name: 'Categories', tag: 'management', url: '/app/', icon: TbStack },
  {
    name: 'All comments',
    tag: 'management',
    url: '/app/',
    icon: TbMessageBolt,
  },
  { name: 'Tokens', tag: 'management', url: '/app/', icon: TbPassword },
  { name: 'Community', tag: 'management', url: '/app/', icon: TbWorldLatitude },
  { name: 'Socials', tag: 'help', url: '/app/', icon: TbPinInvoke },
  { name: 'Help Center', tag: 'help', url: '/app/', icon: TbHearts },
  { name: 'Chat & Support', tag: 'help', url: '/app/', icon: TbMicrophone },
];

export default navData;
