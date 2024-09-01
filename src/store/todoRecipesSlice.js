import { createSlice } from '@reduxjs/toolkit'

const todoRecipesSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    /*сюда пишем все взаимодействия */
    reducers: {
        addRecipe(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text, /*здесь он понимает, что именно этот экшен принимает данные и срабатывает */
                completed: false,
            })
        },
        removeRecipe(state, action) {},
        toggleRecipeComplete(state, action) {},

    }
})

export const { addRecipe, removeRecipe, toggleRecipeComplete } = todoRecipesSlice.actions;

export default todoRecipesSlice.reducer; /* из  набора методов reducers формируется один reducer эту сущность и надо подключить в стор index.js*/