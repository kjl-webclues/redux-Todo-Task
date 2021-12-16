//data argument pass
export const addTodo = (data) => {
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data : data,
            isChecked: false,
            isEditing : false
            
        }
    }
}

export const editTodo = (id, data) =>{
    return{
        type: "EDIT_TODO",
        id,
        data
        
    }
}

export const updated = (id, data) =>{
    return{
        type: "UPDATE_TODO",
        id,
        data

    }
}

export const deleteTodo = (id) => {
    return{
        type: "DELETE_TODO",
        id
    }
}

export const removeTodo = () => {
    return{
        type: "REMOVE_TODO"
    }
}

export const checkedItem = (index) =>{
    return{
        type: "CHECKEDITEM",
        index
    }
}
export const checked = () =>{
    return{
        type : "CHECKED",
        
    }
}

export const unChecked = () =>{
    return{
        type: "UNCHECKED",
        
    }
}

export const showAll = () =>{
    return{
        type: "SHOW_ALL",
        
    }
}









