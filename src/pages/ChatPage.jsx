const chatList = [
  { id: 1, name: '최영수', message: '확인했습니다~' },
  { id: 2, name: '최영수', message: '감사합니다!' },
  { id: 3, name: '최영수', message: '확인했습니다~' },
  { id: 4, name: '최영수', message: '확인했습니다~' },
  { id: 5, name: '최영수', message: '확인했습니다~' },
  { id: 6, name: '최영수', message: '확인했습니다~' },
];

export const ChatPage = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b font-bold text-lg">
        <span>내 채팅</span>
        <button>
          <img src="/icons/settings.svg" alt="설정" className="w-5 h-5" />
        </button>
      </div>

      {/* Chat List */}
      <ul className="divide-y">
        {chatList.map(chat => (
          <li key={chat.id} className="flex items-center px-4 py-3">
            <img
              src="/images/profile_sample.jpg"
              alt="프로필"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{chat.name}</p>
              <p className="text-sm text-gray-500">{chat.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
