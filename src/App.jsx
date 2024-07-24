import React from "react"
import show from "./assets/show.svg";
import { useState } from "react"
import HeroSection from "./components/HeroSection";

function App() {

  const [FAQ, setFAQ] = useState([
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. Our expense tracker web app uses the latest encryption technology to ensure that your data is safe and secure."
    },
    {
      question: "Can I access my expense data from multiple devices?",
      answer: "Absolutely! Our expense tracker web app is designed to be accessible from any device with an internet connection. You can easily access and manage your expense data from your computer, smartphone, or tablet."
    },
    {
      question: "What happens if I lose my device?",
      answer: "Don't worry! Your expense data is securely stored in the cloud, so even if you lose your device, you can still access your data from any other device. Just log in to your account and all your expense data will be there."
    },
    {
      question: "Is customer support available?",
      answer: "Yes, we have a dedicated customer support team available to assist you with any questions or issues you may have. You can reach out to our support team through email or live chat, and we'll be happy to help."
    },
    {
      question: "Can I export my expense data?",
      answer: "Absolutely! Our expense tracker web app allows you to easily export your expense data in various formats, such as CSV or PDF. You can then use this data for your own analysis or for tax purposes."
    }
  ]);

  return (
    <div className="font-Inter-Tight">
      <HeroSection />
      <div className="mx-24 my-16">
        <h2 className="text-5xl font-extrabold mb-2">Key Features</h2>
        <div className="opacity-60 mb-7">Discover the powerful features of our expense tracker web app.</div>
        <div>
          <div className="flex gap-2">
            <div className="bg-[#F8F8F8] px-5 py-3 flex-grow">
              <h3 className="text-2xl font-extrabold mb-1">Expense Categorisation</h3>
              <div className="text-[15px] opacity-50 w-80">Effortlessly categorize your expenses for better organization.</div>
            </div>
            <div className="bg-[#F8F8F8] px-4 py-3 flex-grow">
              <h3 className="text-2xl font-extrabold mb-1">Budget Tracking</h3>
              <div className="text-[15px] opacity-50 w-80">Stay on top of your finances by tracking your budget in real-time.</div>
            </div>
            <div className="bg-[#F8F8F8] px-4 py-3 flex-grow">
              <h3 className="text-2xl font-extrabold mb-1">Reporting</h3>
              <div className="text-[15px] opacity-50 w-80">Generate detailed reports to gain insights into your spending habits.</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-extrabold my-8 pl-[5.8rem]">FAQ</h2>
        <div className="flex flex-col items-center gap-y-4">
          {FAQ.map(faq => {
            return (<div className="QNA" key={faq.answer}>
              <div className="question">
                <div><h3>{faq.question}</h3></div>
                <div><img src={show} alt="img" /></div>
              </div>
              <div className="answer">{faq.answer}</div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App