import React, { useState } from 'react';

const reviews = [
    {
        name: "Riya",
        review: "Hey, just wanted to drop a quick message about StreamNation. It's legit amazing! Super cheap OTT subscriptions and they're totally genuine. Highly recommend!",
        rating: 5
    },
    {
        name: "Karan",
        review: "Yo, stumbled upon StreamNation and it's been a game-changer! Legit subscriptions at killer prices. Been using it for months now, no complaints! Plus, their customer support is 👌",
        rating: 4
    },
    {
        name: "Anushka",
        review: "OMG, StreamNation is lit! Affordable, genuine subscriptions making my streaming life so easy. Totally worth it! 🙌",
        rating: 5
    },
    {
        name: "Aryan",
        review: "Dude, StreamNation is a lifesaver for broke college students like us! Genuine subs at unbeatable prices. Can't imagine life without it now! 😎",
        rating: 5
    },
    {
        name: "Priya",
        review: "Hey, just wanted to say StreamNation rocks! Legit subs at affordable rates. Super reliable and their support team is always there to help. 4 stars from me!",
        rating: 4
    },
    {
        name: "Rohit",
        review: "Bro, StreamNation is my go-to for OTT needs. Genuine subs at the best prices. Been using it for ages, never disappointed! ✌️",
        rating: 5
    },
    {
        name: "Neha",
        review: "Hey, StreamNation has changed my life! Affordable subs and super reliable service. 5 stars all the way! 🌟",
        rating: 5
    },
    {
        name: "Vivek",
        review: "Hey, tried a bunch of OTT subs, but StreamNation is legit the best! Unbeatable prices and top-notch service. 5/5 for sure! 👍",
        rating: 5
    },
    {
        name: "Sakshi",
        review: "Hey, just wanted to say StreamNation is lit! Best OTT subs at the lowest prices. Genuine and awesome service! 🎉",
        rating: 3.5
    },
    {
        name: "Akash",
        review: "Hey, StreamNation has made my life so much easier! Enjoying my shows without breaking the bank. Legit accounts and a solid service. 4 stars from me! 📺",
        rating: 4
    }
];



const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <>

        <h1 className='bg-slate-900 text-white text-center w-full p-4 text-2xl font-bold'>Reviews</h1>
        <div className="flex flex-col items-center justify-center h-65 bg-slate-200">
            
            <div className="w-full max-w-xl p-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">{reviews[currentIndex].name}</h3>
                    <p className="mb-2">{reviews[currentIndex].review}</p>
                    <p className="mb-4">Rating: { '★'.repeat(reviews[currentIndex].rating) + '☆'.repeat(5 - reviews[currentIndex].rating)}</p>
                </div>
                <div className="flex justify-between mt-4">
                    <button 
                        className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                        onClick={prevReview}
                    >
                        Previous
                    </button>
                    <button 
                        className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                        onClick={nextReview}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div></>
    );
};

export default Review;
