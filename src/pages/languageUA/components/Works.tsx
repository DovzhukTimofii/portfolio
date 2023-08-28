/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../../assets";
import { SectionWrapper } from "../../../hoc";
import { fadeIn,textVariant } from "../../../utils/motion";
import { styles } from "../../../styles";
import { projects } from "../constants";

const ProjectCard = ({index, name, description, tags,image,source_code_link}) => {
  return (
   <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
        }} 
        className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full"
      > 
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2x1" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open(source_code_link,"_blank")}
              className="black-gradient w-10 h-10  rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="githab" className="h-1/2 w-1/2 object-contain"/>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-7">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
   </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Моя робота</p>
        <h2 className={styles.sectionHeadText}>Проекти.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          Представлені проекти наочно демонструють мої навички та досвід, показуючи реальні приклади моєї роботи. Кожен проект коротко описаний, супроводжується посиланнями на репозиторій коду та демонстраціями в реальному часі. Ця добірка підкреслює мою здатність вирішувати складні завдання, співпрацювати з різноманітними технологіями та вміло контролювати виконання проекту.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")