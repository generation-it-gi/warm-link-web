import { Home, MessageCircle, Plus, Search, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavItem = ({ icon, label, onClick, active }) => {
  const baseStyle = 'flex flex-col items-center text-sm min-w-11';
  const colorStyle = active ? 'text-blue-600' : 'text-gray-700';

  return (
    <button onClick={onClick} className={`${baseStyle} ${colorStyle}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
};

export const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="h-16 border-t border-gray-200 flex justify-around items-center bg-white">
      <NavItem
        icon={<Home size={24} />}
        label="홈"
        onClick={() => navigate('/')}
        active={pathname === '/'}
      />
      <NavItem
        icon={<Search size={24} />}
        label="검색"
        onClick={() => navigate('/search')}
        active={pathname.startsWith('/search')}
      />
      <NavItem
        icon={<Plus size={24} />}
        label="등록"
        onClick={() => navigate('/register')}
        active={pathname.startsWith('/register')}
      />
      <NavItem
        icon={<MessageCircle size={24} />}
        label="채팅"
        onClick={() => navigate('/chat')}
        active={pathname.startsWith('/chat')}
      />
      <NavItem
        icon={<User size={24} />}
        label="내 정보"
        onClick={() => navigate('/my')}
        active={pathname.startsWith('/my')}
      />
    </nav>
  );
};
