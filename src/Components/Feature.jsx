import React, { useState } from 'react';
import { TruckIcon, StarIcon, ShieldCheckIcon, BadgeCheckIcon } from '@heroicons/react/solid';

const features = [
  {
    name: 'Exclusive Content',
    description: 'Discover a curated collection of exclusive content available only on our OTT platform.',
    icon: StarIcon,
  },
  {
    name: 'High-Quality Streaming',
    description: 'Experience high-definition streaming with our state-of-the-art technology infrastructure.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fast Activation',
    description: 'Get instant access to your favorite shows and movies with our fast activation process.',
    icon: TruckIcon,
  },
  {
    name: 'Trusted Platform',
    description: 'Join millions of satisfied users who trust our platform for their entertainment needs.',
    icon: BadgeCheckIcon,
  },
];

const Feature = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCompletePayment = () => {
    setPaymentCompleted(true);
  };

  return (
    <div className="bg-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-black p-9 rounded lg:text-center text-white">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Elevate Your Entertainment Experience with Our OTT Platform
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Immerse yourself in a world of entertainment with our OTT platform. From exclusive content to high-quality streaming, we have everything you need for an unparalleled viewing experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
