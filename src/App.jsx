import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import useTheme from "./context/theme";
import "./App.css";
import { motion } from "framer-motion";

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white dark:bg-[#121212] shadow-md rounded-b-lg transition-all duration-300">
      {/* Logo and Name */}
      <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-orange-500 cursor-pointer transition-all duration-300">
        SoftSell<span className="text-orange-500">.</span>
      </div>

      {/* Theme Toggle */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </nav>
  );
}

function HeroSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} className="flex flex-col justify-center items-center bg-white dark:bg-[#121212] text-center space-y-6 px-4 py-8 transition-all duration-300"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight">
        Unlock the Value of Unused Software Licenses
      </h1>
      <h3 className="text-2xl font-medium text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
        Sell your extra software licenses effortlessly and earn back your
        investment.
      </h3>
      <button className="bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:scale-105 active:scale-95 duration-200">
        Sell My Licenses
      </button>
    </motion.div>
  );
}

function HowItWorks() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
      className="py-12 px-6 bg-white dark:bg-[#121212] transition-all duration-300"
    >
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
        How It Works
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl border ">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
            📤 Upload License:
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Share your unused software license details.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl border ">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
            💰 Get Valuation:
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Receive an instant market-based price estimate.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121212] shadow-lg rounded-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl border ">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
            🏦 Get Paid:
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Accept the offer and receive payment quickly.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function WhyChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-white dark:bg-[#121212] transition-all duration-300"
    >
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
        Why Choose Us
      </h1>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6 text-gray-700 dark:text-gray-300 text-lg">
          <li className="p-6 bg-white dark:bg-[#1e1e1e] shadow-lg rounded-lg border  transition-transform hover:scale-105 duration-300">
            ⚡ <strong>Fast Process:</strong> Get quotes and payments in no
            time.
          </li>
          <li className="p-6 bg-white dark:bg-[#1e1e1e] shadow-lg rounded-lg border  transition-transform hover:scale-105 duration-300">
            🔒 <strong>Secure Transactions:</strong> We prioritize your data and
            payment safety.
          </li>
          <li className="p-6 bg-white dark:bg-[#1e1e1e] shadow-lg rounded-lg border  transition-transform hover:scale-105 duration-300">
            📈 <strong>Fair Market Pricing:</strong> Transparent valuation with
            no hidden fees.
          </li>
          <li className="p-6 bg-white dark:bg-[#1e1e1e] shadow-lg rounded-lg border  transition-transform hover:scale-105 duration-300">
            💼 <strong>Trusted by Businesses:</strong> Hundreds of companies
            rely on SoftSell.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }} className="py-12 bg-white dark:bg-[#121212]">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
        What Our Clients Say
      </h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-8 bg-white dark:bg-[#1e1e1e] shadow-lg rounded-lg border  transition-transform hover:scale-105 duration-300">
          <p className="text-gray-800 dark:text-gray-200 italic">
            "SoftSell made it super easy to monetize unused licenses. Smooth and
            quick!"
          </p>
          <p className="mt-4 text-sm font-semibold text-right text-slate-500 dark:text-slate-400">
            - Priya Sharma, IT Manager, TechNova Pvt Ltd
          </p>
        </div>
        <div className="p-8 bg-white dark:bg-[#1e1e1e] shadow-lg rounded-lg border  transition-transform hover:scale-105 duration-300">
          <p className="text-gray-800 dark:text-gray-200 italic">
            "Professional and transparent from start to finish. Highly
            recommend!"
          </p>
          <p className="mt-4 text-sm font-semibold text-right text-slate-500 dark:text-slate-400">
            - Arjun Mehta, Founder, CloudBridge Solutions
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} className="py-12 bg-white dark:bg-[#121212] flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
        Contact Us
      </h1>
      <form className="space-y-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <select
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        >
          <option value="">Select License Type</option>
          <option value="Office">Microsoft Office</option>
          <option value="Adobe">Adobe Suite</option>
          <option value="Antivirus">Antivirus</option>
        </select>
        <textarea
          placeholder="Message"
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-[#1e1e1e] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
        <button className="bg-indigo-500 hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:scale-105 active:scale-95 duration-200  ">
          Submit
        </button>
      </form>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-[#121212]">
      © {new Date().getFullYear()} SoftSell. All rights reserved.
    </footer>
  );
}

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <motion.div
      className="bg-white dark:bg-[#121212] p-5 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </ThemeProvider>
    </motion.div>
  );
}

export default App;
