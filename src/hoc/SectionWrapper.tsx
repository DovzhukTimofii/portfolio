import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer as staggerContainerFunction } from "../utils/motion";
  
const staggerContainer = staggerContainerFunction(0, 0);

const SectionWrapper = (Component: React.FC, idName: string) => function HOC() {
    
  return (
      <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.25}}
          className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
      >
          <span className="hash-span" id={idName}>
              &nbsp;
          </span>
          <Component/>
      </motion.section>
  )
}

export default SectionWrapper