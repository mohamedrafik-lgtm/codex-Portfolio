'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', company: '', position: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black py-12 md:py-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 50px),
                             repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 50px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-0 border-2 border-red-500/30 overflow-hidden">
          
          {/* LEFT SIDE - الجزء الأسود (البراند) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black border-r-2 border-red-500/30 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-red-500" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-red-500" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-red-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-red-500" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Title */}
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <span className="text-xs text-red-500 font-mono tracking-widest">{'<CONTACT_INIT>'}</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 mb-4 font-orbitron leading-tight"
                  style={{ textShadow: '0 0 20px rgba(255, 0, 0, 0.5)' }}
                >
                  لنصنع شيئاً عظيماً.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="h-px bg-gradient-to-r from-red-500 to-transparent"
                />
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                {/* Email */}
                <div className="group">
                  <p className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">تواصل معنا</p>
                  <a
                    href="mailto:info@company.com"
                    className="text-xl md:text-2xl text-white hover:text-red-500 transition-colors duration-300 font-mono flex items-center gap-3 group"
                  >
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="group-hover:tracking-wider transition-all duration-300">info@company.com</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-red-500/20" />

                {/* Locations */}
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-3 uppercase tracking-wider">المواقع</p>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="font-cairo text-lg">السعودية</span>
                    </div>
                    <div className="w-px h-6 bg-red-500/30" />
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="font-cairo text-lg">الإمارات</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-red-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
                  <span className="text-xs text-gray-500 font-mono">STATUS: READY_TO_CONNECT</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - الجزء الأبيض (التفاعل) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 lg:p-16 relative"
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-black/10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-black/10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-black/10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-black/10" />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 font-cairo">
                فكرتك تستحق أن ترى النور.
              </h3>
              <div className="h-px bg-gradient-to-r from-black/20 to-transparent" />
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-cairo">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="الاسم بالكامل"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300 font-cairo placeholder:text-gray-400"
                />
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 font-cairo">
                  الشركة
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="مؤسستك"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300 font-cairo placeholder:text-gray-400"
                />
              </motion.div>

              {/* Position */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2 font-cairo">
                  المنصب
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="دورك القيادي"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300 font-cairo placeholder:text-gray-400"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-cairo">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="لنتواصل معك"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300 font-cairo placeholder:text-gray-400"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-cairo">
                  حدثنا عن فكرتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="نحن نصغي إليك"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none font-cairo placeholder:text-gray-400"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 font-bold text-lg hover:bg-red-500 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed font-cairo"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'جاري الإرسال...' : 'أرسل الرسالة'}
                  </span>
                  <span className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </motion.div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border-2 border-green-500 text-green-700 font-cairo text-center"
                >
                  ✓ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
