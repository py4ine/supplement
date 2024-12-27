const inintialUserState = {
    name: '',
    email: ''
}

const userReducer = (state=inintialUserState, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {...state, name: action.payload.name, email: action.payload.email}
        case 'CLEAR_USER':
            return {...state, name: '', email: ''}
        default:
            return state
    }
}

export default userReducer