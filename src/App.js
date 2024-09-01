import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
// import { useGetOneRecipeQuery } from './store/apiSlice'
// Путь к вашему файлу с API Slice

function App () {
  // Получаем один рецепт
  // const {
  //   // data: recipe,
  //   error: recipeError,
  //   isLoading: isLoadingRecipe
  // } = useGetOneRecipeQuery('4')

  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

export default App
