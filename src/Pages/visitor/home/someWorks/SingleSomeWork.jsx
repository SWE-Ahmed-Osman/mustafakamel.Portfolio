import React from 'react';
import { motion } from 'framer-motion';


const SingleSomeWork = ({ project, index, active, aniamtion }) => {

  return (
    <motion.div
    className="project_content container flex"
    initial={aniamtion.initial}
    animate={aniamtion.animate}
    exit={aniamtion.exit}
      // transition={{ type: "spring", stiffness: 120, bounce: .3 }}
      transition={{duration: 1}}
    >
      Hellow {index}
  </motion.div>
  )
}

export default SingleSomeWork