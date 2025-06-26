import { Settings } from 'lucide-react';
import styled from 'styled-components';

const chatList = [
  {
    id: 1,
    name: '최영수',
    message: '이번 주 토요일에 그림 전달드릴게요!',
    profileImage: '/images/transaction1.png',
  },
  {
    id: 2,
    name: '이금남',
    message: '확인했습니다~',
    profileImage: '/images/profile3.png',
  },
  {
    id: 3,
    name: '황옥순',
    message: '반찬 3종 잘 받았습니다. 너무 맛있었어요 😊',
    profileImage: '/images/profile2.png',
  },
];

export const ChatPage = () => {
  return (
    <>
      <Header>
        <span>내 채팅</span>
        <button>
          <Settings size={20} color="#374151" />
        </button>
      </Header>

      <ChatList>
        {chatList.map(chat => (
          <ChatItem key={chat.id}>
            <ProfileImage src={chat.profileImage} alt={`${chat.name} 프로필`} />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              <ChatMessage>{chat.message}</ChatMessage>
            </ChatInfo>
          </ChatItem>
        ))}
      </ChatList>
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 700;
  font-size: 1.125rem;
`;

const ChatList = styled.ul`
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const ChatItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;

  &:first-child {
    border-top: none;
  }
`;

const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  margin-right: 1rem;
`;

const ChatInfo = styled.div``;

const ChatName = styled.p`
  font-weight: 500;
`;

const ChatMessage = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;
