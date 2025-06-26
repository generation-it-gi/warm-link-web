import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const dummyTalent = {
  title: '멋쟁이 캐리커쳐 모델이 돼보자~',
  username: '최영수',
  rating: 3.7,
  reviewCount: 148,
  categories: ['그림', '취미', '캐리커쳐'],
  imageUrl: '/images/image1.png',
  price: '3,000원',
  description:
    '안녕하세요 캐리커쳐 그리는 최영수입니다~\n장당 3000원 입니다.\n잊지 못할 추억을 남겨드립니다~\n\n그림은 택배에 입금하면 직접 보내줘요~\n방문 수령 해도 됩니다.',
  meetingType: '비대면',
  duration: '1시간 이내',
  avatar: '/images/transaction1.png',
  location: '충북 청주시 활동',
  reviews: [
    {
      name: '이안',
      rating: 5,
      content:
        '가족사진 찍은거 캐리커쳐로 의뢰했는데 너무 똑같아요ㅋㅋㅋㅋ\n가족들도 웃겨하네요 좋은 경험이었습니다',
      date: '2025.05.30',
    },
    {
      name: '재훈',
      rating: 2,
      content:
        '좀 더 디테일하게 그려주실 줄 알았는데 생각했던 예시사진 보다는 퀄리티가 낮았던…\n그래도 나름대로 귀여워서 폰 뒤에 끼고 다녀용',
      date: '2025.05.28',
    },
    {
      name: '경석',
      rating: 4,
      content: '친구 생일선물로 주려고 의뢰했어요 받고 좋아하네요',
      date: '2025.05.28',
    },
  ],
};

export const TalentSell = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TopBar>
        <TopBarLeft>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </BackButton>
          <Title>{dummyTalent.username} 어르신</Title>
        </TopBarLeft>
        <MoreVertical size={20} />
      </TopBar>

      <Thumbnail src={dummyTalent.imageUrl} alt="thumbnail" />

      <ContentSection>
        <MainTitle>{dummyTalent.title}</MainTitle>
        <CategoryList>
          {dummyTalent.categories.map((cat, i) => (
            <Category key={i}>{cat}</Category>
          ))}
        </CategoryList>
        <Row>
          <Rating>
            ⭐ {dummyTalent.rating} ({dummyTalent.reviewCount})
          </Rating>
          <Price>{dummyTalent.price}</Price>
        </Row>

        <ProfileSection>
          <Avatar src={dummyTalent.avatar} alt="avatar" />
          <SellerInfo>
            <SellerName>{dummyTalent.username}</SellerName>
            <Location>{dummyTalent.location}</Location>
          </SellerInfo>
        </ProfileSection>

        <SectionTitle>설명</SectionTitle>
        <Description>{dummyTalent.description}</Description>

        <SectionTitle>안내 사항</SectionTitle>
        <Label>이 서비스는</Label>
        <Options>
          <Option active>{dummyTalent.meetingType}</Option>
        </Options>
        <Label>서비스 소요 시간</Label>
        <Options>
          <Option active>{dummyTalent.duration}</Option>
        </Options>

        <Divider />

        <SectionTitle style={{ fontSize: '1.125rem' }}>
          후기 ({dummyTalent.reviewCount})
        </SectionTitle>
        <RatingScore>{dummyTalent.rating} ⭐⭐⭐⭐</RatingScore>
        <ReviewList>
          {dummyTalent.reviews.map((review, i) => (
            <Review key={i}>
              <ReviewHeader>
                <Reviewer>{review.name}</Reviewer>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewHeader>
              <ReviewContent>
                {'⭐'.repeat(review.rating)}
                {'\n'}
                {review.content}
              </ReviewContent>
            </Review>
          ))}
        </ReviewList>

        <Divider />

        <NoticeTitle>📣 이용 전 확인</NoticeTitle>
        <NoticeItem>
          <strong>1. 서비스 제공 시간과 가능한 범위는 어르신마다 다를 수 있어요.</strong>
          <p>
            건강 상태나 일정에 따라 일부 요청은 조율이 필요할 수 있습니다. 예약 전, 메시지 또는
            전화를 통해 꼭 한 번 더 확인해 주세요.
          </p>
        </NoticeItem>

        <NoticeItem>
          <strong>2. 서로 배려하는 이용 태도를 지켜주세요.</strong>
          <p>
            재능을 나누는 어르신들도 귀한 시간을 내어 참여하시는 분들입니다. 예의없는 언행과 무리한
            요청은 삼가주세요.
          </p>
        </NoticeItem>

        <NoticeItem>
          <strong>
            3. 현장 상황은 앱 외에서 발생하므로, 개인 안전을 위해 다음을 유의해주세요.
          </strong>
          <ul>
            <li>첫 만남은 사람이 많은 장소에서 진행하기</li>
            <li>주소, 연락처 등 민감 정보는 신중히 공유하기</li>
            <li>이상 상황 발생 시 앱 내 [신고하기] 또는 주민센터로 연락</li>
          </ul>
        </NoticeItem>
      </ContentSection>

      <Divider />
      <Footer>
        <ChatButton onClick={() => navigate('/chat/1')}>채팅하기</ChatButton>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MainTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

const Category = styled.span`
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Rating = styled.div`
  font-size: 0.875rem;
  color: #f59e0b;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const SellerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SellerName = styled.span`
  font-weight: 500;
`;

const Location = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 0.875rem;
  white-space: pre-line;
`;

const Label = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`;

const Options = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Option = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background-color: ${({ active }) => (active ? '#e0e7ff' : '#f3f4f6')};
  color: ${({ active }) => (active ? '#4338ca' : '#374151')};
`;

const RatingScore = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #f59e0b;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const Review = styled.div`
  font-size: 0.875rem;
  color: #374151;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

const Reviewer = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const ReviewDate = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
`;

const ReviewContent = styled.p`
  margin-top: 0.25rem;
  white-space: pre-line;
  line-height: 1.4;
`;

const NoticeTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
`;

const NoticeItem = styled.div`
  font-size: 0.875rem;
  color: #374151;
  margin-top: 0.5rem;

  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: #111827;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e5e7eb;
  margin: 1rem 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChatButton = styled.button`
  flex: 1;
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
`;
