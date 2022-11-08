import React from 'react'
import {useState} from 'react'
import {Component} from './Component.jsx'

import {ThemeProvider} from './ThemeContext.js'

export const App = () => {

  return(
    <ThemeProvider>
      <Component/>
    </ThemeProvider>
  )
}