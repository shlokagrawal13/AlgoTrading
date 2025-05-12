"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import GradientButton from "../components/GradientButton"

const ServicesPage = () => {
  const services = [
    {
      title: "Algo Services (Algorithmic Trading Services)",
      description:
        "We offer advanced algorithmic trading solutions, enabling automated and data-driven trading to maximize your returns.",
      icon: "code",
      features: [
        "Custom trading algorithm development",
        "High-frequency trading solutions",
        "Backtesting and performance optimization",
      ],
      image: "Algo.jpg",
    },
    {
      title: "Wealth Management",
      description:
        "Comprehensive wealth management services to help you build, manage, and preserve your wealth for the long term.",
      icon: "wallet",
      features: [
        "Personalized investment planning",
        "Asset allocation and diversification",
        "Tax and retirement planning strategies",
      ],
      image: "Wealth.jpg",
    },
    {
      title: "Portfolio Management",
      description:
        "Professional portfolio management designed to align with your financial goals while managing risks effectively.",
      icon: "chart-line",
      features: [
        "Dynamic portfolio rebalancing",
        "Risk-adjusted performance tracking",
        "Comprehensive reporting and insights",
      ],
      image: "Portfolio.jpg",
    },
    {
      title: "Advisory Services",
      description:
        "Expert financial advisory services to guide your investment decisions and help you navigate complex financial markets.",
      icon: "user-tie",
      features: [
        "Tailored investment advice",
        "Strategic financial planning",
        "Ongoing market insights and recommendations",
      ],
      image: "AdvisoryServices.jpg",
    },
  ];
  

  return (
    <main>
      <ParallaxBackground
        bgImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop"
        overlayColor="rgba(0, 0, 0, 0.7)"
      >
        <section className="min-h-[50vh] flex items-center pt-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
              >
                Our Services
              </motion.div>
              <AnimatedText
                text="Exclusive Services For Investment & Trading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/80"
              >
              Explore our comprehensive range of various services designed for investments and trading to fuel your portfolio in today's markets.
              </motion.p>
            </div>
          </div>
        </section>
      </ParallaxBackground>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          {services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index > 0 ? "mt-16 md:mt-24" : ""}`}>
              <div className={index % 0 === 1 ? "order-2 lg:order-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                >
                  Service {index + 1}
                </motion.div>
                <AnimatedText text={service.title} className="text-3xl md:text-4xl font-bold mb-6" />
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="text-muted-foreground mb-6"
                >
                  {service.description}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, staggerChildren: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-3 mb-8"
                >
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-start transform-gpu"
                    >
                      <div className="mr-3 mt-0.5 text-primary">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* <GradientButton>Learn More</GradientButton> */}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`transform-gpu ${index % 2 === 1 ? "order-1 lg:order-2" : ""}`}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-background rounded-lg overflow-hidden border border-border/50">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 bg-muted/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText text="Ready to Get Started?" className="text-3xl md:text-4xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8"
            >
              View our pricing plans and choose the option that best fits your trading needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/pricing">
                <GradientButton>View Pricing</GradientButton>
              </Link>
              <Link to="/contact">
                <GradientButton primary={false}>Contact Sales</GradientButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
