import show from "../../assets/show.svg";
import hide from "../../assets/hide.svg";
import React, { useState } from "react";

function FAQ() {
  const [FAQ, setFAQ] = useState([
    {
      id: 1,
      question: "Is my data secure?",
      answer:
        "Yes, we take data security very seriously. Our expense tracker web app uses the latest encryption technology to ensure that your data is safe and secure.",
    },
    {
      id: 2,
      question: "Can I access my expense data from multiple devices?",
      answer:
        "Absolutely! Our expense tracker web app is designed to be accessible from any device with an internet connection. You can easily access and manage your expense data from your computer, smartphone, or tablet.",
    },
    {
      id: 3,
      question: "What happens if I lose my device?",
      answer:
        "Don't worry! Your expense data is securely stored in the cloud, so even if you lose your device, you can still access your data from any other device. Just log in to your account and all your expense data will be there.",
    },
    {
      id: 4,
      question: "Is customer support available?",
      answer:
        "Yes, we have a dedicated customer support team available to assist you with any questions or issues you may have. You can reach out to our support team through email or live chat, and we'll be happy to help.",
    },
    {
      id: 5,
      question: "Can I export my expense data?",
      answer:
        "Absolutely! Our expense tracker web app allows you to easily export your expense data in various formats, such as CSV or PDF. You can then use this data for your own analysis or for tax purposes.",
    },
  ]);

  const [showAnswer, setShowAnswer] = useState(null);

  const handleAnswer = (id) => setShowAnswer(showAnswer === id ? null : id);

  return (
    <>
      <h2 className="text-5xl font-extrabold my-8 ml-[6%]">FAQ</h2>
      <div className="flex flex-col items-center gap-y-4">
        {FAQ.map((faq) => {
          return (
            <div className="QNA" key={faq.id}>
              <div className="question">
                <div className="w-full">
                  <h3>{faq.question}</h3>
                </div>
                <div>
                  <img
                    src={showAnswer === faq.id ? hide : show}
                    alt="img"
                    onClick={() => {
                      handleAnswer(faq.id);
                    }}
                    className="h-full hover:cursor-pointer"
                  />
                </div>
              </div>
              {showAnswer === faq.id && (
                <div className="answer">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FAQ;
