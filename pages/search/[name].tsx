import { retrieveEvolutionChain } from "../api/pokemon-evolution-chain";
import { VariationLink } from "../api/types";
import styles from "../../styles/Home.module.css"

const Search = ({
  name,
  evolutionChain,
}: {
  name: string;
  evolutionChain: VariationLink;
}) => {
  return evolutionChain ? (
    <div>
      <main className={styles.main}>
        <h1>Evolution Chain for {name} is :</h1>
        <pre data-testid="evolution-chain">
          {JSON.stringify(evolutionChain, null, 2)}
        </pre>
      </main>
    </div>
  ) : (
    <div>
      <main className={styles.main}>
        <h1>There is no Evolution Chain for {name} </h1>
      </main>
    </div>
  );
};
export default Search;

export async function getServerSideProps({ req }) {
  const currentUrl = req.url;
  const name = currentUrl.split("/").pop();
  //if the value of the retrieveEvolutionChain(String(name)) was saved to blob storage in cloud
  // we wouldn't have had to make the call to this function again here
  const evolutionChain = await retrieveEvolutionChain(String(name));

  return {
    props: {
      name,
      evolutionChain,
    },
  };
}
