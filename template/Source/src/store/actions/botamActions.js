export const createBotam = (botam) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async cal lto database
        const firestore = getFirestore();
        firestore.collection('botams').add({
            ...botam,
            authorFirstName : "Matt",
            authorLastName : "Song",
            authorId: 12123,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_BOTAM', botam})
        }).catch((err)=> {
            dispatch({type: 'CREATE_BOTAM_ERROR', err})
        })
        dispatch({type: 'CREATE_BOTAM', botam: botam})
    }
};