import show from "./assets/show.svg";
import hide from "./assets/hide.svg";
import React, { useState } from "react"
import HeroSection from "./components/HeroSection";
import Contects_Form from "./components/contacts&form";

function App() {

  const [FAQ, setFAQ] = useState([
    {
      id: 1,
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. Our expense tracker web app uses the latest encryption technology to ensure that your data is safe and secure."
    },
    {
      id: 2,
      question: "Can I access my expense data from multiple devices?",
      answer: "Absolutely! Our expense tracker web app is designed to be accessible from any device with an internet connection. You can easily access and manage your expense data from your computer, smartphone, or tablet."
    },
    {
      id: 3,
      question: "What happens if I lose my device?",
      answer: "Don't worry! Your expense data is securely stored in the cloud, so even if you lose your device, you can still access your data from any other device. Just log in to your account and all your expense data will be there."
    },
    {
      id: 4,
      question: "Is customer support available?",
      answer: "Yes, we have a dedicated customer support team available to assist you with any questions or issues you may have. You can reach out to our support team through email or live chat, and we'll be happy to help."
    },
    {
      id: 5,
      question: "Can I export my expense data?",
      answer: "Absolutely! Our expense tracker web app allows you to easily export your expense data in various formats, such as CSV or PDF. You can then use this data for your own analysis or for tax purposes."
    }
  ]);

  const [features, setFeatures] = useState([
    {
      heading: "Expense Categorisation",
      para: "Effortlessly categorize your expenses for better organization."
    },
    {
      heading: "Budget Tracking",
      para: "Stay on top of your finances by tracking your budget in real-time."
    },
    {
      heading: "Reporting",
      para: "Generate detailed reports to gain insights into your spending habits."
    }
  ]);

  const [word, setWork] = useState([
    {
      id: 1,
      heading: "Step 1: Add Expenses",
      para: "Start by adding your expenses to the app. Enter the amount, category, and date of each expense."
    },
    {
      id: 2,
      heading: "Step 2: Set Budgets",
      para: "Set budgets for different expense categories to help you stay on track. The app will notify you when you're close to reaching your budget limit."
    },
    {
      id: 3,
      heading: "Step 3: Generate Reports",
      para: "Generate reports to get a clear overview of your expenses. Analyze your spending patterns and make informed financial decisions."
    }
  ]);

  const [showAnswer, setShowAnswer] = useState(null);

  const handleAnswer = (id) => setShowAnswer(showAnswer === id ? null : id);

  return (
    <div className="font-Inter-Tight">
      <HeroSection />
      <div className="mx-24 my-16">
        <h2 className="text-5xl font-extrabold mb-2">Key Features</h2>
        <div className="opacity-60 mb-7">Discover the powerful features of our expense tracker web app.</div>
        <div className="flex gap-2">
          {features.map(items => {
            return <div className="bg-[#F8F8F8] px-5 py-3 flex-grow rounded-md" key={items.para}>
              <h3 className="text-2xl font-extrabold mb-1">{items.heading}</h3>
              <div className="text-[15px] opacity-50 w-80">{items.para}</div>
            </div>
          })}
        </div>
      </div>
      <div className="mx-24 my-16">
        <h2 className="text-5xl font-extrabold mb-2">How it works</h2>
        <div className="opacity-60 mb-7">Learn how to use the expense tracker web app with this step-by-step guide.</div>
        <div className="flex w-full mb-3">
          {word.map(items => {
            return (<div className="flex items-center flex-grow" key={items.id}>
              <div className="bg-black text-white py-4 px-6 rounded-full text-xl font-bold">{items.id}</div>
              <div className="bg-black w-full h-[1px]"></div>
            </div>)
          })}
        </div>
        <div className="flex gap-2">
          {word.map(items => {
            return (<div className="w-full" key={items.id}>
              <div className="bg-[#F8F8F8] px-5 py-3 flex-grow rounded-2xl">
                <h3 className="text-3xl font-extrabold mb-1">{items.heading}</h3>
                <div className="text-[16px] opacity-50 w-[19.87rem]">{items.para}</div>
              </div>
            </div>)
          })}
        </div>
      </div>
      <h2 className="text-5xl font-extrabold my-8 pl-[5.8rem]">FAQ</h2>
      <div className="flex flex-col items-center gap-y-4">
        {FAQ.map(faq => {
          return <div className="QNA" key={faq.id}>
            <div className="question">
              <div><h3>{faq.question}</h3></div>
              <div>
                <img
                  src={showAnswer === faq.id ? hide : show}
                  alt="img"
                  onClick={() => { handleAnswer(faq.id) }}
                  className="hover:cursor-pointer"
                /></div>
            </div>
            {showAnswer === faq.id && <div className="answer">{faq.answer}</div>}
          </div>
        })}
      </div>
      <Contects_Form />
    </div >
  )
}

export default App