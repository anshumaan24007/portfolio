"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveDownRight } from "lucide-react";
import { CldImage } from "next-cloudinary";

import { ParallaxSlider } from "@/components";
import { slideUp } from "./variants";

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const ballRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const globe = ballRef.current?.querySelector(".globe");

      const circle1 = ballRef.current?.querySelector(".circle-1");
      const circle2 = ballRef.current?.querySelector(".circle-2");
      const circle3 = ballRef.current?.querySelector(".circle-3");

      const circleHor = ballRef.current?.querySelector(".circle-hor");
      const circleHorMiddle =
        ballRef.current?.querySelector(".circle-hor-middle");
      const globeWrap = ballRef.current?.querySelector(".globe-wrap");

      // Subtle tilt animation
      if (globeWrap) {
        gsap.to(globeWrap, {
          rotate: 14,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
        });
      }

      // Scroll-based rotation of the globe
      if (globe) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: globe,
              start: "100% 100%",
              end: "100% 0%",
              scrub: 0,
            },
          })
          .to(globe, {
            rotate: 90,
            ease: "none",
          });
      }

      // Enhanced vertical animation for .circle-1 with callbacks
      const animateVerticalLineWithCallback = (circle, dur, onMax, onMin) => {
        if (circle) {
          const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          tl.to(circle, {
            height: "100%",
            duration: dur,
            onUpdate: () => {
              const currentHeight = parseFloat(getComputedStyle(circle).height);
              const parentHeight = circle.parentElement?.clientHeight || 1;
              const percent = (currentHeight / parentHeight) * 100;

              if (percent > 99) {
                onMax?.();
              }
            },
          });

          tl.to(circle, {
            height: "0%",
            duration: dur,
            onUpdate: () => {
              const currentHeight = parseFloat(getComputedStyle(circle).height);
              const parentHeight = circle.parentElement?.clientHeight || 1;
              const percent = (currentHeight / parentHeight) * 100;

              if (percent < 1) {
                onMin?.();
              }
            },
          });
        }
      };

      // Animate .circle-1 and update others when height reaches thresholds
      animateVerticalLineWithCallback(
        circle1,
        3,
        () => {
          // onMax (height ~100%)
          if (circle2) gsap.to(circle2, { height: "50%", duration: 1 });
          if (circle3) gsap.to(circle3, { height: "50%", duration: 1 });
        },
        () => {
          // onMin (height ~0%)
          if (circle2) gsap.to(circle2, { height: "100%", duration: 1 });
          if (circle3) gsap.to(circle3, { height: "100%", duration: 1 });
        }
      );

      // Regular breathing animation for circle-2 and circle-3
      const animateVerticalLine = (circle, dur) => {
        if (circle) {
          gsap.fromTo(
            circle,
            { height: "0%" },
            {
              height: "100%",
              repeat: -1,
              yoyo: true,
              duration: dur,
              ease: "sine.inOut",
            }
          );
        }
      };

      animateVerticalLine(circle2, 4);
      animateVerticalLine(circle3, 5);

      // Pulsing equator animations
      if (circleHor) {
        gsap.to(circleHor, {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        });
      }

      if (circleHorMiddle) {
        gsap.to(circleHorMiddle, {
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        });
      }
    }, ballRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.header
      className="relative h-screen overflow-hidden bg-secondary-foreground text-background"
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <CldImage
        src="https://res.cloudinary.com/dqy1g4arm/image/upload/v1749840191/IMG_5710_ttj9df.jpg"
        className="object-cover md:scale-125 md:object-cover md:opacity-90"
        fill={true}
        sizes="100vw"
        alt="Anshuman Srivastava Personal Picture"
      />

      <div className="relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal">
        <div className="select-none">
          <h1 className="text-[max(9em,15vw)]">
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className="pe-12">
                Anshuman Srivastava
                <span className="spacer">—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className="hanger" ref={ballRef}>
          <p>
            <span>Located </span>
            <span>in </span>
            <span>Bengaluru, India</span>
          </p>

          <svg
            width="300px"
            height="121px"
            viewBox="0 0 300 121"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Combined Shape</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(0.000000, -366.000000)" fill="#1C1D20">
                <g transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)">
                  <g transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)">
                    <path d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z" />
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <div className="digital-ball">
            <div className="overlay"></div>
            <div className="globe">
              <div className="globe-wrap">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle-hor"></div>
                <div className="circle-hor-middle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:ml-auto">
          <div className="mx-10 max-md:my-12 md:mx-36">
            <div className="mb-4 md:mb-20">
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className="text-[clamp(1.55em,2.5vw,2.75em)]">
              <span className="block">Frontend</span>
              <span className="block">Designer &amp; Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
