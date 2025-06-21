// src/pages/SearchResultPage.tsx
import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { TalentCard } from '../../shared/ui/TalentCard';

const dummyResults = [
  {
    title: '멋쟁이 캐리커쳐 모델이 돼보자~',
    username: '최영수',
    rating: 3.7,
    reviewCount: 148,
    categories: ['그림', '취미', '캐리커쳐'],
    imageUrl: '/images/talent1.png',
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
    imageUrl: '/images/talent2.png',
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
    imageUrl: '/images/talent3.png',
  },
];

export const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('category') || '');
  const [activeTab, setActiveTab] = useState('거래순');

  const tabs = ['거래순', '리뷰순', '별점순'];

  return (
    <div className="pb-6">
      <h1 className="text-lg font-bold px-4 pt-4">검색</h1>
      <SearchBar keyword={keyword} onChange={setKeyword} />

      {/* 탭 메뉴 */}
      <div className="flex space-x-4 px-4 mt-2 text-sm font-medium text-gray-600">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-1 pb-1 border-b-2 ${
              activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 검색 결과 리스트 */}
      <div className="mt-2 space-y-3">
        {dummyResults.map((item, idx) => (
          <TalentCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
