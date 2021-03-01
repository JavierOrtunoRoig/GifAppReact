import React, {useState} from 'react'
import AddCategory from './components/AddCategory.jsx';
import GifGrid from './components/GifGrid.jsx';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>GifExpertApp</h2>   
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr/>

            <ol>
                { 
                    categories.map( element => (
                        <GifGrid
                            category={element}
                            key={element}
                        />
                    ))
                 }
            </ol>
        </>
    )
}

export default GifExpertApp
