import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '@lekoarts/gatsby-theme-cara/src/components/layout';
import Projects from '@lekoarts/gatsby-theme-cara/src/components/projects';
import About from '@lekoarts/gatsby-theme-cara/src/components/about';
import Contact from '@lekoarts/gatsby-theme-cara/src/components/contact';
import Hero from '../components/hero';

const Cara = () => (
  <Layout>
    <Parallax pages={5}>
      <Hero offset={0} />
      <Projects offset={1} />
      <About offset={3} />
      <Contact offset={4} />
    </Parallax>
  </Layout>
);

export default Cara;
