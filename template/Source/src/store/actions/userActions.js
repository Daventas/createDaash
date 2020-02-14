export const createUser = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async cal lto database
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...user,
            authorFirstName : "Matt",
            authorLastName : "Song",
            authorId: 12123,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_USER', user})
        }).catch((err)=> {
            dispatch({type: 'CREATE_USER_ERROR', err})
        })
        dispatch({type: 'CREATE_USER', user: user})
    }
};