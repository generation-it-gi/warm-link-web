import { useEffect, useRef, useState } from 'react';

import { ArrowLeft, Camera, MoreVertical, SendHorizonal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ChatDetail = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCameraClick = () => {
    const newMessages = [
      ...messages,
      {
        from: 'me',
        type: 'image',
        content: '/images/chat.png',
      },
    ];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: 'other', type: 'text', content: '이번 주 토요일에 그림 전달드릴게요!' },
      ]);
    }, 2000);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessages = [...messages, { from: 'me', type: 'text', content: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    if (inputValue === '안녕하세요! 제 얼굴 캐리커쳐로 받고싶어요') {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { from: 'other', type: 'text', content: '네 선입금 주시고 사진 보내주세요~' },
        ]);
      }, 2000);
    }
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <Container>
      <TopBar>
        <TopBarLeft>
          <BackButton onClick={() => navigate('/chat')}>
            <ArrowLeft size={20} />
          </BackButton>
          <Title>최영수 어르신</Title>
        </TopBarLeft>
        <MoreVertical size={20} />
      </TopBar>

      <TalentSummary>
        <TalentImage src="/images/image1.png" />
        <TalentInfo>
          <TalentTitle>멋쟁이 캐리커쳐 모델이 돼보자~</TalentTitle>
          <TalentDescription>안녕하세요 캐리커쳐 그리는 최영수 입니다~ 장...</TalentDescription>
        </TalentInfo>
      </TalentSummary>

      <ProfileSection>
        <Avatar src="/images/transaction1.png" alt="avatar" />
        <Name>최영수</Name>
        <SubText>예의를 지켜 대화를 시작하세요!</SubText>
      </ProfileSection>

      <MessageList>
        {messages.map((msg, i) => (
          <Message key={i} from={msg.from} type={msg.type}>
            {msg.type === 'image' ? (
              <img src={msg.content} alt="chat" style={{ width: '160px', borderRadius: '12px' }} />
            ) : (
              msg.content
            )}
          </Message>
        ))}
        <div ref={chatEndRef} />
      </MessageList>

      <FixedBottomSection>
        <ChatInputSection>
          <Actions>
            <ActionButton>💬 거래하기</ActionButton>
            <ActionButton>📅 일정 잡기</ActionButton>
            <ActionButton>📞 안전 전화</ActionButton>
          </Actions>
        </ChatInputSection>

        <InputSection>
          <MessageInput
            placeholder="메시지 보내기"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <IconButton onClick={handleCameraClick}>
            <Camera size={20} />
          </IconButton>
          <SendButton onClick={handleSend}>
            <SendHorizonal size={20} />
          </SendButton>
        </InputSection>
      </FixedBottomSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: bold;
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TalentSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem;
`;

const TalentImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const TalentInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TalentTitle = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TalentDescription = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 9999px;
`;

const Name = styled.div`
  font-weight: bold;
`;

const SubText = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Message = styled.div`
  max-width: 70%;
  background-color: ${({ from }) => (from === 'me' ? '#e0f2fe' : '#f3f4f6')};
  align-self: ${({ from }) => (from === 'me' ? 'flex-end' : 'flex-start')};
  border-radius: 1rem;
  font-size: 0.875rem;

  ${({ type }) =>
    type === 'image'
      ? css`
          padding: 0;
        `
      : css`
          padding: 0.5rem 0.75rem;
        `}
`;

const FixedBottomSection = styled.div`
  padding: 1rem;
  background: white;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.05);
`;

const ChatInputSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
`;

const SendButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
