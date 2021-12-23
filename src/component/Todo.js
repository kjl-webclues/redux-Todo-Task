import { Checkbox } from '@material-ui/core';
import React, {useState} from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {addTodo, deleteTodo, editTodo,updated, removeTodo, checked, unChecked, showAll,checkedItem} from '../actions/addtodo';


const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Add Todo</h2>
            <input type="text"
                   placeholder="add taks.."
                   value={inputData}
                   onChange={(event)=> setInputData(event.target.value)}/>

            <button onClick = {() => dispatch(addTodo(inputData), setInputData(''))}>+</button>
            {
                list.map((elem, index) =>{ 
                    return(
                        
                        <div className="eachItem" key={elem.id}>
                            <div>
                                
                                <h3>{elem.editing ? inputData : elem.data}</h3>

                                {elem.editing ? null :
                                    <button onClick={() => dispatch(editTodo(elem.editing = true),setInputData(elem.data))}>Edit</button>}
                                
                                {elem.editing ? <button onClick={() => {
                                    dispatch(updated(elem.id,elem.data = inputData), setInputData(""))}}>Update</button> : null}
                                    
                                <Checkbox checked={elem.isChecked}
                                          onChange={() => { dispatch(checkedItem(index)) }} />                                                                                                                                                  

                                <button onClick = {() => dispatch(deleteTodo(elem.id))}>Delete</button>
                            </div>                                                        
                        </div>                         
                        )                                        
                    })                    
            }                        
            
            <br/><br/>
            <button onClick={() =>dispatch(checked())}>Checked</button>&nbsp;
            <button onClick={() =>dispatch(unChecked())}>Unchecked</button>
            <button onClick={() =>dispatch(showAll())}>All</button>&nbsp;

            <button onClick= {() => dispatch(removeTodo())}>Remove all</button>
            {/* <input type="checkbox" onChange={() => dispatch(checkedItem(elem.isChecked = !elem.isChecked))}/> */}
            {/* <button onClick = {() => dispatch(editTodo(elem.id))}>Edit</button> */}
            {/* <Checkbox type="checkbox"
                        checked={elem.isChecked}
                        onChange={() =>{dispatch(checkedItem(elem.id))}}/> */}
            
        </>  
                
    )
}

export default Todo;

