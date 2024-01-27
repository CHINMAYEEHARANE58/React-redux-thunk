export const fetchUserData = (user) => ({type:"FETCH_DATA", payload: user})
export const showError = (error) => ({type:"ERROR", payload:error})