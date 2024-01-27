
const initstate = {
    user: [],
    error: ''
}

export default (state = initstate, { type, payload }) => {
  switch (type) {
  case "FETCH_DATA":
    return {user: payload, error: ''}
  case "ERROR":
    return {user: [], error: payload}
  default:
    return state
  }
}
