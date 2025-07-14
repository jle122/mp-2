import styled from "styled-components";
import type {Drink} from "../interfaces/Drink";

const AllDrinkDiv=styled.div`
    background-color: lightblue;
    margin-left: 30vw;
    margin-right: 30vw;
    text-align: center;
`

const SingleDrinkDiv=styled.div`
    border: yellow 2px solid;
    padding: 80px;
`

const SmallerH1=styled.h1`
    fontsize: 20px;
    margin: 40px;
`

export default function Drinks (props : {data:Drink[]}) {
    return (
        <AllDrinkDiv>
            {
                props.data.map(
                    (dnk: Drink) => 
                        <SingleDrinkDiv>
                            <SmallerH1>{dnk.strDrink}</SmallerH1>
                            <p>ID: <strong>{dnk.idDrink}</strong></p>
                            <p>Correct Glass: <strong>{dnk.strGlass}</strong></p>
                        </SingleDrinkDiv>
                )
            }
        </AllDrinkDiv>
    );
}