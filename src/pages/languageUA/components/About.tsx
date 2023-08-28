/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../../../utils/motion"; 
import { SectionWrapper } from "../../../hoc";

interface Service {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<Service> = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-max={45}
          data-scale={1}
          data-speed={450}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Вступ</p>
        <h2 className={styles.sectionHeadText}>Огляд.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        <p>
          Я фронтенд-розробник, займаюся програмуванням з п'ятнадцяти років
          років і вже володію багатьма технологіями, такими як JavaScript,
          ReactJs, TypeScript, HTML/CSS, Sass/Scss, ThreeJS, Tailwind CSS, BEM
          методологію BEM та багато бібліотек. У мене немає ідеальної кінцевої точки, моє
          життя - це постійний саморозвиток!
        </p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");