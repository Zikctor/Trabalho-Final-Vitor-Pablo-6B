import React from "react"
import axios from "axios"
import styles from '../styles/Lista.module.css'
import Navbar from './components/Navbar.component'
import Footer from './components/Footer.component'
import Link from 'next/link'
import Head from 'next/head'

function Products({ products }) {
  return (
    <div className={styles.lista}>
      <Head>
        <title>Lista de Produtos - Loja TÁBOM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <h1>Lista de Produtos</h1>
      <div className={styles.grade}>
        {products.map((product) => (
          <Link href='/profile/[id]' as={`/profile/${ product.id }`} className={styles.produto} key={product.id}>
            <img src={product.image} />
            <div className={styles.dados}>
              <p> {product.title} </p>
              <p> R$ {product.price} </p>
              <p> ★ {product.rating.rate} </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "https://fakestoreapi.com/products"
  )
  const data = await response.data;
  return {
    props: {products: data}
  }
}

export default Products;
