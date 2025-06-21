import { TalentCard } from '../shared/ui/TalentCard';

const mockTalentData = [
  {
    title: '집 고장난거 전부 수리합니다.',
    username: '최영수',
    rating: 4.6,
    reviewCount: 23,
    imageUrl: '', // 이미지 없음
    categories: [],
  },
  {
    title: '반찬, 요리, 집경사, 제사 음식',
    username: '황옥순',
    rating: 4.7,
    reviewCount: 102,
    imageUrl: '', // 이미지 없음
    categories: [],
  },
  {
    title: '너무 멋진 그림이 천 원',
    username: '이금남',
    rating: 4.8,
    reviewCount: 55,
    imageUrl: '/images/sample3.jpg',
    categories: [],
  },
  {
    title: '목각인형 만들어요',
    username: '심현자',
    rating: 4.7,
    reviewCount: 38,
    imageUrl: '', // 이미지 없음
    categories: [],
  },
];

export const HomePage = () => {
  return (
    <div className="p-4 space-y-6">
      {/* 상단 검색 바? */}
      <div className="h-12 bg-white"></div>

      <div className="w-full h-40 rounded-lg overflow-hidden bg-blue-600 text-white flex items-center justify-between px-4">
        {/* 배경 전체가 이미지라면 img 태그 사용 */}
        {/* <img src="/banner.png" alt="2025 정책" className="w-full h-full object-cover" /> */}
        {/* 배경만 구현하고 나머지 구성할 경우 */}
        <div>
          <p className="text-sm">2025</p>
          <h2 className="text-xl font-bold">노인돌봄정책</h2>
          <button className="mt-2 px-4 py-1 text-sm bg-white text-blue-600 rounded">
            바로가기
          </button>
        </div>
        <img src="/images/caretaker.png" alt="illustration" className="h-24" />
      </div>

      {/* AI 맞춤 시니어 추천 */}
      <section>
        <h3 className="font-semibold">AI 맞춤 시니어 추천 ✨</h3>
        <p className="text-sm text-gray-500">나를 위한 재능 추천</p>

        <div className="mt-2 space-y-3">
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
        </div>
      </section>

      {/* 우리 이야기 */}

      <section>
        <h3 className="font-semibold">지도로 보기 🗺️</h3>
        <p className="text-sm text-gray-500">내 주변엔 어떤 어르신들이 있을까? 👀</p>
        <div className="w-full h-40 bg-gray-200 rounded-lg mt-2">{/* 정적인 지도 이미지 */}</div>
      </section>

      <section>
        <h3 className="font-semibold">아티클 📸</h3>
        <p className="text-sm text-gray-500">충북 최신 소식을 알아봐요</p>
      </section>
    </div>
  );
};
