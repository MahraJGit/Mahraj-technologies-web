"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  "MOBILE APP DEVELOPMENT",
  "WEB DEVELOPMENT",
  "CRM & ERP SOLUTIONS",
  "DIGITAL MARKETING",
  "OTHER"
];

const InputField = ({ label, placeholder, type = "text", name }) => {
  return (
    <div className="relative group/field mt-12">
      <label className="block text-primary text-xs uppercase mb-3 font-bold group-focus-within/field:opacity-100 opacity-60 transition-opacity">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent border-none py-5 text-white placeholder:text-white/90 text-lg focus:outline-none focus:ring-0 transition-all"
      />
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-zinc-800" />
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/field:w-full transition-all duration-500" />
    </div>
  );
};

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("SUBMITTING...");

    const formData = new FormData(event.target);
    formData.append("access_key", "78b009d9-cb60-4ce5-b05d-98b2840ef1a3");
    formData.append("service_protocol", selectedService);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("SUCCESS");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-12 bg-zinc-950/40 p-8 md:p-16 border border-zinc-900/50 rounded-2xl backdrop-blur-xl">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Let's Connect</h2>
      </div>

      {result === "SUCCESS" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-12 text-center space-y-6"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-white uppercase">Message Sent</h3>
          <p className="text-zinc-400  text-sm uppercase max-w-xs mx-auto leading-relaxed">
            Thank you for reaching out. We have received your message and will get back to you shortly.
          </p>
          <button
            onClick={() => setResult("")}
            className="text-primary  text-[10px] uppercase font-bold mt-8 border-b border-primary/20 hover:border-primary transition-all"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form className="space-y-8" onSubmit={handleSubmit}>
          <input type="hidden" name="subject" value="New Inquiry from Mahraj Terminal" />
          <input type="hidden" name="from_name" value="Mahraj Technologies" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            <InputField label="Name" placeholder="Enter Full Name" name="name" />
            <InputField label="Email" placeholder="Email Address" type="email" name="email" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            <InputField label="Company" placeholder="Organization" name="company" />
            <InputField label="Phone" placeholder="Phone Number" type="tel" name="phone" />
          </div>

          <div className="grid grid-cols-1 gap-0">

            <div className="relative group/field mt-12">
              <label className="block text-primary  text-xs uppercase mb-3 font-bold opacity-60">
                Service
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-transparent border-b border-zinc-800 py-5 text-white  text-lg cursor-pointer flex justify-between items-center transition-all hover:border-zinc-700"
                >
                  <span className="truncate">{selectedService}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </div>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-50 left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl p-2"
                  >
                    {services.map((service) => (
                      <div
                        key={service}
                        onClick={() => {
                          setSelectedService(service);
                          setIsOpen(false);
                        }}
                        className="p-4 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md cursor-pointer transition-colors text-sm uppercase"
                      >
                        {service}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/field:w-full transition-all duration-500" />
            </div>
          </div>

          <div className="relative group/field mt-16 mb-16">
            <label className="block text-primary  text-xs uppercase mb-3 font-bold opacity-60">
              Project Brief
            </label>
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Describe your requirements..."
              className="w-full bg-transparent border-none py-5 text-white  text-lg focus:outline-none focus:ring-0 transition-all placeholder:text-zinc-500 resize-none"
            />
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-zinc-800" />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/field:w-full transition-all duration-500" />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full ${isSubmitting ? 'bg-zinc-800 cursor-not-allowed' : 'bg-primary hover:bg-[#c91d26]'} text-white font-black text-sm uppercase py-5 rounded-xl transition-colors shadow-[0_0_40px_-10px_rgba(228,36,47,0.5)]`}
          >
            {isSubmitting ? result : "Submit"}
          </motion.button>


          {result && !isSubmitting && result !== "TRANSMISSION_SUCCESS" && (
            <p className="text-xs font-bold  text-red-500 text-center mt-4 uppercase">
              Error: {result}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
