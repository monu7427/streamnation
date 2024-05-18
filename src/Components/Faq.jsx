import React, { useState } from "react";


const faqData = [
    {
        question: "Why should I use your service?",
        answer: "If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.",
    },
    {
        question: "What payment method I can use?",
        answer: "If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.",
    },
    {
        question: "Is your service safe to use?",
        answer: "If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.",
    },
    {
        question: "How to recover password?",
        answer: "If you want to choose Pro or Business plan the you can use all payments. You can pay from Paypal, Payoneer, Master Card, Debit Card.",
    },
];

export default function Faq() {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleBox = (index) => {
        setOpenIndexes((prevOpenIndexes) => {
            if (prevOpenIndexes.includes(index)) {
                return prevOpenIndexes.filter((item) => item !== index);
            } else {
                return [...prevOpenIndexes, index];
            }
        });
    };

    return (
        <div>
            
            <div>
                <img src="https://i.ibb.co/DQ4FZhL/pattern-bg.png" alt="blue pattern background" className="absolute w-full h-64 md:h-96 object-center object-fit z-0" />
                <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-0 pb-32"> {/* Changed z-20 to z-0 */}
                    <div className="md:py-36 py-20">
                        <h1 role="heading" className="xl:text-5xl md:text-3xl text-xl font-bold leading-10 text-white">
                            Frequently asked questions
                        </h1>
                    </div>
                    <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white shadow rounded p-8 mt-1 cursor-pointer" onClick={() => toggleBox(index)}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-base font-semibold leading-none text-gray-800">{faq.question}</h2>
                                    </div>
                                    <button
                                        
                                        className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                                    >
                                        {openIndexes.includes(index) ? (
                                            <svg role="button" aria-label="close dropdown" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5L5 1L9 5" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : (
                                            <svg width="10" role="button" aria-label="open dropdown" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 5L9 1" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {openIndexes.includes(index) && (
                                    <ul>
                                        <li>
                                            <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">{faq.answer}</p>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
