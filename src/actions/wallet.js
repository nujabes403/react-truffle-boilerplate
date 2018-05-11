import { INIT_WALLET_SUCCESS, INIT_WALLET_FAILED } from 'actions/actionTypes'

export const initWalletSuccess = (address) => ({
  type: INIT_WALLET_SUCCESS,
  payload: { address },
})

export const initWalletFailed = () => ({
  type: INIT_WALLET_FAILED,
})
