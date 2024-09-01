import styles from './CategoryItem.module.css'

export const CategoryItem = ({ img, name, handleCategoryClick }) => {

    return (
        <div className={styles.card} onClick={()=> handleCategoryClick(name)}>
            <img src={img} alt={name} className={styles.cardImage} />
            <title className={styles.cardTitle}>{name}</title>
        </div>
    )
}