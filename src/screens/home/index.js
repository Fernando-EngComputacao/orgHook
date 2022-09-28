import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Produtores from "./components/Produtores";

import Topo from './components/Topo';

export default function Home(){

    return <>
        <Produtores topo={Topo} />
    </>
}