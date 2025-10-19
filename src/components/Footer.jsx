import React from 'react'
import { motion } from 'framer-motion'
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: AiFillFacebook, href: 'https://facebook.com/usmanmobeen111', label: 'Facebook' },
    { icon: AiFillInstagram, href: 'https://instagram.com/usmanmobeen111', label: 'Instagram' },
    { icon: AiFillGithub, href: 'https://github.com/usmanmobeen111', label: 'GitHub' }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-tertiary">EduLearn</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering learners worldwide with cutting-edge courses and expert instructors.
              Transform your skills and advance your career with us.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-semibold text-tertiary">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-tertiary transition-colors duration-300"
                    
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-semibold text-tertiary">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-tertiary transition-colors duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-300">
              <p>Have questions? Reach out to us!</p>
              <p className="text-tertiary font-medium">support@edulearn.com</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} EduLearn. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
