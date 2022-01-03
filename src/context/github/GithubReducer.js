const githubReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        case 'GET-USER':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default githubReducer;