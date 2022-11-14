import Image from 'next/image'
import React from 'react'
import styles from "../styles/PizzaCard.module.css"

function PizzaCard() {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width={200} height={200}/>
        <h1 className={styles.title}> FIORI DI ZUCCA</h1>
        <span className={styles.price}>R$40.50</span>
        <p className={styles.desc}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </p>
    </div>
  )
}

export default PizzaCard