import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from 'components/Loading'
import Layout from './Layout'
import WalletStatus from './WalletStatus'

import './App.scss'

type Props = {
  isLoading: boolean,
}

class App extends Component<Props> {
  render() {
    const { isLoading } = this.props
    if (isLoading) return <Loading wholePage />

    return [
      <WalletStatus key="WalletStatus" />,
      <Layout key="Layout" />,
    ]
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.ui.isLoading,
})

export default connect(
  mapStateToProps,
  null,
)(App)

