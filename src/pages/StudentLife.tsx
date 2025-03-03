import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Zap, Music, BookOpen, Globe } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ImageSlider from '../components/ImageSlider';

const StudentLife = () => {
  const activityImages = [
    {
      src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      alt: "Sports activities",
      caption: "Building teamwork and physical fitness through sports"
    },
    {
      src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      alt: "Art and creativity",
      caption: "Expressing creativity through arts and crafts"
    },
    {
      src: "https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      alt: "Music performance",
      caption: "Developing musical talents and performance skills"
    }
  ];

  const studentAchievements = [
    {
      name: "National Science Olympiad",
      students: "Team of 5 students",
      achievement: "First Place in the Regional Round, Qualified for Nationals",
      year: "2024"
    },
    {
      name: "International Math Competition",
      students: "Sophia Chen, Grade 10",
      achievement: "Gold Medal",
      year: "2024"
    },
    {
      name: "State Debate Championship",
      students: "Debate Team",
      achievement: "State Champions",
      year: "2024"
    },
    {
      name: "National Art Exhibition",
      students: "James Wilson, Grade 11",
      achievement: "Best Young Artist Award",
      year: "2023"
    },
    {
      name: "Regional Sports Tournament",
      students: "School Basketball Team",
      achievement: "Regional Champions",
      year: "2023"
    },
    {
      name: "National Robotics Competition",
      students: "Robotics Club",
      achievement: "Innovation Award",
      year: "2023"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Student Life</h1>
          <p className="text-xl max-w-3xl">
            Discover the vibrant and enriching experiences that make student life at Humanity Public School special.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Life at Humanity Public School" subtitle="A holistic approach to education and personal growth" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-4">
                At Humanity Public School, we believe that education extends beyond the classroom. Our holistic approach to education focuses on nurturing not just academic excellence but also physical fitness, creative expression, social skills, and emotional intelligence.
              </p>
              <p className="text-gray-700 mb-4">
                We provide a supportive and stimulating environment where students can explore their interests, develop their talents, and build lifelong friendships. Through a wide range of extracurricular activities, clubs, and events, students have ample opportunities to discover their passions and develop essential life skills.
              </p>
              <p className="text-gray-700">
                Our goal is to prepare students not just for academic success but for life. We encourage them to be curious, compassionate, and confident individuals who are ready to make a positive impact on the world.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
                alt="Students engaged in various activities" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Slider */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Student Activities" subtitle="Exploring interests and developing talents" centered={true} />
          <ImageSlider images={activityImages} />
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Extracurricular Activities" subtitle="Developing skills beyond academics" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Clubs & Societies</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our school offers a wide range of clubs and societies where students can pursue their interests and develop new skills.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Science Club</li>
                <li>Debate Society</li>
                <li>Literary Club</li>
                <li>Math Olympiad Club</li>
                <li>Robotics Club</li>
                <li>Environmental Club</li>
                <li>Photography Club</li>
                <li>Chess Club</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Sports</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We encourage physical fitness and sportsmanship through various sports activities and competitions.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Basketball</li>
                <li>Soccer</li>
                <li>Volleyball</li>
                <li>Tennis</li>
                <li>Swimming</li>
                <li>Track and Field</li>
                <li>Badminton</li>
                <li>Cricket</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Music className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Arts & Culture</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Students can express their creativity and artistic talents through various arts and cultural activities.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>School Choir</li>
                <li>Orchestra</li>
                <li>Drama Club</li>
                <li>Dance Troupe</li>
                <li>Art Club</li>
                <li>Creative Writing</li>
                <li>Film Making</li>
                <li>Cultural Festivals</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Competitions</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We encourage students to participate in various competitions to challenge themselves and showcase their talents.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Science Olympiads</li>
                <li>Math Competitions</li>
                <li>Spelling Bee</li>
                <li>Debate Tournaments</li>
                <li>Sports Competitions</li>
                <li>Art Exhibitions</li>
                <li>Music Recitals</li>
                <li>Coding Competitions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Academic Enrichment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We offer various programs to enhance students' academic knowledge and skills beyond the regular curriculum.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Advanced Placement Programs</li>
                <li>Research Projects</li>
                <li>Academic Workshops</li>
                <li>Guest Lectures</li>
                <li>Field Trips</li>
                <li>Science Fairs</li>
                <li>Book Clubs</li>
                <li>Coding Workshops</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Community Service</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We encourage students to give back to the community and develop a sense of social responsibility.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Volunteer Programs</li>
                <li>Community Outreach</li>
                <li>Environmental Initiatives</li>
                <li>Charity Drives</li>
                <li>Mentoring Programs</li>
                <li>Awareness Campaigns</li>
                <li>Fundraising Events</li>
                <li>Elderly Care Visits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Student Achievements" subtitle="Celebrating excellence and accomplishments" />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-6 text-left">Competition/Event</th>
                  <th className="py-3 px-6 text-left">Student(s)</th>
                  <th className="py-3 px-6 text-left">Achievement</th>
                  <th className="py-3 px-6 text-left">Year</th>
                </tr>
              </thead>
              <tbody>
                {studentAchievements.map((achievement, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-6 border-b border-gray-300">{achievement.name}</td>
                    <td className="py-3 px-6 border-b border-gray-300">{achievement.students}</td>
                    <td className="py-3 px-6 border-b border-gray-300">{achievement.achievement}</td>
                    <td className="py-3 px-6 border-b border-gray-300">{achievement.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Student Leadership" subtitle="Developing tomorrow's leaders" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-4">
                We believe in empowering students to take on leadership roles and develop essential leadership skills. Through various student-led initiatives and organizations, students learn to take responsibility, make decisions, and work collaboratively.
              </p>
              <p className="text-gray-700 mb-4">
                Our student leadership programs include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Student Council</li>
                <li>House System</li>
                <li>Prefect Body</li>
                <li>Club Leadership</li>
                <li>Peer Mentoring Program</li>
                <li>Student Ambassadors</li>
              </ul>
              <p className="text-gray-700">
                These leadership opportunities help students develop confidence, communication skills, problem-solving abilities, and a sense of responsibility. They also provide a platform for students to voice their ideas and contribute to the school community.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Student council meeting" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Events */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="School Events" subtitle="Creating memories and fostering school spirit" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Annual Day</h3>
              <p className="text-gray-700 mb-4">
                Our Annual Day celebration showcases the talents of our students through various performances, including dance, music, drama, and more. It's a grand event that brings together students, parents, teachers, and alumni.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                alt="Annual Day celebration" 
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Sports Day</h3>
              <p className="text-gray-700 mb-4">
                Our annual Sports Day is a celebration of physical fitness, sportsmanship, and team spirit. Students participate in various track and field events, team sports, and fun activities. The event culminates with the presentation of trophies and medals.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Sports Day" 
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Science Fair</h3>
              <p className="text-gray-700 mb-4">
                Our Science Fair provides students with an opportunity to showcase their scientific knowledge and creativity through innovative projects and experiments. It encourages critical thinking, problem-solving, and a love for scientific inquiry.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Science Fair" 
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Cultural Festival</h3>
              <p className="text-gray-700 mb-4">
                Our Cultural Festival celebrates diversity and promotes cultural awareness. Students showcase the rich cultural heritage of different regions through music, dance, art, food, and traditional costumes. It's a colorful and vibrant event that brings the school community together.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Cultural Festival" 
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Graduation Ceremony</h3>
              <p className="text-gray-700 mb-4">
                Our Graduation Ceremony is a significant milestone that marks the completion of a student's journey at Humanity Public School. It's a formal event where graduates are recognized for their achievements and awarded their diplomas. The ceremony includes speeches, awards, and the traditional cap toss.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Graduation Ceremony" 
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Parent-Teacher Conferences</h3>
              <p className="text-gray-700 mb-4">
                Our Parent-Teacher Conferences provide an opportunity for parents and teachers to discuss a student's academic progress, behavior, and overall development. These conferences foster open communication and collaboration between home and school, which is essential for a student's success.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Parent-Teacher Conference" 
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Photo Gallery" subtitle="Capturing moments and memories" centered={true} />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80" 
              alt="Students in classroom" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Sports activities" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Music performance" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Group study" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Science laboratory" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Art and creativity" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Student council" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
              alt="Annual day celebration" 
              className="rounded-lg shadow-md w-full h-40 object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our School Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the vibrant student life at Humanity Public School and be part of a community that values academic excellence, personal growth, and holistic development.
          </p>
          <Link to="/admissions" className="bg-white text-blue-900 py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;