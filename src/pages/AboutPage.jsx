"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"

const AboutPage = () => {
  const values = [
    {
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in algorithmic trading.",
      icon: "lightbulb",
    },
    {
      title: "Reliability",
      description: "Our systems are built for 99.99% uptime, because we know every second matters in trading.",
      icon: "clock",
    },
    {
      title: "Transparency",
      description: "We believe in full transparency in our operations, pricing, and performance metrics.",
      icon: "eye",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      bio: "Former quantitative analyst with 15+ years of experience in financial markets.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "PhD in Computer Science with expertise in machine learning and distributed systems.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Rodriguez",
      position: "Head of Research",
      bio: "Former hedge fund manager with a background in statistical arbitrage strategies.",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Emily Patel",
      position: "Head of Client Services",
      bio: "10+ years experience in financial services and client relationship management.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ]

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
                className=" inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
              >
                About Us
              </motion.div>
              <AnimatedText
                text="Leading the Evolution of Algorithmic Trading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/80"
              >
                Discover the story, values, and people behind our innovative trading solutions.
              </motion.p>
            </div>
          </div>
        </section>
      </ParallaxBackground>

      {/* Our Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              >
                Our Story
              </motion.div>
              <AnimatedText text="From Vision to Reality" className="text-3xl md:text-4xl font-bold mb-6" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 text-muted-foreground"
              >
                <p>
                  Founded in 2015, AlgoTrading has been at the forefront of algorithmic trading innovation. What started
                  as a small team of financial engineers and software developers has grown into a global company serving
                  traders and institutions worldwide.
                </p>
                <p>
                  Our mission is to democratize access to sophisticated trading strategies and technologies that were
                  once available only to large financial institutions. We believe that with the right tools and
                  knowledge, traders of all sizes can succeed in today's complex markets.
                </p>
                <p>
                  Today, our solutions power trading operations for clients ranging from individual traders to hedge
                  funds and prop trading firms across the globe.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link to="/contact">
                  <GradientButton>Contact Us</GradientButton>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-background rounded-lg overflow-hidden border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Our team"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/10 relative overflow-hidden">
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
              Our Values
            </motion.div>
            <AnimatedText text="Core Principles That Guide Us" className="text-3xl md:text-4xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              These core principles guide everything we do at AlgoTrading.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <i className={`fas fa-${value.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 relative overflow-hidden">
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
              Our Team
            </motion.div>
            <AnimatedText text="Meet the Experts Behind Our Success" className="text-3xl md:text-4xl font-bold mb-6" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Our team combines expertise in finance, technology, and data science to deliver cutting-edge trading
              solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-sm opacity-70 animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
                <div className="flex justify-center mt-4 space-x-3">
                  {["linkedin", "twitter"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-background/80 border border-border/50 text-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
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
              <AnimatedText text="Join Us on Our Mission" className="text-3xl md:text-4xl font-bold mb-6 text-white" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-white/80 mb-8"
              >
                Whether you're looking to leverage our trading solutions or join our team, we'd love to hear from you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/contact">
                  <GradientButton>Contact Us</GradientButton>
                </Link>
                <a href="#careers">
                  <GradientButton primary={false}>Join Our Team</GradientButton>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxBackground>
    </main>
  )
}

export default AboutPage
