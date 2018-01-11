import uuid from 'uuid/v1'
import superagent from 'superagent';

let API = `${__API_URL__}records`;

export const noteInitialize = () => dispatch => {

    superagent.get(API)
        .then(res => dispatch(initAction(res.body)) )
        .catch(console.error);

}

export const noteCreate = payload => dispatch => {

    // payload._id = uuid();
    superagent.post(API)
        .send(payload)
        .then(res => dispatch(createAction(res.body)) )
        .catch(console.error);

};

// export const todoUpdate = payload => dispatch => {

//     let URL = `${API}/${payload._id}`;

//     superagent.put(URL)
//         .send(payload)
//         .then(res => dispatch(updateAction(res.body)) )
//         .catch(console.error);

// }

// export const todoDelete = payload => dispatch => {

//     dispatch( deleteAction(payload) );

// }

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

export const noteDelete = note => ({
  type: 'DELETE',
  payload: note
});