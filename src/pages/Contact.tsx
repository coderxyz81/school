import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Get in Touch" subtitle="Multiple ways to connect with us" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-900 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Address:</span>
                      <p className="text-gray-700">123 Education Lane, Knowledge City, State 12345</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 text-blue-900 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Phone:</span>
                      <p className="text-gray-700">Main Office: +1 (555) 123-4567</p>
                      <p className="text-gray-700">Admissions: +1 (555) 123-4568</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-900 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Email:</span>
                      <p className="text-gray-700">info@humanitypublicschool.edu</p>
                      <p className="text-gray-700">admissions@humanitypublicschool.edu</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-900 mr-3 mt-0.5" />
                    <div>
                      <span className="font-medium">Office Hours:</span>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:30 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 12:30 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Connect With Us</h3>
                <p className="text-gray-700 mb-4">
                  Follow us on social media to stay updated with the latest news, events, and announcements.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-900 hover:bg-blue-200 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-900 hover:bg-blue-200 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-900 hover:bg-blue-200 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-900 hover:bg-blue-200 transition-colors">
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Location" subtitle="Find us on the map" centered={true} />
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9 h-[500px]">

          
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.8672567571607!2d74.89974060938204!3d32.63635829105468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9c44bcae2417%3A0xc3e8e4d05a893283!2sHumanity%20Public%20School!5e0!3m2!1sen!2sin!4v1740864132859!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers to common inquiries" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What are the school hours?</h3>
              <p className="text-gray-700">
                Our school hours are from 8:00 AM to 3:30 PM, Monday through Friday. The school office is open from 8:00 AM to 4:30 PM on weekdays and from 9:00 AM to 12:30 PM on Saturdays.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How can I apply for admission?</h3>
              <p className="text-gray-700">
                You can apply for admission by downloading the application form from our website or collecting it from our Admission Office. Completed forms should be submitted along with the required documents and application fee. Visit our Admissions page for detailed information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Is transportation available for students?</h3>
              <p className="text-gray-700">
                Yes, we provide transportation services for students. Our buses cover all major areas within a 15-mile radius of the school. The transportation fee varies based on the distance from the school. Please contact our Transportation Department for specific route information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How can I schedule a campus tour?</h3>
              <p className="text-gray-700">
                You can schedule a campus tour by contacting our Admission Office at +1 (555) 123-4568 or sending an email to admissions@humanitypublicschool.edu. Campus tours are available on weekdays between 9:00 AM and 2:00 PM, subject to prior appointment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What extracurricular activities are offered?</h3>
              <p className="text-gray-700">
                We offer a wide range of extracurricular activities including sports, music, dance, art, debate, robotics, coding, and various clubs. Students are encouraged to participate in activities that align with their interests and talents. Visit our Student Life page for more information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How can I contact my child's teacher?</h3>
              <p className="text-gray-700">
                You can contact your child's teacher through our school's communication platform, by email, or by scheduling a meeting through the school office. Parent-teacher conferences are also held regularly throughout the academic year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The best way to experience Humanity Public School is to visit our campus. Schedule a tour today to see our facilities, meet our faculty, and learn more about our educational programs.
          </p>
          <button className="bg-white text-blue-900 py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
            Schedule a Tour
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;