import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, DollarSign, ClipboardList, HelpCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Admissions = () => {
  const admissionSchedule = [
    { event: "Application Forms Available", date: "November 1, 2024" },
    { event: "Last Date for Form Submission", date: "January 15, 2025" },
    { event: "Entrance Examination", date: "January 25, 2025" },
    { event: "Interview Process", date: "February 5-15, 2025" },
    { event: "Results Declaration", date: "February 25, 2025" },
    { event: "Fee Payment & Admission Confirmation", date: "March 1-15, 2025" },
    { event: "Orientation Program", date: "March 25, 2025" },
    { event: "Classes Begin", date: "April 1, 2025" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Join our community of learners and embark on a journey of academic excellence and holistic development.
          </p>
        </div>
      </section>

      {/* Admission Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Admission Process" subtitle="A step-by-step guide to joining Humanity Public School" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-6">
                At Humanity Public School, we welcome students from diverse backgrounds who demonstrate a passion for learning and a commitment to personal growth. Our admission process is designed to assess the student's academic readiness, interests, and potential to thrive in our educational environment.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">1</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Application Submission</h3>
                    <p className="text-gray-700">Complete and submit the application form along with required documents and application fee.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">2</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Entrance Examination</h3>
                    <p className="text-gray-700">Students applying for grades 2 and above are required to take an entrance examination to assess their academic readiness.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">3</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Interview</h3>
                    <p className="text-gray-700">Shortlisted candidates and their parents are invited for an interview with the admission committee.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">4</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Admission Offer</h3>
                    <p className="text-gray-700">Selected candidates receive an admission offer letter with details about fee payment and admission confirmation.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">5</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Fee Payment & Documentation</h3>
                    <p className="text-gray-700">Complete the admission process by paying the required fees and submitting all necessary documents.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold">6</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Orientation Program</h3>
                    <p className="text-gray-700">Attend the orientation program to familiarize yourself with the school's policies, procedures, and expectations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Students in a classroom" 
                className="rounded-lg shadow-lg w-full h-auto mb-6"
              />
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Admission Inquiry</h3>
                <p className="text-gray-700 mb-4">
                  For any questions regarding the admission process, please contact our Admission Office:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li><span className="font-medium">Phone:</span> +1 (555) 123-4567</li>
                  <li><span className="font-medium">Email:</span> admissions@humanitypublicschool.edu</li>
                  <li><span className="font-medium">Office Hours:</span> Monday to Friday, 9:00 AM to 3:00 PM</li>
                </ul>
                <div className="mt-4">
                  <Link to="/contact" className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors inline-block">
                    Contact Admissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Eligibility & Requirements" subtitle="What you need to know before applying" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Age Requirements</h3>
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-4 border-b">Grade</th>
                    <th className="py-2 px-4 border-b">Age Requirement (as of April 1, 2025)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Pre-Kindergarten</td>
                    <td className="py-2 px-4 border-b">3+ years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Kindergarten</td>
                    <td className="py-2 px-4 border-b">4+ years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Grade 1</td>
                    <td className="py-2 px-4 border-b">5+ years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Grade 2</td>
                    <td className="py-2 px-4 border-b">6+ years</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">And so on...</td>
                    <td className="py-2 px-4 border-b">Age appropriate for the grade</td>
                  </tr>
                </tbody>
              </table>
              
              <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">Academic Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>For Pre-Kindergarten to Grade 1: No academic requirements</li>
                <li>For Grades 2 to 8: Satisfactory performance in entrance examination and previous academic records</li>
                <li>For Grades 9 to 12: Minimum 60% marks in previous grade and satisfactory performance in entrance examination</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Required Documents</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Completed Application Form</span>
                      <p className="text-gray-600 text-sm">Duly filled and signed by parents/guardians</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Birth Certificate</span>
                      <p className="text-gray-600 text-sm">Original and photocopy for verification</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Passport-sized Photographs</span>
                      <p className="text-gray-600 text-sm">4 recent photographs of the student</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Previous Academic Records</span>
                      <p className="text-gray-600 text-sm">Report cards from the last two years (if applicable)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Transfer Certificate</span>
                      <p className="text-gray-600 text-sm">From the previous school (for students transferring from another school)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Medical Certificate</span>
                      <p className="text-gray-600 text-sm">Including immunization records and any special medical conditions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Address Proof</span>
                      <p className="text-gray-600 text-sm">Utility bill, rental agreement, or any government-issued document</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-blue-900 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Parent/Guardian ID Proof</span>
                      <p className="text-gray-600 text-sm">Passport, driver's license, or any government-issued ID</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Fee Structure" subtitle="Academic Year 2025-26" />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-6 text-left">Fee Component</th>
                  <th className="py-3 px-6 text-center">Pre-KG to Grade 5</th>
                  <th className="py-3 px-6 text-center">Grades 6-8</th>
                  <th className="py-3 px-6 text-center">Grades 9-10</th>
                  <th className="py-3 px-6 text-center">Grades 11-12</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Registration Fee (One-time)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$100</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$100</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$100</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$100</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Admission Fee (One-time)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$500</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$600</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$700</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$800</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Tuition Fee (Per Quarter)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$1,200</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$1,500</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$1,800</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$2,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Development Fee (Annual)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$400</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$500</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$600</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Computer Lab Fee (Annual)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$200</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$250</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$350</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Science Lab Fee (Annual)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">N/A</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$200</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$250</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Library Fee (Annual)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$100</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$150</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$200</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$250</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Examination Fee (Annual)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$150</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$200</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$250</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border-b border-gray-300 font-medium">Transportation Fee (Optional, Per Quarter)</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300-$500</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300-$500</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300-$500</td>
                  <td className="py-3 px-6 border-b border-gray-300 text-center">$300-$500</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Payment Schedule</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>First Quarter: April 1-15, 2025</li>
                <li>Second Quarter: July 1-15, 2025</li>
                <li>Third Quarter: October 1-15, 2025</li>
                <li>Fourth Quarter: January 1-15, 2026</li>
              </ul>
              <p className="mt-4 text-gray-700">
                A late fee of $50 will be charged for payments made after the due date.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Payment Methods</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Online payment through the school portal</li>
                <li>Bank transfer</li>
                <li>Credit/Debit card payment at the school office</li>
                <li>Cheque payment (payable to "Humanity Public School")</li>
              </ul>
              <p className="mt-4 text-gray-700">
                For any fee-related queries, please contact our Finance Office at finance@humanitypublicschool.edu or call +1 (555) 123-4569.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Important Dates" subtitle="Admission Timeline for Academic Year 2025-26" />
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="py-3 px-6 text-left">Event</th>
                  <th className="py-3 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {admissionSchedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-6 border-b border-gray-300">{item.event}</td>
                    <td className="py-3 px-6 border-b border-gray-300">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Application Form" subtitle="Start your journey with Humanity Public School" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                You can obtain the application form in the following ways:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FileText className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Download Online</h3>
                    <p className="text-gray-700">Download and print the application form from our website.</p>
                    <button className="mt-2 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
                      Download Application Form
                    </button>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Visit the Admission Office</h3>
                    <p className="text-gray-700">Collect the application form in person from our Admission Office during working hours.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Application Fee</h3>
                    <p className="text-gray-700">A non-refundable application fee of $50 must be paid along with the submission of the application form.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HelpCircle className="h-6 w-6 text-blue-900" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-blue-900">Need Help?</h3>
                    <p className="text-gray-700">If you need assistance with the application process, please contact our Admission Office.</p>
                    <Link to="/contact" className="mt-2 text-blue-600 hover:text-blue-800 inline-block">
                      Contact Admissions Office
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Student filling out application form" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" subtitle="Answers to common questions about admissions" />
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What is the student-teacher ratio at Humanity Public School?</h3>
              <p className="text-gray-700">
                We maintain a student-teacher ratio of 20:1 to ensure personalized attention and effective learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Is there a sibling discount available?</h3>
              <p className="text-gray-700">
                Yes, we offer a 10% discount on the tuition fee for the second child and a 15% discount for the third child enrolled in the school.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Do you offer scholarships?</h3>
              <p className="text-gray-700">
                Yes, we offer merit-based scholarships to students who demonstrate exceptional academic performance, leadership qualities, and extracurricular achievements. Financial aid is also available for deserving students from economically disadvantaged backgrounds.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What is the school's policy on mid-year admissions?</h3>
              <p className="text-gray-700">
                Mid-year admissions are considered based on seat availability and the student's academic performance. The admission process remains the same, but the timeline may vary.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Is transportation available for all areas?</h3>
              <p className="text-gray-700">
                Our transportation service covers most areas within a 15-mile radius of the school. The transportation fee varies based on the distance from the school. Please contact the Admission Office for specific route information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What extracurricular activities are offered?</h3>
              <p className="text-gray-700">
                We offer a wide range of extracurricular activities including sports, music, dance, art, debate, robotics, coding, and various clubs. Students are encouraged to participate in activities that align with their interests and talents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Humanity Public School?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards providing your child with a quality education that nurtures academic excellence and character development.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
              Download Application
            </button>
            <Link to="/contact" className="bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;