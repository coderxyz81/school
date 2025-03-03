import React from 'react';

interface TeacherCardProps {
  name: string;
  position: string;
  department: string;
  qualification: string;
  imageUrl: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ name, position, department, qualification, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-blue-900">{name}</h3>
        <p className="text-yellow-600 font-medium mb-2">{position}</p>
        <div className="text-gray-700 mb-1">
          <span className="font-medium">Department:</span> {department}
        </div>
        <div className="text-gray-700">
          <span className="font-medium">Qualification:</span> {qualification}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;