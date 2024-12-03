import PropTypes from "prop-types";

const ImageGallery = ({images}) => {
    if (!Array.isArray(images) || images.length === 0) {
        return <p>No images to display.</p>;
    }

    return (
        <div className = "gallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Dog ${index + 1}`} className="gallery-image"/>
            ))}
        </div>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;