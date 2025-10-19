import React from 'react'
import { testimonialsData } from '../data/testimonials'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Testimonials = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<AiFillStar key={i} className="text-tertiary" />)
    }

    if (hasHalfStar) {
      stars.push(<AiFillStar key="half" className="text-tertiary" />)
    }

    while (stars.length < 5) {
      stars.push(<AiOutlineStar key={stars.length} className="text-gray-400" />)
    }

    return stars
  }

  return (
    <section id='testimonials' className="py-16 pt-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">What Our <span className="text-tertiary">Students</span> Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                />
                <div>
                  <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.feedback}"</p>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
