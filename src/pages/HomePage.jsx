import { ArrowRight, Bell, ChevronRight, Search } from 'lucide-react';
import styled from 'styled-components';

import { TalentCard } from '../shared/ui/TalentCard';

const mockTalentData = [
  {
    title: '집 고장난거 전부 수리합니다.',
    username: '최영수',
    rating: 4.6,
    reviewCount: 23,
    imageUrl: '',
    categories: [],
  },
  {
    title: '반찬, 요리, 집경사, 제사 음식',
    username: '황옥순',
    rating: 4.7,
    reviewCount: 102,
    imageUrl: '',
    categories: [],
  },
  {
    title: '너무 멋진 그림이 천 원',
    username: '이금남',
    rating: 4.8,
    reviewCount: 55,
    imageUrl: '/images/image1.png',
    categories: [],
  },
  {
    title: '목각인형 만들어요',
    username: '심현자',
    rating: 4.7,
    reviewCount: 38,
    imageUrl: '',
    categories: [],
  },
];
const mockReviewData = [
  {
    name: '고난준',
    category: '고민상담',
    reviewer: '최이안',
    rating: 5,
    comment: '너무 편안하게 잘 들어주시고 큰 위로 받았습니다...!',
    date: '4월 18일',
    profileImage: '/images/profile1.png',
  },
  {
    name: '김혜자',
    category: '뜨개질',
    reviewer: '이재훈',
    rating: 4,
    comment: '빨간 목도리 뜨개질 해주셨는데 퀄리티가 너무 좋네요...',
    date: '3월 19일',
    profileImage: '/images/profile2.png',
  },
  {
    name: '심복례',
    category: '그림',
    reviewer: '진경석',
    rating: 5,
    comment: '그림이 너무 귀여웠어요ㅎㅎ 고양이 그려주셨는데 완전 만족입니다.',
    date: '5월 2일',
    profileImage: '/images/profile3.png',
  },
];

export const HomePage = () => {
  return (
    <Container>
      <TopBar>
        <LogoIcon src="/images/home-small-icon.svg" alt="홈 아이콘" />
        <SearchBar>
          <SearchInput placeholder="검색어를 입력해주세요" />
          <Search size={16} color="#9ca3af" />
        </SearchBar>
        <Bell size={24} color="#4b5563" />
      </TopBar>

      <Banner>
        <BannerTextWrapper>
          <BannerText>
            <p style={{ fontSize: '0.875rem' }}>2025</p>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', lineHeight: '1.25' }}>
              노인돌봄정책
            </h2>
          </BannerText>
          <BannerButton>
            바로가기 <ArrowRight size={16} strokeWidth={2} />
          </BannerButton>
        </BannerTextWrapper>
        <BannerImage src="/images/banner-icon.png" alt="노인돌봄 일러스트" />
        <ChevronRight
          style={{
            position: 'absolute',
            right: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          color="white"
          size={24}
        />
        <DotWrapper>
          <Dot active />
          <Dot />
          <Dot />
        </DotWrapper>
      </Banner>

      <Section>
        <SectionTitle>AI 맞춤 시니어 추천 ✨</SectionTitle>
        <SectionDesc>나를 위한 재능 추천</SectionDesc>
        <TalentCardList>
          {mockTalentData.map((item, idx) => (
            <TalentCard
              key={idx}
              imageUrl={item.imageUrl}
              title={item.title}
              username={item.username}
              rating={item.rating}
              reviewCount={item.reviewCount}
              categories={item.categories}
            />
          ))}
        </TalentCardList>
      </Section>

      <Section>
        <SectionTitle>우리 이야기</SectionTitle>
        <SectionDesc>따뜻한 후기를 들어보세요</SectionDesc>
        <ReviewCardList>
          {mockReviewData.map((item, idx) => (
            <ReviewCard key={idx}>
              <ReviewCardHeader>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <ReviewCardProfile src={item.profileImage} alt={`${item.name} 프로필`} />
                  <div style={{ fontWeight: 600 }}>
                    {item.name}
                    <span style={{ fontWeight: 400 }}> 어르신</span>
                  </div>
                </div>
                <ReviewCategory>{item.category}</ReviewCategory>
              </ReviewCardHeader>

              <ReviewContent>
                <ReviewMeta>
                  <ReviewReviewer>{item.reviewer}</ReviewReviewer>
                  <ReviewStars>{'⭐'.repeat(item.rating)}</ReviewStars>
                </ReviewMeta>
                <ReviewComment>{item.comment}</ReviewComment>
                <ReviewDate>{item.date}</ReviewDate>
              </ReviewContent>
            </ReviewCard>
          ))}
        </ReviewCardList>
      </Section>

      <Section>
        <SectionTitle>지도로 보기 🗺️</SectionTitle>
        <SectionDesc>내 주변엔 어떤 어르신들이 있을까? 👀</SectionDesc>
        <MapWrapper>
          <MapImage src="/images/map-static.png" alt="정적 지도" />
        </MapWrapper>
      </Section>
    </Container>
  );
};

const Container = styled.div``;
const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  background-color: white;
`;
const LogoIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  object-fit: contain;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 260px;
  padding: 0 1rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  height: 2rem;
`;
const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  font-size: 0.875rem;
  color: #9ca3af;
  outline: none;
`;
const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  overflow: hidden;
  background-color: #0134a2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
const BannerTextWrapper = styled.div`
  position: absolute;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const BannerText = styled.div`
  position: relative;
  padding-left: 0.75rem;
  &::before {
    content: '';
    position: absolute;
    left: -0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: white;
  }
`;
const BannerButton = styled.button`
  height: 32px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  background-color: white;
  color: #0134a2;
  border-radius: 0.5rem;
  font-weight: 500;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;
const BannerImage = styled.img`
  height: 8rem;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 1.25rem;
`;
const DotWrapper = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.25rem;
`;
const Dot = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ active }) => (active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
`;
const Section = styled.section`
  margin-top: 2rem;
  padding: 0 1rem;
`;
const SectionTitle = styled.h3`
  font-weight: 600;
`;
const SectionDesc = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;
const TalentCardList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ReviewCardList = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ReviewCard = styled.div`
  flex: 0 0 auto;
  min-width: 220px;
  max-width: 240px;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  padding: 0.8rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const ReviewCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const ReviewCardProfile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  object-fit: cover;
`;

const ReviewCategory = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const ReviewContent = styled.div`
  padding-top: 0.5rem;
`;

const ReviewMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReviewReviewer = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ReviewStars = styled.div`
  font-size: 0.75rem;
`;

const ReviewComment = styled.div`
  font-size: 0.75rem;
  margin: 0.25rem 0 0.5rem;
`;

const ReviewDate = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  overflow: hidden;
`;
const MapImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
