import styles from "../styles/PizzaList.module.css"
import PizzaCard from "../components/PizzaCard"

import React from 'react'

function PizzaList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>BEST PIZZA IN THE CITY !</h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer lacus tortor, dictum ut odio sed, luctus mollis mi. 
        Fusce dignissim neque sit amet dictum efficitur. 
        Vestibulum eros quam, vestibulum vel viverra et, pulvinar a nulla. 
        Aliquam erat volutpat.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList