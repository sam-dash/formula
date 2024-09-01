import { configureStore } from '@reduxjs/toolkit'
import todoRecipesReducer from './todoRecipesSlice'
import { apiSlice } from './apiSlice'

export default configureStore({// Создаем Redux Store
  reducer: {// Слайсы, срезы
    todos: todoRecipesReducer, // Путь в хранилище для todoRecipesReducer
    [apiSlice.reducerPath]: apiSlice.reducer // Путь в хранилище для apiSlice
  },
  // Это необходимо для обработки запросов, кэширования и других функций RTK Query.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
