import React, { useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSumbit = ( e ) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( (lastValue) => [inputValue, ...lastValue] );
            setinputValue('');
        } else {
            alert("Nombre no válido");
        }
    }

    return (
        <form onSubmit={handleSumbit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />   
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
