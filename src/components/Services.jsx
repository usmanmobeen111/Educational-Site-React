import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaRoute, FaUserFriends, FaCertificate } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Interactive Online Courses",
      desc: "Engage with dynamic, hands-on courses designed by industry experts. Learn at your own pace with interactive quizzes and projects.",
      btn: "Explore Courses",
      icon: FaBookOpen,
    },
    {
      id: 2,
      title: "Personalized Learning Paths",
      desc: "Get customized learning recommendations based on your goals and skill level. Our AI-driven system adapts to your progress.",
      btn: "Start Your Path",
      icon: FaRoute,
    },
    {
      id: 3,
      title: "Live Mentorship Sessions",
      desc: "Connect with experienced mentors in real-time. Get guidance, feedback, and answers to your questions from professionals.",
      btn: "Book a Session",
      icon: FaUserFriends,
    },
    {
      id: 4,
      title: "Skill Assessment & Certification",
      desc: "Test your knowledge with comprehensive assessments. Earn recognized certificates to showcase your expertise to employers.",
      btn: "Take Assessment",
      icon: FaCertificate,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id='services' className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Our <span className="text-tertiary">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fostering a playful & engaging learning environment with cutting-edge educational tools and personalized support.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover:-translate-y-2"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>

              {/* Button */}
              <button
                type="button"
                className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {service.btn}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
