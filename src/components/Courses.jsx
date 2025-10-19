import React from 'react'
import { motion } from 'framer-motion'
import { courseData } from '../data/coursesData'

const Courses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id='courses' className="py-16 pt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our <span className='text-tertiary'>Amazing</span> Courses
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courseData.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <motion.img
                src={course.img}
                alt={course.title}
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-secondary">
                    {course.title}
                  </h3>
                  <motion.span
                    className="bg-tertiary text-secondary px-2 py-1 rounded-full text-xs font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {course.category}
                  </motion.span>
                </div>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Level: {course.level}</span>
                  <span>Duration: {course.duration}</span>
                </div>
                <motion.button
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {course.btn}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
