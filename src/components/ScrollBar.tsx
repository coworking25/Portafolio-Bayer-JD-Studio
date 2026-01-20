import { useEffect } from 'react';

export const ScrollBar = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const scrollBar = document.querySelector('.scroll-bar') as HTMLElement;
      if (!scrollBar) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      scrollBar.style.setProperty('--p', `${scrollPercentage}%`);
      scrollBar.style.top = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar();

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return <div className="scroll-bar"></div>;
};
