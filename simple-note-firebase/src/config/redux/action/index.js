import firebase,{database} from '../../firebase/';

export const actionUserName = () => (dispatch) => {

    setTimeout(() => {
        return dispatch({type:'CHANGE_USER',value:'Riventus AHA'})
    },2000)
}

export const registerUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve,reject) => {
        dispatch({type:'CHANGE_ISLOADING',value:true});
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(result => {
            // console.log('success: ',result);
            dispatch({type:'CHANGE_ISLOADING',value:false});
            resolve(true);
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode,errorMessage);
            dispatch({type:'CHANGE_ISLOADING',value:false});
            reject(false);
        })
    })
}

export const loginUserAPI = (data) => (dispatch) =>{
    return new Promise((resolve,reject) => {
        dispatch({type:'CHANGE_ISLOADING',value:true});
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(result => {
            // console.log('success: ',result);
            const dataUser = {
                email: result.user.email,
                uid:result.user.uid,
                emailVerified: result.user.emailVerified,
                refreshToken: result.user.refreshToken
            }
            dispatch({type:'CHANGE_ISLOADING',value:false});
            dispatch({type:'CHANGE_ISLOGIN',value:true});
            dispatch({type:'CHANGE_USER',value:dataUser});
            resolve(dataUser);
        }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode,errorMessage);
            dispatch({type:'CHANGE_ISLOADING',value:false});
            dispatch({type:'CHANGE_ISLOGIN',value:false});
            reject(false);
        })
    })
    
}

export const addDataToAPI = data => dispatch => {
    database.ref(`notes/${data.userId}`).push({
        title:data.title,
        content:data.content,
        date:data.date
    })
}

export const getDataFromAPI = userId => dispatch => {
    const urlNotes = firebase.database().ref(`notes/${userId}`);
    return new Promise((resolve,reject) => {
        urlNotes.on('value', function(snapshot) {
            // updateStarCount(postElement, snapshot.val());
            // console.log('get data',snapshot.val());
            const dataNotes =[];

            Object.keys(snapshot.val()).map(key => {
                dataNotes.push({
                    id:key,
                    data:snapshot.val()[key]
                })
            })
            dispatch({type:'SET_NOTES',value:dataNotes});
            resolve(snapshot.val());
        });
    })
}

export const updateDataFromAPI = data => dispatch => {
    const urlNotes = firebase.database().ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve,reject) => {
        urlNotes.set({
            title:data.title,
            content:data.content,
            date:data.date
        },(e)=>{
            if(e){
                reject(false);
            }else{
                resolve(true);
            }
        });
    })
}

export const deleteDataFromAPI = data => dispatch => {
    const urlNotes = firebase.database().ref(`notes/${data.userId}/${data.noteId}`);
    return new Promise((resolve,reject) => {
        urlNotes.remove();
    })
}