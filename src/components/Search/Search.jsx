import { useState } from 'react'
import styles from './Search.module.css'

export const Search = () => {
    const [search, setSearch] = useState('')

    const getValue = (event) => {
        setSearch(event.target.value)
    } 

    return (
        <>
            <label className={styles.searchWrapper}>
                <input type="search" className={styles.search} value={search} onChange={getValue} />
                <button className={styles.searchButton}>
                    <img src="/icon/search.svg" alt="button search" className={styles.imgButton} />
                </button>
            </label>
        </>
    )
}