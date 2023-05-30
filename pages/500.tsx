import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const ServiceUnavailable: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Service unavailable</title>
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>No Evolution Chain for Pokemon name. Service Unavailable</h3>
      </main>
    </div>
  );
};

export default ServiceUnavailable;
