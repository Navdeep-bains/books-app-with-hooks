export const addTodo = (payload) => ({
    type:"ADD_TODO",
    payload
})

export const deleteTodo = (id) => ({
    type:"DELETE_TODO",
    id
})

export const editTodo = (payload) => ({
    type:"EDIT_TODO",
    payload
})