"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "49",
      description: "Perfect for getting started with algorithmic trading",
      features: [
        "Basic trading algorithms",
        "Standard execution speed",
        "Email support",
        "Basic market data",
        "Up to 5 trading strategies",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "99",
      description: "Advanced features for serious traders",
      features: [
        "Advanced trading algorithms",
        "Priority execution speed",
        "24/7 Priority support",
        "Real-time market data",
        "Unlimited trading strategies",
        "Custom strategy development",
        "Risk management tools",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "299",
      description: "Full-featured solution for institutions",
      features: [
        "Custom algorithms",
        "Ultra-low latency execution",
        "Dedicated support team",
        "Full market data access",
        "Unlimited everything",
        "Custom integration",
        "Advanced analytics",
        "Dedicated infrastructure",
      ],
      popular: false,
    },
  ]

  return (
    <main className="min-h-screen">
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
                Pricing Plans
              </motion.div>
              <AnimatedText
                text="Choose the Right Plan for Your Trading Needs"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/80"
              >
                Flexible pricing options to match your trading ambitions
              </motion.p>
            </div>
          </div>
        </section>
      </ParallaxBackground>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className={`${
                  plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-xl">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">$</span>
                    <span className="text-6xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <i className="fas fa-check text-primary"></i>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <GradientButton className="w-full" primary={plan.popular}>
                    Get Started
                  </GradientButton>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedText text="Frequently Asked Questions" className="text-3xl font-bold mb-4" />
            <p className="text-muted-foreground">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day free trial on all plans. No credit card required.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
              },
              {
                q: "Is there a long-term contract?",
                a: "No, all our plans are month-to-month. You can cancel at any time.",
              },
            ].map((faq, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.q}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PricingPage