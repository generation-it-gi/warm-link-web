import { useState } from 'react';

import styled from 'styled-components';

import { SellForm } from '../features/register/SellForm';

export const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState('판매');

  return (
    <Container>
      <Header>
        <BackButton>←</BackButton>
        <Title>등록하기</Title>
      </Header>

      <TabWrapper>
        <TabButton active={activeTab === '판매'} onClick={() => setActiveTab('판매')}>
          판매
        </TabButton>
        <TabButton active={activeTab === '요청'} onClick={() => setActiveTab('요청')}>
          요청
        </TabButton>
      </TabWrapper>

      {activeTab === '판매' && <SellForm />}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.125rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
`;

const Title = styled.h1`
  font-size: 1.125rem;
`;

const TabWrapper = styled.div`
  display: flex;
  background-color: #f3f4f6;
  border-radius: 9999px;
  padding: 0.25rem;
  margin: 1rem 0;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: ${props => (props.active ? '#2563eb' : 'transparent')};
  color: ${props => (props.active ? 'white' : '#6b7280')};
  font-weight: 600;
  border: none;
`;
