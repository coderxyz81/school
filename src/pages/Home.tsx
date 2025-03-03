import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Calendar, Award, Bell, ArrowRight, Scale } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import SectionHeader from '../components/SectionHeader';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const sliderImages = [
    {           
      
      src: "20231110_140856.jpg",
      alt: "school assambly ",
      caption: "Nurturing young minds through quality education"
    },
    {
      src: "ADMIN BLOCK.jpg",
      alt: "School sports day",
      caption: "Promoting physical fitness and team spirit"
    },
    {
      src: "20230215_173051.jpg",
      alt: "Science laboratory",
      caption: "State-of-the-art facilities for hands-on learning"
    }
  ];

  const newsItems = [
    {
      title: "Annual Sports Day 2025",
      date: "April 15, 2025",
      summary: "Join us for our annual sports day celebration featuring track events, team sports, and special performances by students.",
      imageUrl: "BASKET BALL BOYS.jpg"
    },
    {
      title: "Science Exhibition Winners",
      date: "March 28, 2025",
      summary: "Congratulations to our students who won top prizes at the Regional Science Exhibition with their innovative projects.",
      imageUrl: "20221202_101817.jpg"
    },
    {
      title: "New Computer Lab Inauguration",
      date: "March 10, 2025",
      summary: "We're excited to announce the inauguration of our new state-of-the-art computer laboratory equipped with the latest technology.",
      imageUrl: "20221202_101027.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section>
        <ImageSlider images={sliderImages} />
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to Humanity Public School</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Nurturing minds, building character, and inspiring excellence through holistic education since 1995.
          </p>
          <div className="flex justify-center">
            <Link to="/admissions" className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors mr-4">
              Apply Now
            </Link>
            <Link to="/contact" className="bg-white text-blue-900 border border-blue-900 py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader title="Principal's Message" />
              <p className="text-gray-700 mb-4">
                Dear Parents and Students,
              </p>
              <p className="text-gray-700 mb-4">
                Welcome to Humanity Public School, where we believe in nurturing not just academic excellence, but also character, creativity, and compassion. Our mission is to provide a supportive and challenging environment where students can discover their potential and develop into responsible global citizens.
              </p>
              <p className="text-gray-700 mb-4">
                At Humanity Public School, we combine traditional values with innovative teaching methods to prepare our students for the challenges of the 21st century. Our dedicated faculty members are committed to providing personalized attention to each student, ensuring that they receive the guidance and support they need to excel.
              </p>
              <p className="text-gray-700 mb-6">
                We invite you to explore our website and learn more about our academic programs, extracurricular activities, and community initiatives. We look forward to partnering with you in your child's educational journey.
              </p>
              <p className="font-bold text-blue-900">
                MR.GAURAV CHARK<br />
                Principal, Humanity Public School
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="PRINCIPAL SIR.jpg" 
                alt="Principal MR Gaurav chark" 
                className="rounded-lg shadow-lg max-w-full h-auto md:scale-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Explore Our School" subtitle="Quick access to important information" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Academic Programs</h3>
              </div>
              <p className="text-gray-700 mb-4">Explore our comprehensive curriculum designed to foster critical thinking and creativity.</p>
              <Link to="/academics" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Admissions</h3>
              </div>
              <p className="text-gray-700 mb-4">Find information about the admission process, requirements, and important dates.</p>
              <Link to="/admissions" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">School Calendar</h3>
              </div>
              <p className="text-gray-700 mb-4">Stay updated with important school events, holidays, and examination schedules.</p>
              <Link to="/academics" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Student Achievements</h3>
              </div>
              <p className="text-gray-700 mb-4">Celebrate the accomplishments of our students in academics, sports, and extracurricular activities.</p>
              <Link to="/student-life" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Announcements</h3>
              </div>
              <p className="text-gray-700 mb-4">Get the latest updates and announcements from the school administration.</p>
              <a href="#news" className="flex items-center text-blue-600 hover:text-blue-800">
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest News & Announcements" subtitle="Stay updated with what's happening at our school" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <NewsCard 
                key={index}
                title={news.title}
                date={news.date}
                summary={news.summary}
                imageUrl={news.imageUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors">
              View All News
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1981</div>
              <p className="text-blue-200">Established</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,700+</div>
              <p className="text-blue-200">Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-200">Experienced Faculty</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;