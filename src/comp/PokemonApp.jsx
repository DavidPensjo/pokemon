import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApp() {
  let [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    let getdata = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      console.log(json.results);

      setPokemons(json.results);
    };
    getdata();
  }, []);
  return (
    <div className="PokemonApp">
     <ul> {pokemons.map((pokemon, index) => (
        <Pokemon key ={index} pokemon={pokemon} />
      ))}</ul>
     
    </div>
  );
}

export default PokemonApp;
