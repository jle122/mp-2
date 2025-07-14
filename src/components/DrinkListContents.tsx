import styled from "styled-components";
import type {Drink} from "../interfaces/Drink";

export default function Drinks (props : {data:Drink[]}) {
    return (
        <div>
            {
                props.data.map(
                    (dnk: Drink) => 
                        <div>
                            <h1>{dnk.strDrink}</h1>
                            <p>{dnk.idDrink}</p>
                            <p>{dnk.strGlass}</p>
                        </div>
                )
            }
        </div>
    );
}