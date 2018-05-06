import React, { Component } from 'react'

import Popup from 'components/Popup'
import Layout from './Layout'

import './App.scss'

class App extends Component {
  componentDidMount() {
    console.log('app mounted')
  }

  render() {
    return [
      <Popup key="Popup" />,
      <Layout key="Layout" />,
    ]
  }
}

export default App
