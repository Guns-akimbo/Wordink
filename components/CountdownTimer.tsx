"use client";
import  { useEffect, useState } from 'react';

const COUNTDOWN_DATE = new Date('2025-05-20').getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = COUNTDOWN_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center text-[#F97316] mb-2">
        {/* <Clock className="mr-2" /> */}
      </div>
      <div className="grid grid-cols-4 gap-8">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="bg-[#F97316] text-white rounded-lg p-3 w-16 h-16 flex items-center justify-center text-2xl font-bold">
              {item.value}
            </div>
            <span className="text-base mt-1 text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
