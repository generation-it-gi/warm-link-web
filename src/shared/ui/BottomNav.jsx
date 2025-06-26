import { Home, MessageCircle, Plus, Search, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 4rem; /* h-16 */
  border-top: 1px solid #e5e7eb; /* border-gray-200 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem; /* text-sm */
  min-width: 2.75rem; /* min-w-11 */
  color: ${({ active }) => (active ? '#2563eb' : '#374151')}; /* blue-600 / gray-700 */
`;

const NavItem = ({ icon, label, onClick, active }) => {
  return (
    <NavButton onClick={onClick} active={active}>
      {icon}
      <span>{label}</span>
    </NavButton>
  );
};

export const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Nav>
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
    </Nav>
  );
};
