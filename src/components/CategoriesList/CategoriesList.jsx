import React, { forwardRef } from 'react';
import styles from './CategoriesList.module.css';
import { CategoryItem } from './CategoryItem/CategoryItem';
import { withSkeleton } from '../helpers/hocs/withSkeleton';

const CategoriesList = forwardRef(({ mouseEnter, mouseLeave, allCategories, handleCategoryClick }, ref) => {

    return (
        <section
            className={styles.cards}
            ref={ref}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {allCategories?.categories.map((category) => (
                <CategoryItem
                    handleCategoryClick={handleCategoryClick}
                    key={category.idCategory}
                    img={category.strCategoryThumb}
                    name={category.strCategory}
                />
            ))}
        </section>
    );
});

const CategoryWithSkeleton = withSkeleton(CategoriesList)

export default CategoryWithSkeleton;