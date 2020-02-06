export const createBotam = (botam) => {
    return (dispatch, getState) => {
        //make async cal lto database
        dispatch({type: 'CREATE_BOTAM', botam: botam})
    }
};