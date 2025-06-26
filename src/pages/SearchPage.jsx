import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SearchBar } from '../features/search/SearchBar';

const popular = ['그림', '사주/타로', '고민상담', '뜨개질', '도예', '반찬', '고민상담', '뜨개질'];

const categories = [
  { label: '그림/서예', icon: '/images/category1.png' },
  { label: '생활기술', icon: '/images/category2.png' },
  { label: '취미공유', icon: '/images/category3.png' },
  { label: '제작', icon: '/images/category4.png' },
  { label: '사주/타로', icon: '/images/category5.png' },
  { label: '상담/고민', icon: '/images/category6.png' },
  { label: '지식/경험', icon: '/images/category7.png' },
  { label: '기타', icon: '/images/category8.png' },
];

export const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = category => {
    navigate(`/search/result?category=${category}`);
  };

  return (
    <Container>
      <Heading>검색</Heading>
      <div style={{ marginTop: '-1rem' }}>
        <SearchBar keyword={keyword} onChange={setKeyword} />
      </div>
      <Section>
        <SectionTitle>🔥 실시간 인기</SectionTitle>
        <PopularList>
          {popular.map((item, i) => (
            <li key={i}>
              <span style={{ fontWeight: 600, marginRight: '0.75rem' }}>{i + 1}</span>
              {item}
            </li>
          ))}
        </PopularList>
      </Section>

      <Section>
        <SectionTitle>⭐ 카테고리</SectionTitle>
        <CategoryGrid>
          {categories.map(({ label, icon }) => (
            <CategoryButton key={label} onClick={() => handleCategoryClick(label)}>
              <CategoryIcon src={icon} alt={label} />
              <CategoryLabel>{label}</CategoryLabel>
            </CategoryButton>
          ))}
        </CategoryGrid>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
`;

const Section = styled.section``;

const SectionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const PopularList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.25rem 0;
  font-size: 0.875rem;
  color: #374151;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
`;

const CategoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  padding: 0.75rem 0;
`;

const CategoryIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CategoryLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #01277a;
`;
