export function updateUser (username, password) {
    return { 
        type: 'UPDATE_USER_AND_PASS',
        payload: {
            username, password
        }
    }
}