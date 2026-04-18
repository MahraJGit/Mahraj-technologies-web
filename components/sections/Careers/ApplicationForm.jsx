"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUploadThing } from '@/utils/uploadthing';
import { useSearchParams } from 'next/navigation';



const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "HR Professional",
  "Other"
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
        required
        className="w-full bg-transparent border-none py-5 text-white text-lg focus:outline-none focus:ring-0 transition-all placeholder:text-zinc-800"
      />
      {/* Base Line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-zinc-800" />
      {/* Active Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/field:w-full transition-all duration-500" />
    </div>
  );
};

export default function ApplicationForm() {
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeUrl, setResumeUrl] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const searchParams = useSearchParams();
  const fileInputRef = useRef(null);

  useEffect(() => {
    const jobParam = searchParams.get('job');
    if (jobParam && roles.includes(jobParam)) {
      setSelectedRole(jobParam);
    }
  }, [searchParams]);

  const { startUpload } = useUploadThing("resumeUploader", {
    onClientUploadComplete: (res) => {
      setIsUploading(false);
      setUploadProgress(0);
      if (res?.[0]) {
        setResumeUrl(res[0].url);
        setResumeName(res[0].name);
      }
    },
    onUploadError: (error) => {
      setIsUploading(false);
      setUploadProgress(0);
      alert(`Upload Failed: ${error.message}`);
    },
    onUploadProgress: (progress) => {
      setUploadProgress(progress);
    },
    onUploadBegin: () => {
      setIsUploading(true);
    },
  });

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Trigger upload
    await startUpload([file]);
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("SUBMITTING...");

    const formData = new FormData(event.target);
    formData.append("access_key", "5d868a62-eb8f-4829-9544-096b3236b797"); // Same as ContactForm
    formData.append("applied_role", selectedRole);
    if (resumeUrl) {
      formData.append("resume_url", resumeUrl);
    }


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
      setResult("CONNECTION_ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-black border-b border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 bg-zinc-950/40 p-8 md:p-16 border border-zinc-900/50 rounded-2xl backdrop-blur-xl">
          <div className="space-y-4 text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Submit Application</h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
              Ready to join the team? Fill out the form below and we'll be in touch as soon as possible.
            </p>
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
              <h3 className="text-3xl font-black text-white uppercase">Application Received</h3>
              <p className="text-zinc-400 text-sm uppercase max-w-xs mx-auto leading-relaxed">
                Thank you for your interest. Our HR team will review your application and contact you if there's a match.
              </p>
              <button
                onClick={() => setResult("")}
                className="text-primary text-[10px] uppercase font-bold mt-8 border-b border-primary/20 hover:border-primary transition-all"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Web3Forms required fields */}
              <input type="hidden" name="subject" value="New Job Application from Mahraj Careers" />
              <input type="hidden" name="from_name" value="Mahraj Technologies HR" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                <InputField label="Name" placeholder="Enter Full Name" name="name" />
                <InputField label="Email" placeholder="Email Address" type="email" name="email" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
                <InputField label="Phone" placeholder="Phone Number" type="tel" name="phone" />
                <InputField label="Portfolio URL" placeholder="https://..." name="portfolio" />
              </div>

              {/* Resume Upload Section */}
              <div className="relative group/field mt-12 py-6 border-b border-zinc-800">
                <label className="hidden sm:block text-primary text-xs uppercase mb-6 font-bold opacity-60">
                  Resume (PDF Only, Max 8MB)
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf"
                  />
                  
                  {/* Custom Styled Button */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 hover:border-primary text-zinc-400 font-bold text-xs uppercase px-8 py-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isUploading ? "Uploading..." : "CHOOSE FILE"}
                  </button>


                  {isUploading && (
                    <div className="flex-1 max-w-xs space-y-2">
                      <div className="flex justify-between text-[10px] text-primary font-bold uppercase">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {resumeName && !isUploading && (

                    <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-lg border border-primary/20">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-zinc-300 font-medium truncate max-w-[200px]">{resumeName}</span>
                    </div>
                  )}
                </div>
              </div>


              <div className="grid grid-cols-1 gap-0">
                {/* Custom High-Fidelity Dropdown */}
                <div className="relative group/field mt-12">
                  <label className="block text-primary text-xs uppercase mb-3 font-bold opacity-60">
                    Applying For
                  </label>
                  <div className="relative">
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full bg-transparent border-b border-zinc-800 py-5 text-white text-lg cursor-pointer flex justify-between items-center transition-all hover:border-zinc-700"
                    >
                      <span className="truncate">{selectedRole}</span>
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
                        {roles.map((role) => (
                          <div
                            key={role}
                            onClick={() => {
                              setSelectedRole(role);
                              setIsOpen(false);
                            }}
                            className="p-4 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md cursor-pointer transition-colors text-sm uppercase"
                          >
                            {role}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/field:w-full transition-all duration-500" />
                </div>
              </div>

              {/* Cover Letter */}
              <div className="relative group/field mt-16 mb-16">
                <label className="block text-primary text-xs uppercase mb-3 font-bold opacity-60">
                  Cover Letter / Note
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell us why you're a great fit..."
                  className="w-full bg-transparent border-none py-5 text-white text-lg focus:outline-none focus:ring-0 transition-all placeholder:text-zinc-800 resize-none"
                />
                {/* Base Line */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-zinc-800" />
                {/* Active Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within/field:w-full transition-all duration-500" />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full ${isSubmitting ? 'bg-zinc-800 cursor-not-allowed' : 'bg-primary hover:bg-[#c91d26]'} text-white font-black text-sm uppercase py-5 rounded-xl transition-colors shadow-[0_0_40px_-10px_rgba(228,36,47,0.5)]`}
              >
                {isSubmitting ? result : "Submit Application"}
              </motion.button>

              {result && !isSubmitting && result !== "SUCCESS" && (
                <p className="text-xs font-bold text-red-500 text-center mt-4 uppercase">
                  Error: {result}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
