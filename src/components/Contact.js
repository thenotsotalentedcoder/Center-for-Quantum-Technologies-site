import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg">Contact Us</h2>
          <div className="h-1 w-16 bg-secondary mx-auto mb-6"></div>
          <p className="text-light-dark max-w-2xl mx-auto font-sans">
            Get in touch with our team for collaboration opportunities, research inquiries, or visit arrangements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeInUp}
          >
            <div className="bg-primary-light p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold gradient-text mb-6 font-display">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1 font-display">Email</h4>
                    <p className="text-light-dark font-mono">mmkhan@cloud.neduet.edu.pk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1 font-display">Phone</h4>
                    <p className="text-light-dark font-mono">+92 21 99261261 Ext: 2599</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-secondary mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-light font-medium mb-1 font-display">Address</h4>
                    <p className="text-light-dark font-sans">
                      Center for Quantum Technologies<br />
                      Computer Science & Software Engineering Department<br />
                      NED University of Engineering & Technology,<br />
                      University Road, Karachi-75270, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-light font-medium mb-4 font-display">Director:</h4>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-secondary font-bold mr-4">
                    MM
                  </div>
                  <div>
                    <p className="text-light font-medium font-display">Prof. Dr. Muhammad Mubashir Khan</p>
                    <p className="text-light-dark text-sm font-sans">Director, Center for Quantum Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-primary-light p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold gradient-text mb-6 font-display">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-secondary/20 border border-secondary text-light p-4 rounded-lg mb-6"
                >
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-sans">Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-light-dark mb-2 text-sm">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-primary border border-primary-light text-light rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-light-dark mb-2 text-sm">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-primary border border-primary-light text-light rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="organization" className="block text-light-dark mb-2 text-sm">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formState.organization}
                      onChange={handleChange}
                      className="bg-primary border border-primary-light text-light rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-light-dark mb-2 text-sm">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                      className="bg-primary border border-primary-light text-light rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting 
                        ? 'bg-secondary/50 cursor-not-allowed' 
                        : 'bg-secondary hover:bg-secondary/90'
                    } text-primary font-medium rounded-lg w-full py-3 px-6 transition-all duration-300 flex justify-center items-center font-display`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="bg-primary-light p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold gradient-text mb-6 font-display">Visit Our Lab</h3>
            <p className="text-light-dark mb-4 font-sans">
              Interested in visiting our facilities or discussing collaboration opportunities?
              Contact us to schedule a visit to the Center for Quantum Technologies at NED University.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                {/* Google Maps Embed with your specific coordinates */}
                <iframe 
                  title="CQT Lab Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.1946740128635!2d67.11414!3d24.931157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzUyLjIiTiA2N8KwMDYnNTEuMCJF!5e0!3m2!1sen!2s!4v1635789654123!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="mt-4 text-light text-left p-4 bg-primary rounded-lg border border-primary-light">
                <h4 className="text-light font-medium mb-2 font-display">Location:</h4>
                <p className="text-light-dark mb-1 font-sans">
                  <strong>Computer Science Department</strong>
                </p>
                <p className="text-light-dark font-sans">
                  W4J7+FMF, NED Colony Ring St, NED University Of Engineering & Technology, Karachi, Pakistan
                </p>
                <p className="text-light-dark mt-2 text-sm font-mono">
                  24.931157, 67.114140
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;