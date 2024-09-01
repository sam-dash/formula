import styles from './RecipesItem.module.css'

export const RecipesItem = ({ img, name }) => {

    return (
        <>
            <div className={styles.recipe}>
                <img src={img} alt={name} className={styles.recipeImage} />
                <title className={styles.recipeTitle}>{name}</title>
            </div>
        </>
    )
}