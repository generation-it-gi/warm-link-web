export const SearchBar = ({ keyword, onChange }) => {
  return (
    <div className="px-4 py-2">
      <input
        type="text"
        placeholder="어떤 재능이 필요하신가요?"
        value={keyword}
        onChange={e => onChange(e.target.value)}
        className="w-full p-2 bg-gray-100 rounded"
      />
    </div>
  );
};
