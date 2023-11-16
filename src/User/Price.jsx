import React from 'react';
import './Price.css';
import Header from '../Header';
import Footer from '../Footer';
const Price = () => {
  const subscriptionPackages = [
    {
      title: 'Monthly Plan',
      description: 'Active with high exposure for 30 days',
      price: '$300',
      originalPrice: '$400',
      discount: 'You Save 34%',
      duration: 'Choose Plan',
      features: ['Active for 30 days', 'Refreshed 3 times', 'Featured for 7 days'],
    },
    {
      title: 'Yearly Plan',
      description: 'Active with high exposure for 365 days',
      price: '$450',
      originalPrice: '$600',
      discount: 'You Save 54%',
      duration: 'Choose Plan',
      features: ['Active for 365 days', 'Refreshed 6 times', 'Featured for 14 days'],
    },
  ];

  // Separate the monthly and yearly plans
  const monthlyPlan = subscriptionPackages.find(plan => plan.title === 'Monthly Plan');
  const yearlyPlan = subscriptionPackages.find(plan => plan.title === 'Yearly Plan');

  return (
    <>
    <Header />
      <div className="pricing">Price</div>
      <div className='text'>
        <span>We review all ads to keep everyone on list IT safe and happy.</span>
      </div>
      <div className='container'>
        <div className='container1'>
          {/* Render the Monthly Plan */}
          <div className='subscription-package'>
            <h2>{monthlyPlan.title}</h2>
            <p>{monthlyPlan.description}</p>
            <p>{`$${monthlyPlan.price}*`}</p>
            <p>{`$${monthlyPlan.originalPrice}*`}</p>
            <p>{monthlyPlan.discount}</p>
            <button>{monthlyPlan.duration}</button>
            <ul>
              {monthlyPlan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='container2'>
          {/* Render the Yearly Plan */}
          <div className='subscription-package'>
            <h2>{yearlyPlan.title}</h2>
            <p>{yearlyPlan.description}</p>
            <p>{`$${yearlyPlan.price}*`}</p>
            <p>{`$${yearlyPlan.originalPrice}*`}</p>
            <p>{yearlyPlan.discount}</p>
            <button>{yearlyPlan.duration}</button>
            <ul>
              {yearlyPlan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        
      </div><Footer />
    </>
  );
};

export default Price;
