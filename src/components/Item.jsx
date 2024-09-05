import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {
    return (
        // <li className="list-group-item">{props.foodItem}</li>
        <li className={`${styles['kg-item']}`}><span className={`${styles['kg-span']}`}>{props.foodItem}</span></li>
    )
}

export default Item