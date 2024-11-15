import { FaGithub, FaLinkedin, FaTelegram, FaTwitter, } from 'react-icons/fa';

interface IconProps {
  type: 'github' | 'linkedin' | 'twitter'| 'telegram';
  size?: number;
  className?: string;
}

const Icons: React.FC<IconProps> = ({ type, size = 20, className }) => {
  switch (type) {
    case 'github':
      return <FaGithub size={size} className={className} />;
    case 'linkedin':
      return <FaLinkedin size={size} className={className} />;
    case 'twitter':
      return <FaTwitter size={size} className={className} />;
      case 'telegram':
        return <FaTelegram size={size} className={className} />;
    default:
      return null;
  }
};

export default Icons;