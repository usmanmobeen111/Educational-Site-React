import React from 'react'
import { courseData } from '../data/coursesData'

const Courses = () => {
  return (
    <section id='courses' className="py-16 pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
          Our <span className='text-tertiary'>Amazing</span> Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-secondary">
                    {course.title}
                  </h3>
                  <span className="bg-tertiary text-secondary px-2 py-1 rounded-full text-xs font-medium">
                    {course.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Level: {course.level}</span>
                  <span>Duration: {course.duration}</span>
                </div>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  {course.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
