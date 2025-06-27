import { useState } from 'react';

import { Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const SellForm = () => {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [meetingType, setMeetingType] = useState('대면');
  const [duration, setDuration] = useState('30분 이내');

  const navigate = useNavigate();
  const handleTagInputChange = e => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = e => {
    if (['Enter', ' ', ','].includes(e.key)) {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (trimmed && !tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = tagToRemove => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    const newTalent = {
      title: '1만원으로 인생 프로필 만들기',
      username: '이재훈',
      rating: 0,
      reviewCount: 0,
      categories: ['그림', '취미'],
      imageUrl: '',
    };
    navigate('/search/result?category=그림/서예', { state: { newTalent } });
  };

  return (
    <Form>
      <ImagePlaceholder>
        <Image size={32} color="#9ca3af" />
      </ImagePlaceholder>

      <Input placeholder="제목을 입력하세요" />

      <TagInputWrapper>
        <span>태그</span>
        <TagInput
          type="text"
          placeholder="태그를 입력하세요"
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleTagInputKeyDown}
        />
        <TagList>
          {tags.map((tag, idx) => (
            <Tag key={idx} onClick={() => handleRemoveTag(tag)}>
              #{tag} ✕
            </Tag>
          ))}
        </TagList>
      </TagInputWrapper>

      <PriceInput>
        <span>가격</span>
        <input type="number" placeholder="가격을 입력하세요" />
        <span>₩</span>
      </PriceInput>
      <Textarea placeholder="설명을 입력해주세요" />

      <SectionTitle>안내 사항</SectionTitle>
      <Label>이 서비스는</Label>
      <OptionGroup>
        {['대면', '비대면', '둘 다'].map(option => (
          <Option
            key={option}
            active={meetingType === option}
            onClick={() => setMeetingType(option)}
          >
            {option}
          </Option>
        ))}
      </OptionGroup>

      <Label>서비스 소요 시간</Label>
      <OptionGroup>
        {['30분 이내', '1시간 이내', '3시간 이내', '반나절 이내', '1일 이상'].map(time => (
          <Option key={time} active={duration === time} onClick={() => setDuration(time)}>
            {time}
          </Option>
        ))}
      </OptionGroup>

      <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
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

const TagInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TagInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  cursor: pointer;
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

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
