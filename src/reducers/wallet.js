import { WALLET_INITIALIZED } from 'actions/actionTypes'

const initialState = {
  address: '',
}

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case WALLET_INITIALIZED:
      return {
        ...state,
        address: action.payload.address,
      }
    default:
      return state
  }
}

export default walletReducer
