import React, { Fragment } from 'react'
import { About } from './About'
import { Experiences } from './Experiences'
import { Hero } from './Hero'
import { Projects } from './Projects'
import { Skills } from './Skills'

export const Content = () => {
  return (
    <Fragment>
      {'[This is the content]'}
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
    </Fragment>
  )
}
