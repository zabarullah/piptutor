// useAOS.ts
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation should happen only once
    });
  }, []);
};

export default useAOS;
