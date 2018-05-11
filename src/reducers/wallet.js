import {
  INIT_WALLET_SUCCESS,
  INIT_WALLET_FAILED,
} from 'actions/actionTypes'

const initialState = {
  address: '',
  isLocked: false,
}

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_WALLET_SUCCESS:
      return {
        ...state,
        address: action.payload.address,
      }
    case INIT_WALLET_FAILED:
      return {
        ...state,
        address: '',
        isLocked: true,
      }
    default:
      return state
  }
}

export default walletReducer
