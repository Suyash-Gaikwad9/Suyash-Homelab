// App.jsx
import { useState, useEffect } from "react";
import "./App.css";

const images = [
  "IMG_6456.jpg",
  "IMG_6554.jpg",
  "IMG_6975.jpg",
  "IMG_6984.jpg",
  "IMG_7041.jpg",
  "IMG_7217.jpg",
  "IMG_7483.jpg",
  "IMG_7640.jpg",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]); // Initialize with the first image

  useEffect(() => {
    setSelectedImage(images[currentIndex]); // Update selected image when currentIndex changes
  }, [currentIndex]);


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container">
      <h1>🇹🇼 Taiwan Memories (2023-2024)</h1>
      <p>Exceptional pictures captured during my Taiwan visit!</p>

      <div className="content">
        <div className="gallery">
          {images.map((img, index) => (
            <img
              key={index}
              src={`/assets/images/${img}`}
              alt={`Taiwan Image ${index + 1}`}
              onClick={() => handleThumbnailClick(index)} // Corrected click handler
              className={currentIndex === index ? "active" : ""}
            />
          ))}
        </div>

        <div className="preview">
          <button className="prev" onClick={prevImage}>❮</button>
          <img src={`/assets/images/${selectedImage}`} alt="Selected View" /> {/* Use selectedImage state */}
          <button className="next" onClick={nextImage}>❯</button>
        </div>
      </div>
    </div>
  );
}

export default App;
