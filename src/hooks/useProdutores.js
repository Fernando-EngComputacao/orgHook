import { useState, useEffect } from "react";

import { carregaProdutores } from '../services/carregaDados';

export default function useProdutores() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitle(retorno.title);
        setList(retorno.list);
    }, []);

    return [title, list];
}