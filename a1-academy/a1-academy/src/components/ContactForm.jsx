import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate form submission - Replace with your API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      
      // You can integrate with your backend here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-600 font-bold text-xs tracking-widest uppercase border border-amber-500/30">
          <MessageSquare size={14} /> Get in Touch
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Send us a Message
        </h3>
        <p className="text-gray-600 text-lg">
          Have questions? We're here to help. Fill out the form and we'll respond within 24 hours.
        </p>
      </div>

      {/* Form Container */}
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <User size={16} className="text-blue-600" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: 'Please enter your name',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    pattern: { value: /^[a-zA-Z\s]+$/, message: 'Name should only contain letters' }
                  })}
                  className={`w-full px-5 py-4 rounded-xl border-2 ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-blue-500 bg-gray-50'
                  } focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Field */}
              <div className="group">
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <Phone size={16} className="text-green-600" />
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter a valid 10-digit Indian mobile number'
                      }
                    })}
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.phone 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 bg-gray-50'
                    } focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400`}
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                  <Mail size={16} className="text-amber-600" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.email 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 bg-gray-50'
                    } focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                <MessageSquare size={16} className="text-indigo-600" />
                Your Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  rows="6"
                  {...register('message', {
                    required: 'Please enter your message',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    maxLength: { value: 500, message: 'Message must not exceed 500 characters' }
                  })}
                  className={`w-full px-5 py-4 rounded-xl border-2 ${
                    errors.message 
                      ? 'border-red-300 focus:border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-blue-500 bg-gray-50'
                  } focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 resize-none text-gray-900 placeholder:text-gray-400`}
                  placeholder="Tell us about your inquiry, questions about admissions, courses, or anything else..."
                />
              </div>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-bold py-5 px-8 rounded-xl hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1 active:translate-y-0 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="text-lg">Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    <span className="text-lg">Send Message</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-5 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 rounded-xl flex items-start gap-3 animate-fade-in-up shadow-lg">
                <CheckCircle2 size={24} className="text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-lg">Message Sent Successfully!</p>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-5 bg-linear-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800 rounded-xl flex items-start gap-3 animate-fade-in-up shadow-lg">
                <AlertCircle size={24} className="text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-lg">Oops! Something went wrong</p>
                  <p className="text-sm text-red-700 mt-1">
                    Please try again or contact us directly via phone or email.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
