import React from 'react';
import { TruckIcon, StarIcon, ShieldCheckIcon, BadgeCheckIcon } from '@heroicons/react/solid';

const features = [
  {
    name: 'Fast Delivery',
    description: 'Get your orders delivered swiftly to your doorstep with our fast delivery service.',
    icon: TruckIcon,
  },
  {
    name: 'Premium Quality',
    description: 'Experience the finest quality with our premium agarbatti, crafted for an enriching and lasting fragrance.',
    icon: StarIcon,
  },
  {
    name: 'Fragrance Locked',
    description: 'Enjoy long-lasting fragrance with our fragrance-locked agarbatti.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Trusted',
    description: 'Shop with confidence knowing you’re choosing a trusted brand.',
    icon: BadgeCheckIcon,
  },
];

const Feature = () => {
  return (
    <div className="bg-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-black p-9 rounded lg:text-center text-white">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need for a fragrant experience
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500">
          Experience the essence of our premium agarbattis, carefully crafted for your moments of tranquility and spiritual connection. Our agarbattis offer a blend of traditional fragrances and modern elegance.
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
