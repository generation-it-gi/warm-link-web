import styled from 'styled-components';

const Wrapper = styled.div``;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: #f3f4f6; /* Tailwind's bg-gray-100 */
  border-radius: 0.375rem; /* Tailwind's rounded */
  border: none;
  outline: none;
  font-size: 0.875rem;
`;

export const SearchBar = ({ keyword, onChange }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="어떤 재능이 필요하신가요?"
        value={keyword}
        onChange={e => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
