import React from 'react'
import { render } from 'react-dom'
import Home from './components/Home'
import './styles.css'

let app = (
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

let here = document.querySelector('#react')
render(app, here)
