import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
   addTask() {
        this.props.onaddTask(this.taskInput.value);
        this.taskInput.value = '';
   }
render() {
    return (
      <div>
          <header>
              <h1 className="Header"> Welcome to TODO LIST</h1>
          </header>
          <section className='wrapper'>
              <ul className='list'>
                  {this.props.testStore.map((task, index) =>
                      <li className="liItem" key={index}>
                          <button className="editBtn"
                                  onClick={() => {
                                      document.querySelectorAll('.editBtn')[index].style.display="none";
                                      document.querySelectorAll('.deleteBtn')[index].style.display="none";
                                      const editInput = document.querySelectorAll('.editInput')[index];
                                      editInput.style.border = "1px solid green";
                                      var currentTask=editInput.placeholder;
                                      editInput.focus();
                                      editInput.placeholder="";
                                      const list = document.querySelectorAll('.liItem')[index];
                                      const saveBtn=document.createElement('button');
                                      saveBtn.className='saveBtn';
                                      saveBtn.textContent= 'Save';
                                      list.appendChild(saveBtn);
                                      saveBtn.onclick=function() {
                                          const editInput = document.querySelectorAll('.editInput')[index];
                                          currentTask=editInput.value;
                                          console.log('saveBtn.onclick');
                                          document.querySelectorAll('.editBtn')[index].style.display="inline";
                                          document.querySelectorAll('.deleteBtn')[index].style.display="inline";
                                          cancelBtn.style.display="none";
                                          saveBtn.style.display="none";
                                          editInput.style.border='none';
                                          editInput.placeholder=currentTask;
                                          editInput.value='';
                                      };
                                      const cancelBtn=document.createElement('button');
                                      cancelBtn.className='cancelBtn';
                                      cancelBtn.textContent= 'Cancel';
                                      list.appendChild(cancelBtn);
                                      cancelBtn.onclick= function() {
                                          console.log('cancelBtn.onclick');
                                          document.querySelectorAll('.editBtn')[index].style.display="inline";
                                          document.querySelectorAll('.deleteBtn')[index].style.display="inline";
                                          cancelBtn.style.display="none";
                                          saveBtn.style.display="none";
                                          const editInput = document.querySelectorAll('.editInput')[index];
                                          editInput.style.border='none';
                                          editInput.value='';
                                          editInput.placeholder=currentTask;
                                      };
                                  }}
                          >
                              edit
                          </button>
                          <button className="deleteBtn"
                                 onClick={() => {
                                      console.log('deleteBtn_key',index);
                                     this.props.ondeleteTask(index);
                                  }}

                          >
                              X
                          </button>
                          <span> <input type='text' className='editInput' placeholder={task.name} /> </span>
                           </li>
                  )}
              </ul>
              <p></p>
              <input type='text' className='taskInput' ref={(input) => { this.taskInput = input; }}/>
              <button className='addTask'onClick={this.addTask.bind(this)}>Add task</button>
          </section>
      </div>
    );
  }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onaddTask: (name) => {
            const payload = {
                id: Date.now().toString(),
                name
            }
            dispatch({type: 'ADD_TASK', payload});
        },
        ondeleteTask: (index) => {
            const payload = index;
            dispatch({type: 'DELETE_TASK', payload});
        },

        oneditTask: (index,name) => {
            const payload = {
                id: index.toString(),
                name
            }
            dispatch({ type: 'EDIT_TASK', payload });
        }
    })
)(App);