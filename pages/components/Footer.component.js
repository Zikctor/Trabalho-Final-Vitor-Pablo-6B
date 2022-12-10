import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export default function Navbar (){
  return <div className={styles.bottom}>
    
    <p><span>TÁBOM</span> criada por Vitor Hayashi Barreto</p>
    <p>©2022 Todos os direitos reservados</p>

  </div>
}