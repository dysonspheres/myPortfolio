import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";



const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
        >Technologies and Frameworks I've worked With</p>
        <h2 className={styles.sectionHeadText}
        >Skills.</h2>
      </motion.div>
    <div className="mt-5 flex flex-row flex-wrap 
    justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 
        key={technology.name}">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>

    </div>
    
  )
}

export default SectionWrapper(Tech, "");