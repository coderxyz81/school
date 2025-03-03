import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, summary, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 mb-3">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{date}</span>
        </div>
        <p className="text-gray-700">{summary}</p>
        <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;