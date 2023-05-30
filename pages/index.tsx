import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const PokemonHome: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon Evolution Chain Finder</title>
      </Head>

      <main className={styles.main}>
        <form
          action="api/pokemon-evolution-chain"
          name="pokemon-evolution-chain"
          method="post"
        >
          <h3 className={styles.title}>Find Pokemon Evolution Chain</h3>
          <label className={styles.label} htmlFor="name">
            Pokemon Name:{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
          ></input>
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </main>
    </div>
  );
};

export default PokemonHome;
