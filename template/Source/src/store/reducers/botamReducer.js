const initState = {}

const botamReducer = (state = initState,action) => {
    
    switch(action.type) {
            case 'CREATE_BOTAM':
                console.log('create botam', action.botam)
                return state
            case 'CREATE_BOTAM_ERROR':
                console.log('create botam error', action.err)
                return state
            default:
                return state
        }    

}

export default botamReducer