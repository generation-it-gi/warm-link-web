import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { SearchBar } from './SearchBar';
import { TalentCard } from '../../shared/ui/TalentCard';

const dummyResults = [
  {
    title: '멋쟁이 캐리커쳐 모델이 돼보자~',
    username: '최영수',
    rating: 3.7,
    reviewCount: 148,
    categories: ['그림', '취미', '캐리커쳐'],
    imageUrl: '/images/image1.png',
  },
  {
    title: '목탄으로 사진 그립니다',
    username: '형옥순',
    rating: 4.6,
    reviewCount: 89,
    categories: ['그림', '취미', '풍경화'],
  },
  {
    title: '너무 멋진 그림이 천 원',
    username: '이금남',
    rating: 4.3,
    reviewCount: 17,
    categories: ['그림', '취미'],
    imageUrl: '/images/image2.png',
  },
  {
    title: '식물이랑 풍경 그려드려요',
    username: '김혜자',
    rating: 4.1,
    reviewCount: 12,
    categories: ['그림', '취미', '수채화'],
  },
  {
    title: '예쁜 동물을 잘그려요',
    username: '신명자',
    rating: 4.7,
    reviewCount: 38,
    categories: ['그림'],
    imageUrl: '/images/image3.png',
  },
];

const Container = styled.div`
  padding: 1rem;
`;
const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
`;
const TabMenu = styled.div`
  display: flex;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
`;
const TabButton = styled.button`
  color: ${({ active }) => (active ? '#3467D5' : '#4b5563')};
  border: 1px solid ${({ active }) => (active ? '#CCD9F5' : 'transparent')};
  padding: 0.2rem;
  border-radius: 1rem;
  min-width: 4rem;
`;
const ResultList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('category') || '');
  const [activeTab, setActiveTab] = useState('거래순');

  const tabs = ['거래순', '리뷰순', '별점순'];

  return (
    <Container>
      <Title>검색</Title>
      <div style={{ margin: '0.75rem 0 0.5rem' }}>
        <SearchBar keyword={keyword} onChange={setKeyword} />
      </div>

      <TabMenu>
        {tabs.map(tab => (
          <TabButton key={tab} onClick={() => setActiveTab(tab)} active={activeTab === tab}>
            {tab}
          </TabButton>
        ))}
      </TabMenu>

      <ResultList>
        {dummyResults.map((item, idx) => (
          <TalentCard key={idx} {...item} />
        ))}
      </ResultList>
    </Container>
  );
};
