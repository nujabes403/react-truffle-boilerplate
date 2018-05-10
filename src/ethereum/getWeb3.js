import Web3 from 'web3'

import { initializeWallet } from 'actions/wallet'

const getWeb3 = (store) => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', () => {
    let { web3 } = window

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      console.log('Injected web3 detected.');

      web3.eth.getAccounts((err, accounts) => {
        resolve(store.dispatch(initializeWallet(accounts[0])))
      })
    } else {
      console.log('please inject web3 (with metamask)')
      reject(new Error('not injected web3'))
    }
  })
})

export default getWeb3
