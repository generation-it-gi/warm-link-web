import { Image, Star } from 'lucide-react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem;
  background-color: #f7f7f7;
  border-radius: 0.5rem;
`;

const ThumbnailWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Username = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.25rem;
`;

const Category = styled.span`
  font-size: 10px;
  padding: 2px 8px;
  background-color: #f3f4f6;
  color: #4b5563;
  border-radius: 9999px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const RatingText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const ReviewCount = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
`;

export const TalentCard = ({ imageUrl = '', title, username, rating, reviewCount, categories }) => {
  return (
    <Card>
      <ThumbnailWrapper>
        {imageUrl ? (
          <ThumbnailImage src={imageUrl} alt={title} />
        ) : (
          <Image size={20} color="#9ca3af" />
        )}
      </ThumbnailWrapper>

      <Content>
        <Title>{title}</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Username>{username}</Username>

          {categories && categories.length > 0 && (
            <CategoryWrapper>
              {categories.map((cat, idx) => (
                <Category key={idx}>{cat}</Category>
              ))}
            </CategoryWrapper>
          )}
        </div>

        <RatingWrapper>
          <Star size={16} color="#facc15" fill="#facc15" style={{ marginRight: '4px' }} />
          <RatingText>
            {rating.toFixed(1)} <ReviewCount>({reviewCount})</ReviewCount>
          </RatingText>
        </RatingWrapper>
      </Content>
    </Card>
  );
};
