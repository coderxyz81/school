import React from 'react';
import { School, BookOpen, FlaskRound as Flask, Computer, Languages, Library, Trophy, Mic2, Utensils, Stethoscope, Bus, Shield, Camera } from 'lucide-react';

function Infra() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">World-Class Infrastructure</h1>
          <p className="text-xl text-white max-w-2xl">
            Our state-of-the-art campus is designed to nurture learning, creativity, and growth in a safe and stimulating environment.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Campus Designed for Excellence</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Humanit Public School, we believe that the physical environment plays a crucial role in shaping the educational experience. Our modern campus spans over 10 acres of meticulously landscaped grounds, featuring cutting-edge facilities designed to inspire learning and foster holistic development.
            </p>
            <p className="text-lg text-gray-700">
              Every aspect of our infrastructure has been thoughtfully planned to create spaces that are not just functional but also aesthetically pleasing, environmentally sustainable, and conducive to academic excellence. Our facilities meet international standards and are regularly upgraded to incorporate the latest advancements in educational technology and architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Camera className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Virtual Campus Tour</h2>
            <p className="text-lg text-gray-700">
              Experience our campus from anywhere in the world. Take a virtual tour to explore our facilities and get a feel for the Humanit learning environment.
            </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition">
              Start Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Facilities</h2>
          
          {/* Classrooms */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Modern classroom with smart boards and ergonomic seating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Smart Classrooms</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our 45 spacious classrooms (each 800 sq. ft.) are designed to create an optimal learning environment with natural lighting, acoustic treatment, and climate control.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Interactive 75" smart boards with touch capabilities in every classroom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Ergonomic furniture designed for different age groups (capacity: 25-30 students)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>High-speed Wi-Fi and integrated audio systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Flexible seating arrangements to facilitate collaborative learning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Science Labs */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center mb-4">
                <Flask className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Science Laboratories</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our three specialized science laboratories (Physics, Chemistry, and Biology) span 1,200 sq. ft. each and are equipped with state-of-the-art equipment to facilitate hands-on learning.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Modern lab stations with safety features (capacity: 36 students)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Digital microscopes and advanced measurement instruments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Demonstration areas with projection capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Specialized ventilation systems and safety equipment</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-[400px] order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Modern science laboratory with equipment and workstations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Computer Labs */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Modern computer laboratory with workstations" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Computer className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Computer Laboratories</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our two computer labs (1,000 sq. ft. each) feature the latest hardware and software to develop digital literacy and computational thinking skills.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>60 high-performance computers with dual monitors (30 per lab)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Specialized software for coding, design, and multimedia production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>3D printers and robotics equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Gigabit internet connectivity and network security systems</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Language Labs */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center mb-4">
                <Languages className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Language Laboratory</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our 800 sq. ft. language lab is designed to enhance language acquisition through immersive audio-visual learning experiences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>24 individual learning stations with noise-canceling headsets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Interactive language learning software with speech recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Audio-visual recording facilities for pronunciation practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Digital resources in multiple languages (English, Spanish, French, Mandarin)</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-[400px] order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Language laboratory with audio equipment and workstations" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Library */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Modern library with books and digital resources" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Library className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Library & Media Center</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our 3,500 sq. ft. library and media center serves as the intellectual heart of the school, offering a vast collection of print and digital resources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Over 25,000 books, periodicals, and reference materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Digital catalog system and e-book access (capacity: 120 students)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Quiet study areas, collaborative workspaces, and reading nooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Multimedia production studio with green screen and editing equipment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sports Facilities */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Sports Facilities</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our comprehensive sports infrastructure spans 5 acres and includes both indoor and outdoor facilities to promote physical fitness and team spirit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Olympic-sized swimming pool (25m x 50m) with temperature control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Indoor sports complex (15,000 sq. ft.) with basketball, badminton, and volleyball courts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>400-meter athletic track and football field with synthetic turf</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Fitness center with cardio equipment, weights, and yoga studio</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-[400px] order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="School sports facilities including indoor gymnasium" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Auditorium */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="School auditorium with stage and seating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Mic2 className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Auditorium & Assembly Hall</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our 10,000 sq. ft. auditorium serves as a venue for school assemblies, performances, and community events.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Seating capacity of 800 with excellent acoustics and sightlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Professional-grade lighting and sound systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Retractable stage (40' x 30') with backstage areas and dressing rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>4K projection system and recording capabilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cafeteria */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center mb-4">
                <Utensils className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Cafeteria</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our 5,000 sq. ft. cafeteria provides nutritious meals in a bright, welcoming environment that encourages healthy eating habits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Seating capacity for 350 students with indoor and outdoor dining areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Modern kitchen with commercial-grade equipment and strict hygiene protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Digital meal planning system with nutritional information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Sustainable practices including composting and reduced food waste initiatives</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-[400px] order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="School cafeteria with modern seating and food service area" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Medical Room */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="School medical room with equipment and beds" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Medical Room</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our 600 sq. ft. medical room provides immediate healthcare services and promotes wellness among students and staff.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Staffed by qualified nurses during all school hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Four recovery beds with privacy screens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Emergency medical equipment including AED and first aid supplies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Digital health records system and direct line to local emergency services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Transportation */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <div className="flex items-center mb-4">
                <Bus className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Transportation Facilities</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our transportation system ensures safe and reliable travel for students with a fleet of modern vehicles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Fleet of 25 air-conditioned buses with capacity for 50 students each</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>GPS tracking and RFID-based attendance system for each bus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Mobile app for parents to track bus location in real-time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Trained drivers and attendants with first aid certification</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-[400px] order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="School buses in parking area" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Safety and Security */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="School security system with cameras and access control" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Safety & Security Measures</h3>
              </div>
              <p className="text-gray-700 mb-6">
                The safety of our students is our highest priority, with comprehensive security systems throughout the campus.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>24/7 CCTV surveillance with over 200 cameras covering all areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Biometric access control system for all entry points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Fire alarm systems, sprinklers, and regular evacuation drills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Trained security personnel stationed at strategic locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Digital visitor management system with ID verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Campus in Person</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to visit Humanit Public School and see our world-class facilities firsthand. Schedule a campus tour today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 hover:bg-blue-100 font-medium py-3 px-6 rounded-md transition">
              Schedule a Tour
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-blue-700 font-medium py-3 px-6 rounded-md transition">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default Infra;
