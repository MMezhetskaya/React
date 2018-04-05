 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Provider} from 'react-redux';
 import {createStore} from 'redux';

 import App from './App';
 import './index.css';

 const initialState=[
     {
         id: Date.now().toString(),
         name: 'first task'
     }
 ];

 function toDoList(state=initialState, action){
     if (action.type === "ADD_TASK") {
         return [
             ...state,
             action.payload
         ];
     }
     else if (action.type==="DELETE_TASK"){
         state.splice (action.payload,1);
         return[...state];
     }
     else if (action.type==="EDIT_TASK"){
         console.log("EDIT_TASK",action.payload.id,action.payload.name)
         state.splice (action.payload.id,1,action.payload);
         console.log ([...state]);
         return [...state];
     }
     else if (action.type==="EDIT_CANCEL"){
         return state;
     }
     return state;
 }

 const store = createStore(toDoList,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 ReactDOM.render(
     <Provider store={store}>
        <App />
     </Provider>,
     document.getElementById('root')
 );
