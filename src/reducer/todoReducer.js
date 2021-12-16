
//initial data of state
const initialData = {
    list : [],
    tempItemList : [] 
}
const todoReducer = (state=initialData, action) => {
    //switch use for multiple action    
    switch (action.type) {
        case "ADD_TODO":

        //destructure id and data from addtodo
        const {id , data, isChecked} = action.payload;
        if(data === ""){
            alert("fill the data");
            return state
        }
        return{
            ...state,
            list: [
                ...state.list, 
                {
                    id,
                    data, 
                    isChecked,
                    

                }
            ],
            tempItemList: [
                ...state.tempItemList,
                action.payload
            ],
        }

        case "EDIT_TODO":
            return{
                list : state.list
            }
        case "UPDATE_TODO":
            console.log("data", action.data)
            return {
                ...state,
                list : state.list.map((elem) =>elem.id === action.id ? {...elem, data : action.data, editing: false} : elem)
        }
            

        // case "EDIT_TODO":
        //     const editList = state.list.filter((elem) => elem.id === action.id)
        //     const updateList = state.list.filter((elem) => elem.id !== action.id)
        //     console.log("editList", editList[0].data)
        //     return{...state, list : updateList, isEditing: true, inputValue : editList[0].data}

        case "DELETE_TODO":

        const newList= state.list.filter((elem) => elem.id !== action.id);
        const tempItemList= state.tempItemList.filter((elem) => elem.id !== action.id) 

        return{
            ...state,
            list : newList,
            tempItemList: tempItemList
        }

        case "REMOVE_TODO": return{
            ...state,
            list : []
        }

        case "CHECKEDITEM":
         let index = action.index;
         let tempList = [...state.list];
         tempList[index]= {
             ...tempList[index],
            isChecked: !tempList[index].isChecked,       
        };
        return{
        ...state,
        list : [...tempList],
        tempItemList :[...tempList]
    }
        
        
        case "CHECKED":
            return{
                ...state,
                list : state.tempItemList.filter(elem => elem.isChecked === true)
            }

        case "UNCHECKED":
            return{
                ...state,
                list: state.tempItemList.filter(elem => elem.isChecked !== true)
            }
        
        case "SHOW_ALL":
            return{
                ...state,
                list : state.tempItemList
            }

        default: return state;
    }

}

export default todoReducer;

