import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions/addtodo'

class EditTodo extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:this.props.match.params.id,
            todo:this.props.todo[0].todo
        }
    }

    onInputChange = (e) => {
        const todo = e.target.value;
        this.setState({
            todo : todo
        })
    }

    editTodo = (e) => {
        e.preventDefault()
        const todo={
            id: this.state.id,
            todo: this.state.todo
        }
        this.props.editTodo(todo);
    }
     render(){
         const id = this.props.match.params.id
         console.log(this.props.todo)
         console.log(this.props.todo[0].todo)

         return(
             <div>
                 <input onChange={this.onInputChange} value={this.state.todo}/>
                 <button onClick={this.editTodo}>Submit</button>
             </div>
         )
     }
}

const MapStateToProps = (state,ownProps) =>({
    todo : state.list.filter((item) => item.id === ownProps.match.params.id)
})

const MapDispatchToProps = {
    editTodo : editTodo
}

export default connect(MapStateToProps, MapDispatchToProps) (EditTodo)
