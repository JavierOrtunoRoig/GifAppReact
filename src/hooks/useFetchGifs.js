import { useState, useEffect } from "react";
import getGifs from "../helper/getGifs";

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]); // ComponentDivMount de una clase. Lo que hay entre corchetes son las depencias, en este caso, al pasarle el category, si cambia, recargará el componente

    return state;
};