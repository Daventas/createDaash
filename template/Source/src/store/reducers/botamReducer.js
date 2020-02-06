const initState = {}

const botamReducer = (state = initState,action) => {
    
    switch(action.type) {
            case 'CREATE_BOTAM':
                console.log('create botam', action.botam)
        }    
    return state
}

export default botamReducer