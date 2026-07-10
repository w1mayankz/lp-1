import { useState, useEffect } from 'react';

export function useLondonTime() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format specifically for London timezone in HH:MM (24-hour format)
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      
      setTime(formatter.format(now));
    };

    // Set initial time immediately to avoid hydration/render flash
    updateTime();
    
    // Update every second
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}
