import uuid from 'uuid/v1'
import superagent from 'superagent';

let API = `${__API_URL__}/records`;

export const noteInitialize = () => dispatch => {

    superagent
        .get(API)
        .then(res => {
            let arr = res.body;
            for (let i=0; i<arr.length; i++){
                arr[i].content=arr[i]._id
                arr[i].id = arr[i]._id
            }
            dispatch(initAction(arr))
        })
        .catch(console.error);
}

export const noteDelete = (payload) => dispatch => {
    let deleteAPI = `${API}?id=${payload._id}`
    superagent
        .delete(deleteAPI)
        .then(()=>{
            dispatch(deleteAction(payload))
        })
        .catch(err=>console.log(err))
}

const initAction = list => ({
   type: 'INIT',
   payload: list
});

const createAction = note => ({
    type: 'CREATE',
    payload: note   
});

export const noteUpdate = note => ({
  type: 'UPDATE',
  payload: note
});

const deleteAction = note => ({
  type: 'DELETE',
  payload: note
});