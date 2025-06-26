import { Image } from 'lucide-react';
import styled from 'styled-components';

export const SellForm = () => {
  return (
    <Form>
      <ImagePlaceholder>
        <Image size={32} color="#9ca3af" />
      </ImagePlaceholder>
      <Input placeholder="제목을 입력하세요" />
      <TagList>
        <Tag>#그림</Tag>
        <Tag>#취미</Tag>
        <Tag>#캐리커처</Tag>
      </TagList>
      <PriceInput>
        <span>가격</span>
        <input type="number" placeholder="가격을 입력하세요" />
        <span>₩</span>
      </PriceInput>
      <Textarea placeholder="설명을 입력해주세요" />

      <SectionTitle>안내 사항</SectionTitle>
      <Label>이 서비스는</Label>
      <OptionGroup>
        <Option>대면</Option>
        <Option active>비대면</Option>
        <Option>둘 다</Option>
      </OptionGroup>

      <Label>서비스 소요 시간</Label>
      <OptionGroup>
        <Option>30분 이내</Option>
        <Option active>1시간 이내</Option>
        <Option>3시간 이내</Option>
        <Option>반나절 이내</Option>
        <Option>1일 이상</Option>
      </OptionGroup>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImagePlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
  background-color: #e5e7eb;
  border-radius: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  resize: none;
  height: 100px;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

const PriceInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

const Label = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const OptionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Option = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  background-color: ${props => (props.active ? '#e0e7ff' : '#f3f4f6')};
  color: ${props => (props.active ? '#4338ca' : '#374151')};
  font-size: 0.875rem;
  border: none;
`;
