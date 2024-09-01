import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = 1
const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`

export const apiSlice = createApi({
  reducerPath:
    'apiSlice' /* путь в Redux Store, где будет храниться состояние, управляемое API Slice */,
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getAllCategories: builder.query({
      /*определение различных эндпоинтов (запросов и мутаций) для API */
      query: () =>
        'categories.php' /* эндпоинт, определённый как запрос (query). Он отправляет запрос на categories.php для получения всех категорий. */
    }),
    getCategoryRecipes: builder.query({
      query: name =>
        `filter.php?c=${name}` /*name используется для формирования части URL, чтобы получить рецепты для определённой категории. 
      Нужно будет передавать параметром */
    }),
    getOneRecipe: builder.query({
      query: id => `lookup.php?i=${id}`
    })
  })
})

// Экспортируем хуки для использования в компонентах
export const {
  useGetAllCategoriesQuery,
  useGetCategoryRecipesQuery,
  useGetOneRecipeQuery
} = apiSlice

//Переделала из axios
// //Все категории
// const getAllCategories = async () => {
//     const response = await axios.get(API_URL + 'categories.php');
//     return response.data.categories
// };

// // получить рецепты категории
// const getCategoryRecipes = async (name) => {
//     const response = await axios.get(API_URL + 'filter.php?c=' + name);
//     return response.data.categories
// };

// // получить один рецепт по id
// const getOneRecipe = async (id) => {
//     const response = await axios.get(API_URL + 'lookup.php?i=' + id);
//     return await response.json();
// };

// export {getAllCategories, getCategoryRecipes, getOneRecipe};
