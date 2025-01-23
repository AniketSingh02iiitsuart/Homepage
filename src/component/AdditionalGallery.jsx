import React from 'react';
import './AdditionalGallery.css';

function AdditionalGallery() {
  return (
    <section className="additional-gallery">
      <h2>Gallery</h2>
      <div className="gallery">
        <img src="https://via.placeholder.com/150" alt="Gallery Item 1" />
        <img src="https://via.placeholder.com/150" alt="Gallery Item 2" />
        <img src="https://via.placeholder.com/150" alt="Gallery Item 3" />
        <img src="https://via.placeholder.com/150" alt="Gallery Item 4" />
      </div>
    </section>
  );
}

export default AdditionalGallery;