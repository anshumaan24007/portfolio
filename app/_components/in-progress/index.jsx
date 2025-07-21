import { Center, ParallaxSlider } from '@/components';

/** @param {import('react').PropsWithChildren<unknown>} */
export function InProgress({ children }) {
  return (
    <Center className='mb-20 h-min bg-gradient-to-tr from-[#455CE9] to-[#111946] py-20'>
      <div className='select-none'>
        <h1 className='text-[max(10em,18vw)] text-white'>
          <ParallaxSlider repeat={8} baseVelocity={2}>
            <span className='pe-12'>
              {children}
              <span className='spacer'>—</span>
            </span>
          </ParallaxSlider>
        </h1>
      </div>
    </Center>
  );
}
