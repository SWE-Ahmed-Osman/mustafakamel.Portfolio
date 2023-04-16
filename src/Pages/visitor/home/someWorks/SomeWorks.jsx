import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SingleSomeWork from './SingleSomeWork';
import { useEffect } from 'react';
import HeaderSomeWorks from './HeaderSomeWorks';

import './someWorks.css';

const SomeWorks = () => {


  const projects = [
    {text: 'Project1'},
    {text: 'Project2'},
    {text: 'Project3'},
    {text: 'Project4'}
  ]
  const [active, setActive] = useState(0);
  const [curretnActive, setCurrentActive] = useState(0);
  const [next, setNext] = useState(true);
  const [animation, setAnimation] = useState({})


  const classes = `some_works ${active === 0 ? 'one' : active === 1 ? 'two' : active === 4 ? 'three' : 'four'}`


  useEffect(() => {
    setCurrentActive(active);
    curretnActive >= active ? setNext(false) : setNext(true);
  }, [active]);

  useEffect(() => {
    next ? setAnimation({
      initial: {y: 200, opacity: 0},
      animate: {y: 0, opacity: 1},
      exit: {y:  -200, opacity: 0},
    }) : setAnimation({
      initial: {y: -200, opacity: 0},
      animate: {y: 0, opacity: 1},
      exit: {y:  200, opacity: 0},
    })
  }, [next])

  return (
    <section className={classes}>
      <div className="bullets_controls">
        <span onClick={() => setActive(0)}></span>
        <span onClick={() => setActive(1)}></span>
        <span onClick={() => setActive(2)}></span>
        <span onClick={() => setActive(3)}></span>
      </div>
      <HeaderSomeWorks />
      <motion.div className="projects_container">
        <AnimatePresence>
          {projects.map((project, i) => {
            return  active === i && <SingleSomeWork key={i} aniamtion={animation} project={project} active={active} index={i} />
          }
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default SomeWorks