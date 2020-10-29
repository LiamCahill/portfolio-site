import React, { Fragment } from 'react'
import { About } from './About'
import { Experience } from './Experience'
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
      <Experience />
      <Projects />
    </Fragment>
  )
}
