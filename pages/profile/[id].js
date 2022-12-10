import axios from 'axios'
import styles from '../../styles/Produto.module.css'
import Navbar from '../components/Navbar.component'
import Footer from '../components/Footer.component'
import Head from 'next/head'

function Profile({products}) {
  return (
    <div className={styles.allproduto}>
      <Head>
        <title>{products.title} - Loja TÁBOM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={styles.bodyprod}>
        <div className={styles.imgprod}><img src={products.image} /></div>
        <div className={styles.dadosprod}>
          <h1>{products.title}</h1>
          <p>{products.description}</p>
          <p> ★ {products.rating.rate}</p>
          <p> R$ {products.price}</p>
          <p> Itens disponíveis: {products.rating.count}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const response = await axios.get(
    "https://fakestoreapi.com/products/" + context.params.id
  );

  const products = await response.data;
  console.log(products);
  return {
    props: {products}
  }
}

export async function getStaticPaths() {

  const response = await axios.get(
    "https://fakestoreapi.com/products"
  )
  const products = await response.data;

  const paths = products.map(product => ({
      params: {id: (product.id).toString() },
  }))
  return {
    paths,
    fallback: true,
  };
}

export default Profile;