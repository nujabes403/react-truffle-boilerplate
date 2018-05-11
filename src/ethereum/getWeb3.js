import Web3 from 'web3'
import { isEmpty, once } from 'lodash'

import { initWalletFailed, initWalletSuccess } from 'actions/wallet'

const CHECK_WALLET_INTERVAL = 1000 // ms

const checkWeb3Injected = () => new Promise((resolve, reject) => {
  const { web3 } = window
  // Check metamask is injected
  if (typeof web3 !== 'undefined') return resolve(web3)
  return reject()
})

const getWeb3 = ({ dispatch }) => new Promise((resolve, reject) => {
  const resolveOnce = once(resolve)
  const rejectOnce = once(reject)

  window.addEventListener('load', () => {
    checkWeb3Injected()
      .then(({ currentProvider }) => {
        const web3 = new Web3(currentProvider)

        setInterval(() => {
          console.log('checking account...')
          web3.eth.getAccounts((err, accounts) => {
            if (isEmpty(accounts)) {
              dispatch(initWalletFailed())
              rejectOnce()
            } else {
              const walletAddress = accounts[0]
              dispatch(initWalletSuccess(walletAddress))
              resolveOnce()
            }
          })
        }, CHECK_WALLET_INTERVAL)
      })
      .catch(() => {
        rejectOnce(new Error('Please inject web3'))
      })
  })
})

export default getWeb3
