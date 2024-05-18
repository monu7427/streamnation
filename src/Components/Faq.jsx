import React, { useState } from "react";


const faqData = [
    {
        question: "Why should I use StreamNation?",
        answer: "StreamNation offers the most affordable OTT subscriptions, allowing you to enjoy your favorite streaming services at a fraction of the cost. Our service is convenient and reliable, ensuring you get access to the best entertainment without breaking the bank."
    },
    {
        question: "What payment methods can I use?",
        answer: "Using UPI ID and QR scanner, you can make payments easily and securely."
    },
    {
        question: "Is your service safe to use?",
        answer: "Yes, StreamNation is safe and secure to use. We provide replacement services, and after payment, you will receive your subscription within a few minutes."
    },
    {
        question: "How do I subscribe to an OTT service through StreamNation?",
        answer: "Subscribing to an OTT service through StreamNation is simple. Contact us with your preferred OTT service and subscription plan, and provide your payment details. We will set up the subscription on either our number or your number, based on your preference."
    },
    {
        question: "Can I use the subscription on my personal account?",
        answer: "Yes, you can choose to have the subscription set up on your personal account. Simply provide us with the necessary details and we'll handle the rest, ensuring you have uninterrupted access to your chosen OTT service."
    },
    {
        question: "How do I recover my password?",
        answer: "If you need to recover your password, follow the standard recovery process of the respective OTT service. If you face any issues, our customer support team is here to help you through the process."
    },
    {
        question: "What OTT services do you support?",
        answer: "StreamNation supports a wide range of OTT services including Netflix, Amazon Prime Video, Disney Hotstar, Zee5, Sony Liv, JioCinema, and many more. Contact us for a full list of available services."
    },
    {
        question: "How do I contact customer support?",
        answer: "You can reach our customer support team via phone, email, or through our website's contact form. We are always here to assist you with any questions or issues you may have."
    }
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
                <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-0 pb-28"> {/* Changed z-20 to z-0 */}
                    <div className="md:py-36 py-16">
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
