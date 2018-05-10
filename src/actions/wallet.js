import { WALLET_INITIALIZED } from 'actions/actionTypes'

export const initializeWallet = (address) => ({
  type: WALLET_INITIALIZED,
  payload: { address },
})
