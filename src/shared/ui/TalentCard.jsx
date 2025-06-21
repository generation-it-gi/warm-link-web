import { Image, Star } from 'lucide-react';

export const TalentCard = ({ imageUrl = '', title, username, rating, reviewCount, categories }) => {
  return (
    <div className="flex items-start gap-3 px-4 py-3 bg-white rounded-lg shadow-sm">
      <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Image className="w-5 h-5 text-gray-400" />
        )}
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{title}</h4>
        <p className="text-xs text-gray-500">{username}</p>

        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-[10px] px-2 py-[2px] bg-gray-100 rounded-full text-gray-600"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-sm font-medium text-gray-700">
            {rating.toFixed(1)} <span className="text-xs text-gray-400">({reviewCount})</span>
          </span>
        </div>
      </div>
    </div>
  );
};
