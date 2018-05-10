import React from 'react'
import { connect } from 'react-redux'

type Props = {
  address: string,
}

const WalletStatus = ({ address }) => {
  return address
    ? <div>injected wallet address: {address}</div>
    : <div>wallet initializing...</div>
}

const mapStateToProps = (state) => ({
  address: state.wallet.address,
})


export default connect(
  mapStateToProps,
  null,
)(WalletStatus)
