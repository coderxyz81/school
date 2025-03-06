import React, { useState } from 'react';
import { 
  Search, 
  Award, 
  BookOpen, 
  Mail, 
  Phone, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Filter
} from 'lucide-react';

interface Faculty {
  id: number;
  name: string;
  image: string;
  designation: string;
  department: string;
  qualifications: string;
  experience: number;
  expertise: string[];
  bio: string;
  email: string;
  phone: string;
  isDepartmentHead: boolean;
  achievements?: string[];
}

interface DepartmentProps {
  name: string;
  faculty: Faculty[];
  isOpen: boolean;
  toggle: () => void;
}

const Department: React.FC<DepartmentProps> = ({ name, faculty, isOpen, toggle }) => {
  const departmentHead = faculty.find(f => f.isDepartmentHead);
  const otherFaculty = faculty.filter(f => !f.isDepartmentHead);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 bg-blue-50 cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-xl font-semibold text-gray-800">{name} Department</h3>
        <button className="text-blue-600 p-1 rounded-full hover:bg-blue-100 transition-colors">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="p-4">
          {departmentHead && (
            <div className="mb-6">
              <h4 className="text-lg font-medium text-blue-800 mb-4 flex items-center">
                <Award className="mr-2 text-blue-600" size={20} />
                Department Head
              </h4>
              <div className="flex flex-col md:flex-row gap-6 bg-blue-50 p-4 rounded-lg">
                <img 
                  src={departmentHead.image} 
                  alt={departmentHead.name} 
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h5 className="text-xl font-semibold">{departmentHead.name}</h5>
                  <p className="text-gray-600 mb-2">{departmentHead.designation}</p>
                  <p className="text-gray-700 mb-1"><span className="font-medium">Qualifications:</span> {departmentHead.qualifications}</p>
                  <p className="text-gray-700 mb-1"><span className="font-medium">Experience:</span> {departmentHead.experience} years</p>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Expertise:</span> {departmentHead.expertise.join(', ')}</p>
                  <p className="text-gray-700 mb-4">{departmentHead.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <a href={`mailto:${departmentHead.email}`} className="flex items-center text-sm bg-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow">
                      <Mail size={14} className="mr-1 text-blue-600" />
                      {departmentHead.email}
                    </a>
                    <a href={`tel:${departmentHead.phone}`} className="flex items-center text-sm bg-white px-3 py-1 rounded-full shadow-sm hover:shadow-md transition-shadow">
                      <Phone size={14} className="mr-1 text-blue-600" />
                      {departmentHead.phone}
                    </a>
                  </div>
                  
                  {departmentHead.achievements && departmentHead.achievements.length > 0 && (
                    <div className="mt-4">
                      <h6 className="font-medium text-gray-800 mb-1">Notable Achievements:</h6>
                      <ul className="list-disc list-inside text-gray-700 pl-2">
                        {departmentHead.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFaculty.map(member => (
              <div key={member.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h5 className="font-semibold">{member.name}</h5>
                      <p className="text-gray-600 text-sm">{member.designation}</p>
                      <p className="text-gray-600 text-sm">{member.qualifications}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 text-sm mb-1"><span className="font-medium">Experience:</span> {member.experience} years</p>
                    <p className="text-gray-700 text-sm mb-3"><span className="font-medium">Expertise:</span> {member.expertise.join(', ')}</p>
                    <p className="text-gray-700 text-sm mb-3">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      <a href={`mailto:${member.email}`} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors">
                        <Mail size={12} className="mr-1 text-blue-600" />
                        Email
                      </a>
                      <a href={`tel:${member.phone}`} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition-colors">
                        <Phone size={12} className="mr-1 text-blue-600" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Faculty: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [openDepartments, setOpenDepartments] = useState<{[key: string]: boolean}>({
    'Mathematics': true,
    'Science': false,
    'Languages': false,
    'Social Studies': false,
    'Arts': false,
    'Physical Education': false
  });

  const toggleDepartment = (department: string) => {
    setOpenDepartments(prev => ({
      ...prev,
      [department]: !prev[department]
    }));
  };

  const facultyData: Faculty[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "teacher",
      department: "Mathematics",
      qualifications: "Ph.D. in Mathematics, M.Sc. in Applied Mathematics",
      experience: 15,
      expertise: ["Calculus", "Algebra", "Statistics"],
      bio: "Dr. Johnson specializes in making complex mathematical concepts accessible to students of all abilities. She has published several papers on mathematics education.",
      email: "sjohnson@humanitypublicschool.edu",
      phone: "(123) 456-7890",
      isDepartmentHead: true,
      achievements: [
        "National Mathematics Teacher of the Year 2022",
        "Published author of 'Making Mathematics Meaningful'",
        "Developed innovative curriculum adopted by 20+ schools"
      ]
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Mathematics Teacher",
      department: "Mathematics",
      qualifications: "M.Sc. in Mathematics, B.Ed.",
      experience: 8,
      expertise: ["Geometry", "Trigonometry", "Mathematical Modeling"],
      bio: "Prof. Chen brings mathematics to life through real-world applications and interactive teaching methods. He mentors the school's Mathematics Olympiad team.",
      email: "mchen@humanitypublicschool.edu",
      phone: "(123) 456-7891",
      isDepartmentHead: false
    },
    {
      id: 3,
      name: "Ms. Priya Sharma",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Mathematics Teacher",
      department: "Mathematics",
      qualifications: "B.Sc. in Mathematics, B.Ed.",
      experience: 5,
      expertise: ["Algebra", "Arithmetic", "Recreational Mathematics"],
      bio: "Ms. Sharma is known for her engaging teaching style and ability to simplify complex concepts. She leads the school's Math Club and organizes annual Math Fairs.",
      email: "psharma@humanitypublicschool.edu",
      phone: "(123) 456-7892",
      isDepartmentHead: false
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Head of Science Department",
      department: "Science",
      qualifications: "Ph.D. in Physics, M.Sc. in Astrophysics",
      experience: 18,
      expertise: ["Physics", "Astronomy", "Environmental Science"],
      bio: "Dr. Wilson is passionate about inspiring scientific curiosity in students. He has led numerous research projects and science expeditions with students.",
      email: "jwilson@humanitypublicschool.edu",
      phone: "(123) 456-7893",
      isDepartmentHead: true,
      achievements: [
        "Recipient of the Presidential Award for Excellence in Science Teaching",
        "Led student team to National Science Fair championship",
        "Developed partnership with National Science Foundation for student research opportunities"
      ]
    },
    {
      id: 5,
      name: "Dr. Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Biology Teacher",
      department: "Science",
      qualifications: "Ph.D. in Molecular Biology, B.Sc. in Biological Sciences",
      experience: 10,
      expertise: ["Molecular Biology", "Genetics", "Ecology"],
      bio: "Dr. Rodriguez brings her research experience into the classroom, providing students with hands-on laboratory experiences and real-world applications of biological concepts.",
      email: "erodriguez@humanitypublicschool.edu",
      phone: "(123) 456-7894",
      isDepartmentHead: false
    },
    {
      id: 6,
      name: "Mr. David Kim",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Chemistry Teacher",
      department: "Science",
      qualifications: "M.Sc. in Chemistry, B.Ed.",
      experience: 7,
      expertise: ["Organic Chemistry", "Analytical Chemistry", "Chemical Engineering"],
      bio: "Mr. Kim is known for his dynamic demonstrations and ability to connect chemistry to everyday life. He coaches the school's Science Olympiad team.",
      email: "dkim@humanitypublicschool.edu",
      phone: "(123) 456-7895",
      isDepartmentHead: false
    },
    {
      id: 7,
      name: "Prof. Elizabeth Taylor",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Head of Languages Department",
      department: "Languages",
      qualifications: "M.A. in English Literature, B.A. in Linguistics",
      experience: 20,
      expertise: ["English Literature", "Creative Writing", "Language Acquisition"],
      bio: "Prof. Taylor has a passion for literature and language that inspires students to explore the power of words. She has mentored numerous published student authors.",
      email: "etaylor@humanitypublicschool.edu",
      phone: "(123) 456-7896",
      isDepartmentHead: true,
      achievements: [
        "Author of three critically acclaimed novels",
        "Recipient of the National Educator Award for Language Arts",
        "Founder of the school's annual Literary Festival"
      ]
    },
    {
      id: 8,
      name: "Mr. Carlos Mendez",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Spanish Teacher",
      department: "Languages",
      qualifications: "M.A. in Spanish, B.Ed.",
      experience: 12,
      expertise: ["Spanish Language", "Latin American Literature", "Spanish Culture"],
      bio: "Mr. Mendez creates an immersive language learning environment. He organizes cultural exchanges and has established a sister school program in Spain.",
      email: "cmendez@humanitypublicschool.edu",
      phone: "(123) 456-7897",
      isDepartmentHead: false
    },
    {
      id: 9,
      name: "Dr. Robert Brown",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Head of Social Studies Department",
      department: "Social Studies",
      qualifications: "Ph.D. in History, M.A. in Political Science",
      experience: 16,
      expertise: ["World History", "Political Science", "Sociology"],
      bio: "Dr. Brown brings history to life through storytelling and primary source analysis. He leads annual historical site visits and mock government simulations.",
      email: "rbrown@humanitypublicschool.edu",
      phone: "(123) 456-7898",
      isDepartmentHead: true,
      achievements: [
        "Published historian with three books on modern history",
        "Developed innovative history curriculum adopted nationwide",
        "Recipient of the History Teacher of the Year Award"
      ]
    },
    {
      id: 10,
      name: "Ms. Aisha Patel",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Geography Teacher",
      department: "Social Studies",
      qualifications: "M.Sc. in Geography, B.Ed.",
      experience: 9,
      expertise: ["Human Geography", "Environmental Geography", "GIS Technology"],
      bio: "Ms. Patel integrates technology and field studies in her teaching. She leads the school's Environmental Club and coordinates community service projects.",
      email: "apatel@humanitypublicschool.edu",
      phone: "(123) 456-7899",
      isDepartmentHead: false
    },
    {
      id: 11,
      name: "Mr. Thomas Lee",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Head of Arts Department",
      department: "Arts",
      qualifications: "M.F.A. in Fine Arts, B.A. in Art Education",
      experience: 14,
      expertise: ["Visual Arts", "Art History", "Digital Media"],
      bio: "Mr. Lee encourages creative expression and artistic exploration. His students regularly win national art competitions and scholarships to prestigious art schools.",
      email: "tlee@humanitypublicschool.edu",
      phone: "(123) 456-7900",
      isDepartmentHead: true,
      achievements: [
        "Exhibited artist with works in major galleries",
        "Recipient of the National Art Educator Award",
        "Developed innovative art therapy program for students"
      ]
    },
    {
      id: 12,
      name: "Ms. Sophia Martinez",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Music Teacher",
      department: "Arts",
      qualifications: "M.Mus. in Music Education, B.Mus.",
      experience: 11,
      expertise: ["Instrumental Music", "Choral Direction", "Music Theory"],
      bio: "Ms. Martinez directs the school's award-winning orchestra and choir. She organizes annual music festivals and community concerts featuring student performers.",
      email: "smartinez@humanitypublicschool.edu",
      phone: "(123) 456-7901",
      isDepartmentHead: false
    },
    {
      id: 13,
      name: "Mr. John Thompson",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Head of Physical Education Department",
      department: "Physical Education",
      qualifications: "M.Sc. in Sports Science, B.Ed. in Physical Education",
      experience: 17,
      expertise: ["Sports Coaching", "Fitness Training", "Health Education"],
      bio: "Mr. Thompson promotes physical fitness and sportsmanship. Under his leadership, the school has won numerous regional and national sports championships.",
      email: "jthompson@humanitypublicschool.edu",
      phone: "(123) 456-7902",
      isDepartmentHead: true,
      achievements: [
        "Former Olympic athlete",
        "Coached multiple state championship teams",
        "Developed comprehensive physical education curriculum adopted by the state"
      ]
    },
    {
      id: 14,
      name: "Ms. Grace Williams",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      designation: "Dance Instructor",
      department: "Physical Education",
      qualifications: "B.F.A. in Dance, Certified Dance Educator",
      experience: 8,
      expertise: ["Classical Dance", "Contemporary Dance", "Choreography"],
      bio: "Ms. Williams inspires students through movement and expression. Her dance productions are highlights of the school year and showcase student talent and creativity.",
      email: "gwilliams@humanitypublicschool.edu",
      phone: "(123) 456-7903",
      isDepartmentHead: false
    }
  ];

  // Group faculty by department
  const facultyByDepartment: {[key: string]: Faculty[]} = facultyData.reduce((acc, faculty) => {
    if (!acc[faculty.department]) {
      acc[faculty.department] = [];
    }
    acc[faculty.department].push(faculty);
    return acc;
  }, {} as {[key: string]: Faculty[]});

  // Filter faculty based on search term and selected department
  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faculty.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  // Group filtered faculty by department
  const filteredFacultyByDepartment: {[key: string]: Faculty[]} = filteredFaculty.reduce((acc, faculty) => {
    if (!acc[faculty.department]) {
      acc[faculty.department] = [];
    }
    acc[faculty.department].push(faculty);
    return acc;
  }, {} as {[key: string]: Faculty[]});

  const departments = Object.keys(facultyByDepartment);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Distinguished Faculty</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Humanity Public School, our faculty members are experts in their fields, dedicated to providing 
          exceptional education and mentorship to our students. Get to know the educators who inspire excellence every day.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, designation, or expertise..."
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Achievements Banner */}
      <div className="relative rounded-xl overflow-hidden mb-12 shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="Faculty Achievements" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/50 flex items-center">
          <div className="px-8 md:px-16">
            <div className="flex items-center mb-4">
              <Award className="text-yellow-400 mr-3" size={28} />
              <h3 className="text-white text-2xl md:text-3xl font-bold">Faculty Achievements</h3>
            </div>
            <p className="text-white/90 mb-4 max-w-2xl">
              Our faculty members are recognized leaders in their fields, with numerous awards, publications, and contributions to education.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
                <Star className="text-yellow-400 mr-2" size={16} />
                <span>15+ Published Authors</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
                <Star className="text-yellow-400 mr-2" size={16} />
                <span>25+ National Awards</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center">
                <Star className="text-yellow-400 mr-2" size={16} />
                <span>10+ PhD Holders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Listing */}
      {searchTerm || selectedDepartment !== 'all' ? (
        // Show filtered results
        Object.keys(filteredFacultyByDepartment).length > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">Search Results</h3>
            {Object.entries(filteredFacultyByDepartment).map(([department, faculty]) => (
              <Department 
                key={department}
                name={department}
                faculty={faculty}
                isOpen={true}
                toggle={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No faculty members found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )
      ) : (
        // Show all departments
        departments.map(department => (
          <Department 
            key={department}
            name={department}
            faculty={facultyByDepartment[department]}
            isOpen={openDepartments[department]}
            toggle={() => toggleDepartment(department)}
          />
        ))
      )}

      {/* Testimonials Section */}
      <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-md">
        <h3 className="text-2xl font-bold text-center mb-8">What Students Say About Our Faculty</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Dr. Johnson's passion for mathematics is contagious. She makes even the most complex concepts understandable and has inspired me to pursue mathematics in college."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                AS
              </div>
              <div>
                <p className="font-medium">Aiden Smith</p>
                <p className="text-gray-500 text-sm">Class of 2024</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Mr. Lee's art classes are the highlight of my week. He encourages creativity and has helped me develop my own unique artistic style. I've won two national competitions thanks to his mentorship."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                JL
              </div>
              <div>
                <p className="font-medium">Jessica Liu</p>
                <p className="text-gray-500 text-sm">Class of 2023</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Dr. Wilson's physics class changed my life. His hands-on experiments and real-world applications made science exciting. I'm now studying astrophysics because of his influence."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                RJ
              </div>
              <div>
                <p className="font-medium">Ryan Jackson</p>
                <p className="text-gray-500 text-sm">Class of 2022, now at MIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;