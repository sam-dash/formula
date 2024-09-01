import CategoriesList from '../CategoriesList/CategoriesList'
import RecipesList from '../RecipesList/RecipesList'
import styles from './Main.module.css'
import Slider from './../Slider/Slider';
import { useGetAllCategoriesQuery, useGetCategoryRecipesQuery } from '../../store/apiSlice';
import { useState } from 'react';

export const Main = () => {
    const { data: allCategories, isLoadingCategory } = useGetAllCategoriesQuery()

    const [selectedCategory, setSelectedCategory] = useState('');

    // Получаем данные для выбранной категории
    const { data: categoryRecipes, isLoading: isLoadingRecipes } = useGetCategoryRecipesQuery(selectedCategory || "Beef");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };


    return (
        <main className={styles.header}>
            <nav className={styles.navBar}>
                <Slider>
                    {allCategories && <CategoriesList allCategories={allCategories} isLoading={isLoadingCategory} handleCategoryClick={handleCategoryClick} />}
                </Slider>
            </nav>
            {categoryRecipes && <RecipesList recipes={categoryRecipes} isLoading={isLoadingRecipes} />}
        </main>
    )
}