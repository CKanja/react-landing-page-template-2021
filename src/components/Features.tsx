import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { sc1, title, subtitle, description } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-left">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                Water Managers
              </h2>
              <br></br>

              <p>
                Leverage IoT sensors to track different points of distribution
                pipeline.
              </p>

              <p>Receive real time notifications.</p>
            </div>

            <div className="flex-shrink-0 mx-4">
              <img src={sc1} alt="centered image" />
            </div>

            <div className="flex-1 text-right">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                Household Consumers
              </h2>
              <br></br>

              <p>Find closest alternative water ATMs.</p>

              <p>Access to information about the water they are consuming.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
