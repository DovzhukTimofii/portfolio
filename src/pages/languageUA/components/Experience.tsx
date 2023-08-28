/* eslint-disable react-refresh/only-export-components */
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../../../hoc';
import { textVariant } from '../../../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#302f10', color: '#abc3a6'}}
    contentArrowStyle={{borderRight: '7px solid #abc3a6'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon} 
          alt="icon"
          className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-secondary text-[24px] font-bold'>{experience.title}</h3>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-primary-100 text-[14px] pl-1 tracking-wider'>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Що я зробив до цього часу</p>
        <h2 className={styles.sectionHeadText}>Історія мого розвитку у фронтенді</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "my story")