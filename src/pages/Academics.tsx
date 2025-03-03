import React from 'react';
import { BookOpen, FileText, Calendar, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Academics = () => {
  const academicCalendar = [
    { event: "First Term Begins", date: "April 1, 2025" },
    { event: "First Term Exams", date: "June 15-25, 2025" },
    { event: "Summer Vacation", date: "June 26 - July 15, 2025" },
    { event: "Second Term Begins", date: "July 16, 2025" },
    { event: "Second Term Exams", date: "September 20-30, 2025" },
    { event: "Autumn Break", date: "October 1-10, 2025" },
    { event: "Third Term Begins", date: "October 11, 2025" },
    { event: "Annual Sports Day", date: "November 15, 2025" },
    { event: "Annual Day Celebration", date: "December 20, 2025" },
    { event: "Winter Vacation", date: "December 24, 2025 - January 5, 2026" },
    { event: "Final Term Exams", date: "March 1-15, 2026" },
    { event: "Result Declaration", date: "March 25, 2026" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Academic Excellence</h1>
          <p className="text-xl max-w-3xl">
            Our comprehensive curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Curriculum Overview" subtitle="Comprehensive education for holistic development" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-4">
                At Humanity Public School, we follow a comprehensive curriculum that integrates national educational standards with innovative teaching methodologies. Our academic program is designed to provide students with a strong foundation in core subjects while fostering critical thinking, creativity, and problem-solving skills.
              </p>
              <p className="text-gray-700 mb-4">
                We believe in a holistic approach to education that nurtures not only academic excellence but also physical fitness, emotional intelligence, and social responsibility. Our curriculum is regularly updated to incorporate the latest educational research and technological advancements.
              </p>
              <p className="text-gray-700">
                Our teaching methodology emphasizes active learning, collaborative projects, and real-world applications of knowledge. We encourage students to ask questions, explore ideas, and develop their unique talents and interests.
              </p>
            </div>
            <div>
              <img 
                src="public/YOGA.jpg" 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Grade Levels" subtitle="Educational programs for all age groups" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Primary School (Grades 1-5)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our primary education program focuses on building a strong foundation in literacy, numeracy, and essential life skills. Students engage in hands-on learning activities that foster curiosity and creativity.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Language Arts (English and Regional Language)</li>
                <li>Mathematics</li>
                <li>Environmental Studies</li>
                <li>Art and Craft</li>
                <li>Music and Dance</li>
                <li>Physical Education</li>
                <li>Computer Literacy</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Middle School (Grades 6-8)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The middle school curriculum expands on the foundation built in primary school, introducing more complex concepts and specialized subjects. Students develop critical thinking and analytical skills.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>English Language and Literature</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies (History, Geography, Civics)</li>
                <li>Computer Science</li>
                <li>Second Language</li>
                <li>Art Education</li>
                <li>Physical Education and Health</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">High School (Grades 9-12)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our high school program prepares students for higher education and future careers. Students can choose from various streams based on their interests and career goals.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Science Stream (Physics, Chemistry, Biology/Mathematics)</li>
                <li>Commerce Stream (Accountancy, Business Studies, Economics)</li>
                <li>Humanities Stream (History, Geography, Political Science, Psychology)</li>
                <li>Computer Science and Information Technology</li>
                <li>Languages (English and Second Language)</li>
                <li>Physical Education</li>
                <li>Career Counseling and College Preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Academic Calendar 2025-26" subtitle="Important dates and events for the academic year" />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-6 text-left">Event</th>
                  <th className="py-3 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {academicCalendar.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-6 border-b border-gray-300">{item.event}</td>
                    <td className="py-3 px-6 border-b border-gray-300">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Note:</h3>
            <p className="text-gray-700">
              The academic calendar is subject to change. Any modifications will be communicated to parents and students through official channels. Please check the school website regularly for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Examination System */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Examination System" subtitle="Comprehensive assessment for continuous improvement" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-4">
                Our assessment system is designed to evaluate students' understanding, application of knowledge, and skill development. We follow a continuous and comprehensive evaluation approach that includes formative and summative assessments.
              </p>
              
              <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Formative Assessments</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Class participation and discussions</li>
                <li>Homework and assignments</li>
                <li>Project work and presentations</li>
                <li>Quizzes and unit tests</li>
                <li>Practical work and laboratory activities</li>
              </ul>
              
              <h3 className="text-xl font-bold text-blue-900 mb-3">Summative Assessments</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Term examinations (three terms per academic year)</li>
                <li>Final examinations</li>
                <li>Standardized tests</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Grading System</h3>
              
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b">Grade</th>
                    <th className="py-2 px-4 border-b">Percentage Range</th>
                    <th className="py-2 px-4 border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b text-center font-bold">A+</td>
                    <td className="py-2 px-4 border-b text-center">90% - 100%</td>
                    <td className="py-2 px-4 border-b">Outstanding</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b text-center font-bold">A</td>
                    <td className="py-2 px-4 border-b text-center">80% - 89%</td>
                    <td className="py-2 px-4 border-b">Excellent</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center font-bold">B+</td>
                    <td className="py-2 px-4 border-b text-center">70% - 79%</td>
                    <td className="py-2 px-4 border-b">Very Good</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b text-center font-bold">B</td>
                    <td className="py-2 px-4 border-b text-center">60% - 69%</td>
                    <td className="py-2 px-4 border-b">Good</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center font-bold">C</td>
                    <td className="py-2 px-4 border-b text-center">50% - 59%</td>
                    <td className="py-2 px-4 border-b">Satisfactory</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b text-center font-bold">D</td>
                    <td className="py-2 px-4 border-b text-center">40% - 49%</td>
                    <td className="py-2 px-4 border-b">Needs Improvement</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b text-center font-bold">E</td>
                    <td className="py-2 px-4 border-b text-center">Below 40%</td>
                    <td className="py-2 px-4 border-b">Unsatisfactory</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Report Cards</h4>
                <p className="text-gray-700">
                  Report cards are issued at the end of each term. Parent-teacher meetings are scheduled after each term examination to discuss student progress and areas for improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Study Resources" subtitle="Supporting materials for enhanced learning" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Library Resources</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our well-stocked library offers a wide range of books, journals, magazines, and digital resources to support academic learning and foster a love for reading.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Over 10,000 books across various subjects</li>
                <li>Digital catalog and online reservation system</li>
                <li>Quiet study areas and reading corners</li>
                <li>Access to educational journals and magazines</li>
                <li>Regular book clubs and reading challenges</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Digital Learning Platform</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our digital learning platform provides students with access to online resources, practice materials, and interactive learning modules.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Subject-wise study materials and notes</li>
                <li>Video lectures and tutorials</li>
                <li>Interactive quizzes and assessments</li>
                <li>Discussion forums for collaborative learning</li>
                <li>Access to educational websites and databases</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Academic Support Programs</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We offer various academic support programs to help students excel in their studies and overcome learning challenges.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remedial classes for students needing extra help</li>
                <li>Advanced learning programs for gifted students</li>
                <li>Peer tutoring and study groups</li>
                <li>Exam preparation workshops</li>
                <li>Career counseling and guidance</li>
                <li>Special education support for students with learning differences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;