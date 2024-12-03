import { useState } from "react";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import './App.css'

const App = () => {
  const [breed, setBreed] = useState("");
  const [imageCount, setImageCount] = useState(1);
  const [images, setImages] = useState([]);

  const handleBreedChange = (selectedBreed) => {
    setBreed(selectedBreed);
  };

  const handleImageCountChange = (count) => {
    setImageCount(count);
  };
    
    const handleFetchImages = async() => {
    if (breed && imageCount) {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/${imageCount}`
      );
      const data = await response.json();
      setImages(data.message);
    }
  };

  return (
    <div className = "box">
      <h1>Dog Image Gallery</h1>
      <BreedSelector onBreedChange = {handleBreedChange} onImageCountChange = {handleImageCountChange} fetchImages = {handleFetchImages}/>
      <ImageGallery images = {images}/>
    </div>
  );
};

export default App