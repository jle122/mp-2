import styled from "styled-components";
import Drinks from "./components/DrinkListContents";
import {useState, useEffect} from "react";
import type {Drink} from "./interfaces/Drink";

const AllDiv=styled.div`
  color:blue;
  background-color: blue;
`

export default function App() {
  const [d, setD] = useState<Drink[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
      const {drinks} : {drinks: Drink[]} = await data.json();
      setD(drinks);
    }
    fetchData()
    .then(() => console.log("successful call"))
    .catch((e: Error) => console.log("error:" + e));
  }, [d.length]);

  return (
    <AllDiv>
      <Drinks data={d}/>
    </AllDiv>
  )

}
