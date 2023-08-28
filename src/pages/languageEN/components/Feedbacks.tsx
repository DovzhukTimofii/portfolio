/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { SectionWrapper } from "../../../hoc";
import { fadeIn,textVariant } from "../../../utils/motion";
import { skillGainItems } from "../constants";

const FeedbackCard = ({index, reason, headline, project}) => (
  <motion.div 
    variants={fadeIn("","spring", index * 0.5, 0.75)} 
    className="bg-primary p-10 rounded-3x1 xs:w-[320px] w-full"
  >
    <p className="text secondary font-black text-[48px]">"</p>
    <div className="mt-1">
      <p>{reason}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p>
            <span className="blue-text-gradient">@</span>{headline}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {project}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-tertiary rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2x1 min-h-[300px]`}>
        <motion.div variants={textVariant(0)}>
          <p className={styles.sectionSubText}>What did I get out of completing these projects</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {skillGainItems.map((skillGainItem, index) => (
          <FeedbackCard key={skillGainItem.headline} index={index} {...skillGainItem}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")