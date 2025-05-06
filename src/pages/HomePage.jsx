"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import AnimatedCard from "../components/AnimatedCard"
import GradientButton from "../components/GradientButton"

const HomePage = () => {

  const features = [
    {
      icon: "bolt",
      title: "High-Frequency Trading",
      description: "Execute trades in microseconds with our cutting-edge infrastructure",
    },
    {
      icon: "chart-line",
      title: "Advanced Analytics",
      description: "Make data-driven decisions with our comprehensive market analysis tools",
    },
    {
      icon: "microchip",
      title: "AI-Powered Strategies",
      description: "Leverage machine learning algorithms to identify profitable opportunities",
    },
    {
      icon: "shield-alt",
      title: "Risk Management",
      description: "Protect your investments with sophisticated risk control systems",
    },
    {
      icon: "lock",
      title: "Secure Trading",
      description: "Trade with confidence on our highly secure and encrypted platform",
    },
  ]

  const services = [
    {
      icon: "code",
      title: "Custom Strategy Development",
      description: "Develop tailored trading algorithms based on your investment goals and risk tolerance",
    },
    {
      icon: "layer-group",
      title: "Strategy Backtesting",
      description: "Rigorously test strategies against historical data to validate performance",
    },
    {
      icon: "sync",
      title: "Strategy Optimization",
      description: "Fine-tune existing algorithms to improve performance and adapt to market changes",
    },
  ]

  const testimonials = [
    {
      quote:
        "Implementing the algorithmic trading solutions from this team has transformed our investment strategy. Our returns have increased by 32% while reducing volatility.",
      author: "Tripti ucheniya",
      position: "founder- Prakanya interprises Pvt Ltd",
      avatar: "trapti.jpg",
    },
    {
      quote:
        "The custom trading algorithms developed for our firm have given us a significant edge in the markets. Their team's technical expertise is unmatched.",
      author: "Sanjay Jadhav",
      position: "co-founder-Triviaya logistics Pvt Ltd",
      avatar: "sanjay.jpg",
    },
    {
      quote:
        "Working with this team has been phenomenal. Their infrastructure solutions have drastically reduced our execution latency and improved our fill rates.",
      author: "Kaushik chakraborty",
      position: " Operation manager- altruist technology",
      avatar: "kaushik.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <ParallaxBackground
        bgImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop"
        overlayColor="rgba(0, 0, 0, 0.7)"
      >
        <section  className="min-h-screen flex items-center pt-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div className="lg:w-1/2 lg:pr-8 flex flex-col  items-center ">
                <div className="text-center">
                  <AnimatedText
                    text="Advanced Algo Trading Solutions for Modern Markets"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className=" text-lg md:text-xl text-center text-muted-foreground mb-8"
                >
                  Leverage cutting-edge algorithmic trading strategies and technologies to gain a competitive edge in
                  today's financial markets.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-row gap-4"
                >
                  <Link to="/pricing">
                    <GradientButton>Get Started</GradientButton>
                  </Link>
                  <Link to="/about">
                  <GradientButton primary={false}>Learn More</GradientButton>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:w-1/2 mt-12 lg:mt-0"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
                  <div className="relative bg-background rounded-lg overflow-hidden border border-border/50">
                    <img
                      src="\image (6).jpg"
                      alt="Trading Dashboard"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center mt-16"
            >
              <a
                href="#about"
                className="flex flex-col items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Scroll Down</span>
                <i className="fas fa-chevron-down mt-2 animate-bounce"></i>
              </a>
            </motion.div>
          </div>
        </section>
      </ParallaxBackground>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              About Algo Trading
            </motion.div>
            <AnimatedText
              text="Transforming Financial Markets with Advanced Technology"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              We combine cutting-edge technology, quantitative research, and financial expertise to develop algorithmic
              trading solutions that deliver consistent results in volatile markets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <i className={`fas fa-${feature.icon} text-primary text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="mt-4 flex items-center text-sm text-primary font-medium cursor-pointer group">
                    {/* <span>Learn more</span> */}
                    <i className="fas fa-arrow-up-right ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Our Services
            </motion.div>
            <AnimatedText text="Comprehensive Algo Trading Solutions" className="text-3xl md:text-4xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              We offer a complete suite of services to help you implement and optimize your algorithmic trading
              strategies, from development to execution.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <i className={`fas fa-${service.icon} text-primary text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-4">
                    {/* <GradientButton className="px-4 py-2 text-sm">Learn more</GradientButton> */}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/services">
              <GradientButton>View All Services</GradientButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Testimonials
            </motion.div>
            <AnimatedText text="What Our Clients Say" className="text-3xl md:text-4xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Don't just take our word for it. Here's what our clients have to say about our algorithmic trading
              solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6">
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-500"></i>
                    ))}
                </div>
                <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-border">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxBackground
        bgImage="https://images.unsplash.com/photo-1642790595397-7238e31378fe?q=80&w=2070&auto=format&fit=crop"
        overlayColor="rgba(0, 0, 0, 0.8)"
      >
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedText
                text="Ready to Transform Your Trading Strategy?"
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-white/80 mb-8"
              >
                Join thousands of traders who have already taken their trading to the next level with our algorithmic
                solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/pricing">
                <GradientButton>Get Started Today</GradientButton>
                </Link>
                {/* <GradientButton primary={false}>Schedule a Demo</GradientButton> */}
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxBackground>
    </main>
  )
}

export default HomePage
