"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"

const ContactPage = () => {
  return (
    <main className="min-h-screen relative">
      <ParallaxBackground
        bgImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop"
        overlayColor="rgba(0, 0, 0, 0.7)"
      >
        <section className="min-h-[40vh] flex items-center justify-center pt-16 pb-8 sm:pt-20 sm:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
              >
                Contact Us
              </motion.div>
              <AnimatedText
                text="Get in Touch With Our Team"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4"
              >
                Have questions about our services? Our team is here to help you.
              </motion.p>
            </div>
          </div>
        </section>
      </ParallaxBackground>

      <section className="py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <AnimatedCard className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                <GradientButton className="w-full">Send Message</GradientButton>
              </form>
            </AnimatedCard>

            {/* Contact Information and Map */}
            <div className="space-y-6">
              <AnimatedCard className="p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="fas fa-envelope text-primary text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">Email Us</h3>
                      <a href="mailto:info@algotrading.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block">
                        info@algotrading.com
                      </a>
                      <a href="mailto:support@algotrading.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block">
                        support@algotrading.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="fas fa-phone text-primary text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">Call Us</h3>
                      <a href="tel:+15551234567" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block">
                        +1 (555) 123-4567
                      </a>
                      <a href="tel:+15559876543" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block">
                        +1 (555) 987-6543
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">Visit Us</h3>
                      <address className="text-sm sm:text-base text-muted-foreground not-italic">
                        123 Trading Street<br />
                        New York, NY 10001<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* Map Container */}
              <AnimatedCard className="w-full overflow-hidden">
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1631541227159!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0 rounded-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 bg-muted/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              FAQ
            </motion.div>
            <AnimatedText 
              text="Frequently Asked Questions" 
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" 
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4"
            >
              Find answers to common questions about our services and solutions.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I get started with algorithmic trading?",
                answer:
                  "Getting started is easy. Simply contact our team to schedule a consultation, and we'll guide you through the process of setting up your first algorithmic trading strategy.",
              },
              {
                question: "What kind of returns can I expect?",
                answer:
                  "Returns vary based on market conditions, strategy selection, and risk tolerance. We work with you to develop strategies aligned with your financial goals and risk profile.",
              },
              {
                question: "Do I need technical knowledge to use your services?",
                answer:
                  "No technical knowledge is required. Our team handles all the technical aspects, from strategy development to implementation and monitoring.",
              },
              {
                question: "How secure is your platform?",
                answer:
                  "Security is our top priority. We employ industry-leading encryption, multi-factor authentication, and regular security audits to ensure your data and assets are protected.",
              },
            ].map((faq, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-4 sm:p-6">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-base sm:text-lg font-semibold">{faq.question}</h3>
                  <div className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <i className="fas fa-plus text-primary text-xs sm:text-sm"></i>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mt-3">{faq.answer}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
