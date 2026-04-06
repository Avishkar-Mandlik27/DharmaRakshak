// components/Registration.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useLanguage } from './LanguageContext';

const Registration = () => {
  const { isMarathi } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Bilingual Content
  const registerTitle = isMarathi ? "महोत्सवात सहभागी व्हा" : "Join the Mahotsav";

  const registerSubtitle = isMarathi 
    ? "धर्मवीर संभाजी महाराज जयंती महोत्सव २०२६" 
    : "Chhatrapati Sambhaji Maharaj Jayanti Mahotsav 2026";

  const fullNameLabel = isMarathi ? "पूर्ण नाव" : "Full Name";
  const emailLabel = isMarathi ? "ईमेल" : "Email";
  const mobileLabel = isMarathi ? "मोबाइल नंबर" : "Mobile Number";
  const cityLabel = isMarathi ? "पत्ता" : "Address";

  const submitBtn = isMarathi ? "नोंदणी करा" : "Register Now";
  const submittingBtn = isMarathi ? "नोंदणी होत आहे..." : "Submitting...";

 const successMessage = isMarathi 
  ? "🎉 नोंदणी यशस्वी झाली! आपल्याला पुष्टीकरण ईमेल पाठवला गेला आहे. १४ मे रोजी जनता राजा मैदान, संगमनेर येथे 'प्रतापगड पर्व' हे जिवंत नाटक पाहण्यासाठी आवर्जून यावे. धन्यवाद!"
  : "🎉 Registration Successful! A confirmation email has been sent to you. Please join us on 14th May at Janta Raja Maidan, Sangamner for the live play 'Pratapgad Parv'. Thank you!";
  const errorRequired = isMarathi 
    ? "कृपया सर्व आवश्यक फील्ड भरा" 
    : "Please fill all required fields";

  const footerNote = isMarathi 
    ? "तुमची सहभागिता स्वराज्याची ज्योत जागृत ठेवेल" 
    : "Your participation will keep the flame of Swarajya alive";

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUVd40u8mXzp6k20Fjr0x7fNtw6Oafpw6TWcW4MbA12NCrH_QJ45vXejpH0xcQeyKn/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile) {
      setStatus({ type: 'error', message: errorRequired });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(GOOGLE_SCRIPT_URL, formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (response.data.result === 'success') {
        setStatus({ type: 'success', message: successMessage });
        setFormData({ fullName: '', email: '', mobile: '', city: '' });
      } else {
        setStatus({ type: 'error', message: response.data.message || (isMarathi ? 'काहीतरी चूक झाली' : 'Something went wrong') });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: isMarathi 
          ? 'सर्व्हरशी कनेक्शन होऊ शकले नाही. कृपया नंतर प्रयत्न करा.' 
          : 'Could not connect to server. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const fontClass = isMarathi ? "tracking-widest" : "royal-english";

  return (
    <section id="register" className="py-16 text-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className={`text-5xl mb-4 text-[#FFD700] tracking-wider ${fontClass}`}>
            {registerTitle}
          </h2>
          <p className="body-text text-xl text-amber-100">
            {registerSubtitle}
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="royal-card p-10 md:p-12 rounded-3xl space-y-8 bg-white/10 backdrop-blur border border-[#FFD700]/30"
        >
          <input 
            type="text" name="fullName" value={formData.fullName} onChange={handleChange}
            placeholder={fullNameLabel} 
            className="w-full bg-white/10 border border-white/40 p-6 rounded-2xl text-white placeholder:text-amber-200 focus:outline-none focus:border-[#FFD700] focus:bg-white/20 font-medium" 
            required
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="email" name="email" value={formData.email} onChange={handleChange}
              placeholder={emailLabel} 
              className="w-full bg-white/10 border border-white/40 p-6 rounded-2xl text-white placeholder:text-amber-200 focus:outline-none focus:border-[#FFD700] focus:bg-white/20 font-medium" 
              required
            />
            <input 
              type="tel" name="mobile" value={formData.mobile} onChange={handleChange}
              placeholder={mobileLabel} 
              className="w-full bg-white/10 border border-white/40 p-6 rounded-2xl text-white placeholder:text-amber-200 focus:outline-none focus:border-[#FFD700] focus:bg-white/20 font-medium" 
              required
            />
          </div>

          <textarea
            name="city" value={formData.city} onChange={handleChange}
            placeholder={cityLabel}
            className="w-full bg-white/10 border border-white/40 p-6 rounded-2xl text-white placeholder:text-amber-200 focus:outline-none focus:border-[#FFD700] focus:bg-white/20 resize-none h-24 font-medium"
          />

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className={`shine-btn w-full py-7 bg-gradient-to-r from-[#FFD700] to-amber-400 text-[#8B4513] rounded-3xl text-2xl font-bold shadow-lg shadow-orange-900/50 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed ${fontClass}`}
          >
            {loading ? submittingBtn : submitBtn}
          </motion.button>

          {status.message && (
            <p className={`text-center text-sm font-medium ${fontClass} ${
              status.type === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {status.message}
            </p>
          )}

          <p className="body-text text-center text-amber-200 text-sm">
            {footerNote}
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Registration;