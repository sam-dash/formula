import { withSkeleton } from '../helpers/hocs/withSkeleton';
import { RecipesItem } from './RecipesItem/RecipesItem'
import styles from './RecipesList.module.css'

const RecipesList = ({ recipes }) => {


    return (
        <section className={styles.recipesWrapper}>
            {recipes.meals.map((recipe) => <RecipesItem key={recipe.idMeal} img={recipe.strMealThumb} name={recipe.strMeal} />)}
        </section>
    )
}

const RecipesListyWithSkeleton = withSkeleton(RecipesList)

export default RecipesListyWithSkeleton;