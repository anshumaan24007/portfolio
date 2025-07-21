'use client';

import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MoveDownRight } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const ballRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const globe = ballRef.current?.querySelector('.globe');
      const circles = ballRef.current?.querySelectorAll('.circle') || [];
      const circleHor = ballRef.current?.querySelector('.circle-hor');
      const circleHorMiddle =
        ballRef.current?.querySelector('.circle-hor-middle');

      // Scroll-triggered globe rotation
      if (globe) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: globe,
              start: '100% 100%',
              end: '100% 0%',
              scrub: 0,
            },
          })
          .to(globe, {
            rotate: 90,
            ease: 'none',
          });
      }

      // Circle entrance animations
      circles.forEach((circle, i) => {
        gsap.fromTo(
          circle,
          { scale: 0.8, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            delay: i * 0.2,
            scrollTrigger: {
              trigger: circle,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // Infinite horizontal rotation
      if (circleHor) {
        gsap.to(circleHor, {
          rotate: 360,
          repeat: -1,
          duration: 8,
          ease: 'none',
          transformOrigin: '50% 50%',
        });
      }

      // Pulsing middle horizontal circle
      if (circleHorMiddle) {
        gsap.to(circleHorMiddle, {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: 'sine.inOut',
        });
      }
    }, ballRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <CldImage
        src='https://res.cloudinary.com/dqy1g4arm/image/upload/v1749840191/IMG_5710_ttj9df.jpg'
        className='object-cover md:scale-125 md:object-cover md:opacity-90'
        fill={true}
        sizes='100vw'
        alt='Anshuman Srivastava Personal Picture'
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Anshuman Srivastava
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='hanger' ref={ballRef}>
          <p>
            <span>Located </span>
            <span>in </span>
            <span>Bengaluru, India</span>
          </p>
          <svg
            width='300px'
            height='121px'
            viewBox='0 0 300 121'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Combined Shape</title>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g transform='translate(0.000000, -366.000000)' fill='#1C1D20'>
                <g transform='translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)'>
                  <g transform='translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)'>
                    <path d='M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z' />
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <div className='digital-ball'>
            <div className='overlay'></div>
            <div className='globe'>
              <div className='globe-wrap'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle-hor'></div>
                <div className='circle-hor-middle'></div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Frontend</span>
              <span className='block'>Designer &amp; Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
