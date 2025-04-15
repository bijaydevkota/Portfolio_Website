"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import emailjs from "@emailjs/browser"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formRef = useRef<HTMLFormElement>(null)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Set loading state
    setStatus({
      loading: true,
      success: false,
      error: false,
      message: "",
    })

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_hp0wnom"
      const templateId = "template_t1d49ep"
      const publicKey = "1yY1AW5jbsgPybNx7"

      if (!formRef.current) return

      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)

      console.log("Email sent successfully:", result.text)

      // Set success state
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: "Your message has been sent successfully! I will get back to you soon.",
      })

      // Reset form
      resetForm()

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          success: false,
          message: "",
        }))
      }, 5000)
    } catch (error) {
      console.error("Failed to send email:", error)

      // Set error state
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send your message. Please try again later.",
      })

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          error: false,
          message: "",
        }))
      }, 5000)
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900 text-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-400">Contact Me</h2>
        <motion.form
          ref={(el) => {
            // Assign to both refs
            if (el) {
              formRef.current = el
              ref(el)
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={formVariants}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-sm"
        >
          {/* Status Messages */}
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-4 p-3 rounded-md ${status.success ? "bg-green-800 bg-opacity-50" : "bg-red-800 bg-opacity-50"} flex items-center`}
            >
              {status.success ? (
                <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
              ) : (
                <AlertCircle className="mr-2 h-5 w-5 text-red-400" />
              )}
              <span>{status.message}</span>
            </motion.div>
          )}

          <motion.div className="mb-4" variants={formVariants}>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
              required
              disabled={status.loading}
            />
          </motion.div>
          <motion.div className="mb-4" variants={formVariants}>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
              required
              disabled={status.loading}
            />
          </motion.div>
          <motion.div className="mb-4" variants={formVariants}>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-100"
              required
              disabled={status.loading}
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status.loading}
          >
            {status.loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
