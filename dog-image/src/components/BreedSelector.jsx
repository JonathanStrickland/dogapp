import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BreedSelector = ({ onBreedChange, onImageCountChange, fetchImages }) => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch("https://dog.ceo/api/breeds/list/all");
            const data = await response.json();
            setBreeds(Object.keys(data.message));
        };

        fetchBreeds();
    }, []);

    const handleSubmit = (i) => {
        i.preventDefault();
        fetchImages();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Breed:
                    <select onChange={(i) => onBreedChange(i.target.value)}>
                        <option value="">Select a Breed</option>
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Number of Images:
                    <input type="number" min="1" max="100" onChange={(i) => onImageCountChange(i.target.value)}/>
                </label>
                <button type="submit">Fetch Images</button>
            </form>
        </div>
    );
};

BreedSelector.propTypes = {
    onBreedChange: PropTypes.func.isRequired,
    onImageCountChange: PropTypes.func.isRequired,
    fetchImages: PropTypes.func.isRequired,
};

export default BreedSelector