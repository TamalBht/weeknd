// App.js
import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sidescroll = () => {
  const racesWrapperRef = useRef(null);
  const racesRef = useRef(null);
  useEffect(() => {
    const races = racesRef.current;

    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: racesWrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tween.kill();
    };
  }, []);


  return (
    <>
      

<div className="racesWrapper relative left-[10vw]" ref={racesWrapperRef}>
	<div className="races font-niagra" ref={racesRef}>
		<h2>Abel</h2>
		<h2>Tesfaye</h2>
		<h2>AKA</h2>
		<h2>The</h2>
		<h2 className='relative -left-[5vw]'>Weeknd</h2>
	</div>
</div>

    </>
  );
};

export default Sidescroll;
