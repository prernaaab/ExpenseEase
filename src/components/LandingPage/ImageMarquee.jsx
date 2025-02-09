import React, { useState, useEffect } from "react";

const ImageMarquee = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        className="flex transition-transform h-full duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="w-full flex-shrink-0 h-full" key={index}>
            <img
              src={image.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full bg-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
