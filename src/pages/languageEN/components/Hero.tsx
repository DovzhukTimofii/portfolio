import { motion } from 'framer-motion';
import { styles } from '../../../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const textHeroAnimation = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }),
  }


  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start  gap-`}>
        <div className='flex pr-5 flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#bbe13d]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/> 
        </div>
        <motion.div viewport={{once: true}} initial="hidden" whileInView="visible">
          <motion.h1 custom={1} variants={textHeroAnimation}>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, i am
              <span className='text-darkgreen'>
                Timofii
              </span>
            </h1>
          </motion.h1>
          <motion.p custom={2} variants={textHeroAnimation}>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop websites,<br className='sm:block hidden'/> with interactivity and adaptability
            </p>
          </motion.p>
          
        </motion.div>
        
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0,24,0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero