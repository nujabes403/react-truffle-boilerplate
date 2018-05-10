import React, { Component } from 'react'

import Layout from './Layout'
import WalletStatus from './WalletStatus'

import './App.scss'

class App extends Component {
  componentDidMount() {
    console.log('app mounted')
  }

  render() {
    return [
      <WalletStatus key="WalletStatus" />,
      <Layout key="Layout" />
    ]
  }
}

export default App
