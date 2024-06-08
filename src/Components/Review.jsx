import React, { useState } from 'react';

const reviews = [
    {
        name: "Yashu D",
        review: `It's an amazing experience.. there are many scammers in market but they are genuine sellers.
I'll recommend my friend as well for buy subscription from them.`,
        rating: 5
    },
    {
        name: "Girraj",
        review: `First time i tried to purchase Premium for Youtube and yes they given the subscription for the same. They taken a time but yes they also give response on whatsapp. Trustworthy and excellent service. thanks bro`,
        rating: 4
    },
    {
        name: "Javed Ali",
        review: `It's great experience. With I have purchased Prime it's smooth experience with no screen busy problem and personal profile..`,
        rating: 5
    },
    {
        name: "Ajay Chawla",
        review: `Maine aise 1 ,2 logo se liya hai lekin unme koi na koi issue tha hi ek Month ke liye diye the lekin uske bad nahi diye ispe se mai last 9 ,10 Month se le raha hu...abhi tak koi issue wagera nahi hua .hai .. or har bar time par mila hai halaki time lete hai thoda lekin de dete hai ott subscription abhi tak ek bar bhi miss nahi kiya rahega . Thanks StreamNation

Suggestion- aap anime fan ke liye bhi ott lao ..jaise Crucyroll ka subscription bahot dino se chahata hu`,
        rating: 5
    },
    {
        name: "Vinnu sahu",
        review: `Admired his honesty. I paid amount for hotstar and due to personal emergency I didn't ask account details. Two months later I asked about subscription. He shared account details without any second thought. To be honest I didn't expect this kind of response from him
Genuine guy and true professionalism
Thanks
`,
        rating: 4
    },
    {
        name: "Yash Panwar",
        review: `Very much satisfied, ik that there are many scammers but ima give u guys my word that this guys are legit and they know how to talk and maintain a good relationship with the customers 🤝❤️`,
        rating: 5
    },
    {
        name: "Amit Jha",
        review: `As fast as light
lightening speed delivery of your orders`,
        rating: 5
    },
    {
        name: "Talluri Sudheer",
        review: `It's a very genuine service and person...i am taking and using Netflix yt premium Sony LIV from almost 3 years. A 200% geniune service person and this is the best and genuine service person.. don't think anymore just contact him and take subscriptions. Other service provider persons are fake. This is a very good service and cheapest OTT services..`,
        rating: 5
    },
    {
        name: "kishu",
        review: `Best OTT service and very fast delivery

Please dont hesitate and go ahead to buy from this`,
        rating: 3.5
    },
    {
        name: `
Prabhjot Singh`,
        review: `Best service in cheapest price
Amazing ...!`,
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
