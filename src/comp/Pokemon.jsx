import { useEffect, useState } from "react";

function Pokemon(props) {
  let [sendRequest, setSendRequest] = useState(false);
  let [getData, setGetData] = useState([]);
  let [image, setImage] = useState();
  let [show, setShow] = useState(false);
  useEffect(() => {
    if (sendRequest) {
      let fetchData = async () => {
        let response = await fetch(props.pokemon.url);
        let json = await response.json();
        setImage(json.sprites.front_default);
        setGetData(json);
      };

      fetchData();
    }
  }, [sendRequest]);

  return (
    <li>
      {props.pokemon.name}{" "}
      <button
        onClick={() => {
          setSendRequest(true);
          setShow(!show);
        }}
      >
        Get data
      </button>
      {show && <p>{getData.weight}</p>}
      {show && <p>{getData.height}</p>}
      {show && <img src={image} alt="" />}
    </li>
  );
}

export default Pokemon;
