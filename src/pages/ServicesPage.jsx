"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import AnimatedCard from "../components/AnimatedCard"
import GradientButton from "../components/GradientButton"
import { Link } from "react-router-dom"

const ServicesPage = () => {
  const services = [
    {
      title: "Basic Trading Bot",
      description: "Perfect for beginners starting with algorithmic trading",
      features: [
        "24/7 Automated Trading",
        "Basic Technical Analysis",
        "Up to 2 Trading Pairs",
        "Email Notifications",
        "Basic Support"
      ],
      price: "₹1,999/month",
      popular: false
    },
    {
      title: "Pro Trading Suite",
      description: "Advanced features for serious traders",
      features: [
        "All Basic Features",
        "Advanced Technical Analysis",
        "Up to 10 Trading Pairs",
        "Real-time SMS Alerts",
        "24/7 Priority Support",
        "Custom Indicators"
      ],
      price: "₹4,999/month",
      popular: true
    },
    {
      title: "Enterprise Solutions",
      description: "Custom solutions for institutional traders",
      features: [
        "All Pro Features",
        "Unlimited Trading Pairs",
        "Custom Strategy Development",
        "Dedicated Account Manager",
        "API Access",
        "White Label Solutions"
      ],
      price: "Custom Pricing",
      popular: false
    }
  ]

  const additionalServices = [
    {
      icon: "chart-line",
      title: "Market Analysis",
      description: "Deep dive technical and fundamental analysis of markets"
    },
    {
      icon: "robot",
      title: "Custom Bot Development",
      description: "Tailored trading bots built to your specifications"
    },
    {
      icon: "graduation-cap",
      title: "Trading Education",
      description: "Learn algorithmic trading from our experts"
    },
    {
      icon: "code",
      title: "API Integration",
      description: "Seamless integration with major exchanges"
    }
  ]

  return (
    <main>
      <ParallaxBackground
        bgImage="https://images.unsplash.com/photo-1642790595397-7238e31378fe?q=80&w=2070&auto=format&fit=crop"
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
                text="Advanced Trading Solutions for Every Trader"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/80"
              >
                Choose the perfect plan to elevate your trading strategy
              </motion.p>
            </div>
          </div>
        </section>
      </ParallaxBackground>

      {/* Pricing Plans */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className={`p-8 ${service.popular ? 'border-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-primary rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <i className="fas fa-check text-primary mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/payment">
                  <GradientButton className="w-full" primary={service.popular}>
                    Get Started
                  </GradientButton>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Additional Services
            </motion.div>
            <AnimatedText
              text="Comprehensive Trading Solutions"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <i className={`fas fa-${service.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 backdrop-blur-3xl"></div>
        </div>
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Ready to Transform Your Trading?"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg mb-8"
            >
              Join thousands of successful traders who have already elevated their trading with our solutions.
            </motion.p>
            <Link to="/contact">
              <GradientButton>Contact Our Team</GradientButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
