import { FINISH_LOADING } from 'actions/actionTypes'

const initialState = {
  isLoading: true,
}

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default walletReducer
