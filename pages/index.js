import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from './components/Navbar.component'
import Footer from './components/Footer.component'
import Link from 'next/link'

export default function Home (){
  return <div className={styles.wview}>
    <Head>
      <title>Loja TÁBOM - Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={styles.ctasection}>
    <Navbar />
      <div className={styles.ctabox}>
        <h1 className={styles.title}>O QUE NÃO É RUIM É TÁBOM!</h1>
        <p className={styles.tinydesc}>
          Satisfação nossa é poder oferecer o melhor de tudo para compradores que prezam pela qualidade,
          satisfazendo assim nossos clientes: "Uau! Tá ótimo! TÁBOM!"
        </p>
        <Link href='/listaProdutos' as='/listaDeProdutos' className={styles.ctabtn}>CONFIRA</Link>
      </div>
    </main>
    <img className={styles.topimg} src="https://img.freepik.com/premium-photo/bill-shopping-cart-floating-purple-background-with-smartphone-shop-store-online-concept-cartoon-minimal-discount-promotion-sale-banner-website-3d-render-illustration_598821-1257.jpg?w=2000" alt="representação abstrata de loja online" />
    <section id="descricao" className={styles.descone}>
      <h2>SAIBA O QUE FAZ A TÁBOM SER O QUE É</h2>
      <img src="https://png.pngtree.com/illustrations/20190322/ourmid/pngtree-business-office-office-meeting-blue-png-image_35835.jpg" alt="alvo" />
      <div>
        <h3>Alvo Fixo</h3>
        <p>
          O que faz a loja existir é a necessidade das pessoas em querer investir em algo que supra a sua 
          necessidade com excelência. Por isso, em nosso time temos profissionais e empresas compromissados 
          para atender a qualquer demanda possível para nós.
        </p>
      </div>
    </section>
    <section className={styles.desctwo}>
      <div>
        <h3>Confiabilidade</h3>
        <p>
          Nossos produtos passam por um processo de revisão rígido para garantir a sua qualidade, sem que 
          isso afete também a sua disponibilidade para a compra. A mesma coisa vale para a segurança dos 
          dados e dinheiro dos nossos clientes, que são bem protegidos contra olhos indesejados.
        </p>
      </div>
      <img src="https://i.pinimg.com/736x/a7/69/c2/a769c20187fe29c6dca1c787867d333c.jpg" alt="aperto de mão confiável" />
    </section>
    <section className={styles.descthree}>
      <img src="https://img.freepik.com/premium-photo/3d-bullet-train-purple-sky-train-transport-pastel-purple-background-high-speed-rail-transport_576429-1311.jpg" alt="trem" />
      <div>
        <h3>Entrega</h3>
        <p>
          A nossa loja faz o máximo para que você receba o produto no local de destino o mais rápido possível, 
          com direito a reembolso caso a entrega ultrapasse o tempo limite de entrega. O cliente também poderá 
          rastrear seu pedido, recebendo atualizações sobre o mesmo.
        </p>
      </div>
    </section>
    <Footer />
  </div>
}