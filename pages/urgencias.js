import Head from "next/head";
import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Clinico0 from "../components/camas/Clinico0";

export default function Urgencias () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ClientOnly>
          <Clinico0 />
        </ClientOnly>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}