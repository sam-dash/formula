import styles from "./Skeleton.module.css"

const Skeleton = ({ count = 10 }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={styles.wrapper}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={styles.category}></li>
                    ))}
                </ul>
            ) : (
                <div className={`${styles.category} ${styles.one}`} ></div>
            )}
        </>
    );
};

export default Skeleton;
