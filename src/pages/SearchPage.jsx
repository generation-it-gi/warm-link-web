import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { SearchBar } from '../features/search/SearchBar';

const popular = ['그림', '사주/타로', '고민상담', '뜨개질', '도예', '반찬', '고민상담', '뜨개질'];

const categories = [
  { label: '그림/서예', icon: '/icons/paint.svg' },
  { label: '생활기술', icon: '/icons/tool.svg' },
  { label: '취미공유', icon: '/icons/hobby.svg' },
  { label: '제작', icon: '/icons/build.svg' },
  { label: '사주/타로', icon: '/icons/tarot.svg' },
  { label: '상담/고민', icon: '/icons/advice.svg' },
  { label: '지식/경험', icon: '/icons/knowledge.svg' },
  { label: '기타', icon: '/icons/etc.svg' },
];

export const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = category => {
    navigate(`/search/result?category=${category}`);
  };

  return (
    <div className="px-4 py-3 space-y-6">
      {/* 검색 제목 */}
      <h1 className="text-lg font-bold px-4 pt-4">검색</h1>
      <SearchBar keyword={keyword} onChange={setKeyword} />

      {/* 실시간 인기 */}
      <section>
        <h3 className="font-semibold mb-2">🔥 실시간 인기</h3>
        <ul className="grid grid-cols-2 gap-y-1 text-sm text-gray-700">
          {popular.map((item, i) => (
            <li key={i}>
              <span className="font-medium mr-1">{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 카테고리 */}
      <section>
        <h3 className="font-semibold mb-2">⭐ 카테고리</h3>
        <div className="grid grid-cols-4 gap-3">
          {categories.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => handleCategoryClick(label)}
              className="flex flex-col items-center justify-center bg-gray-100 rounded-lg py-3"
            >
              <img src={icon} alt={label} className="w-6 h-6 mb-1" />
              <span className="text-xs text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
