

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/ryotogashi/portfolio/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/ryotogashi/portfolio/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/ryotogashi/portfolio/src/pages/404.js'
      
const t_1 = universal(import('/Users/ryotogashi/portfolio/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/ryotogashi/portfolio/src/pages/about.js'
      
const t_2 = universal(import('/Users/ryotogashi/portfolio/src/pages/blog.js'), universalOptions)
      t_2.template = '/Users/ryotogashi/portfolio/src/pages/blog.js'
      
const t_3 = universal(import('/Users/ryotogashi/portfolio/src/pages/index.js'), universalOptions)
      t_3.template = '/Users/ryotogashi/portfolio/src/pages/index.js'
      
const t_4 = universal(import('/Users/ryotogashi/portfolio/src/pages/projects.js'), universalOptions)
      t_4.template = '/Users/ryotogashi/portfolio/src/pages/projects.js'
      
const t_5 = universal(import('/Users/ryotogashi/portfolio/src/pages/skill.js'), universalOptions)
      t_5.template = '/Users/ryotogashi/portfolio/src/pages/skill.js'
      
const t_6 = universal(import('/Users/ryotogashi/portfolio/src/containers/Post'), universalOptions)
      t_6.template = '/Users/ryotogashi/portfolio/src/containers/Post'
      

// Template Map
export default {
  '/Users/ryotogashi/portfolio/src/pages/404.js': t_0,
'/Users/ryotogashi/portfolio/src/pages/about.js': t_1,
'/Users/ryotogashi/portfolio/src/pages/blog.js': t_2,
'/Users/ryotogashi/portfolio/src/pages/index.js': t_3,
'/Users/ryotogashi/portfolio/src/pages/projects.js': t_4,
'/Users/ryotogashi/portfolio/src/pages/skill.js': t_5,
'/Users/ryotogashi/portfolio/src/containers/Post': t_6
}
// Not Found Template
export const notFoundTemplate = "/Users/ryotogashi/portfolio/src/pages/404.js"

