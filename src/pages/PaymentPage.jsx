"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ParallaxBackground from "../components/ParallaxBackground"
import AnimatedText from "../components/AnimatedText"
import GradientButton from "../components/GradientButton"
import AnimatedCard from "../components/AnimatedCard"

const PaymentPage = () => {
  const [activeTab, setActiveTab] = useState("qr")

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
                Payment
              </motion.div>
              <AnimatedText
                text="Choose Your Payment Method"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/80"
              >
                Complete your subscription payment securely using your preferred method.
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
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1 rounded-full bg-muted/50 border border-border/50">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "qr" ? "bg-primary text-white shadow-md" : "hover:bg-muted"
                  }`}
                  onClick={() => setActiveTab("qr")}
                >
                  <i className="fas fa-qrcode mr-2"></i>
                  QR Payment
                </button>
                {/* <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "card" ? "bg-primary text-white shadow-md" : "hover:bg-muted"
                  }`}
                  onClick={() => setActiveTab("card")}
                >
                  <i className="fas fa-credit-card mr-2"></i>
                  Card Payment
                </button> */}
              </div>
            </div>

            <AnimatedCard className="p-8">
              {activeTab === "qr" ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Scan QR Code to Pay</h2>
                  <p className="text-muted-foreground mb-8">
                    Use your banking app to scan this QR code and complete the payment.
                  </p>
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="border p-4 rounded-lg bg-white"
                    >
                                            <p className="text-center font-semibold text-sm text-black mb-4">UPI ID:-8319830462@ybl</p>

                      <div className="relative w-64 h-64 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 blur-sm opacity-20 animate-pulse rounded-lg"></div>
                        <img
                          src="QR.jpg"
                          alt="Payment QR Code"
                          className="w-full h-full relative z-10"
                        />
                      </div>
                      <p className="text-center text-sm text-black mt-4">Scan with your UPI app</p>
                    </motion.div>
                  </div>
                  <div className="mt-8">
                    <GradientButton>I've completed the payment</GradientButton>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-2">Card Payment</h2>
                  <p className="text-muted-foreground mb-8">
                    Enter your card details to complete the payment securely.
                  </p>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="cardName" className="block text-sm font-medium">
                        Name on Card
                      </label>
                      <input
                        id="cardName"
                        placeholder="John Doe"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="block text-sm font-medium">
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="expiry" className="block text-sm font-medium">
                          Expiry Date
                        </label>
                        <input
                          id="expiry"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cvc" className="block text-sm font-medium">
                          CVC
                        </label>
                        <input
                          id="cvc"
                          placeholder="000"
                          className="w-full px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <GradientButton className="w-full">Pay Now</GradientButton>
                  </form>
                </div>
              )}
            </AnimatedCard>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-2">Secure Payment Processing</p>
              <div className="flex justify-center space-x-4">
                <i className="fab fa-cc-visa text-2xl"></i>
                <i className="fab fa-cc-mastercard text-2xl"></i>
                <i className="fab fa-cc-amex text-2xl"></i>
                <i className="fab fa-cc-paypal text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaymentPage
