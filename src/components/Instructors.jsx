import React from 'react'
import { instructorsData } from '../data/instructorsData'

const Instructors = () => {
  return (
    <section id='instructors' className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
          Our <span className="text-tertiary">Talented</span> Team
        </h2>

        {/* Center the last row cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {instructorsData.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-xs"
            >
              <img
                src={instructor.img}
                alt={instructor.name}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {instructor.name}
                </h3>
                <p className="text-primary font-medium mb-1">{instructor.role}</p>
                <p className="text-gray-600 mb-2">{instructor.expertise}</p>
                <p className="text-gray-700 text-sm">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors
