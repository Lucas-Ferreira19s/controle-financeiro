import React from "react";
import ResumoItems from "../resumoItems";
import * as C from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from "react-icons/fa"

const Resumo = ({income, expense, total}) =>{
    return(
        <C.Container>
            <ResumoItems Title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumoItems Title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumoItems Title="Total" Icon={FaDollarSign} value={total} />
        </C.Container>
    )
};

export default Resumo;