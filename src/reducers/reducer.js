const istate = {
    name: "test",
    wishhes: ['test1', 'test2']
}

const reducer = (state = istate, action) => {

    if (action.type === 'USER_SEARCH') {
        return {
            ...state,
            respData: action.data
        }
    }
    return state;
}

export default reducer;