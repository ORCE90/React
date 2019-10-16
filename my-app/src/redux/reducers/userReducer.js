export function userReducer (
    state = {username: null, password: null}, action) {
    switch (action.type) {
        case 'UPDATE_USER_AND_PASS': {
            return {
                ...state, 
                username: action.payload.username,
                password: action.payload.password
            }
        }
        
        default : {
            return {...state}
        }
    }
}