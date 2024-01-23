'use client';

import React, { useState } from 'react';

const ProductImages = ({ images }) => {
  const [ index, setIndex ] = useState(0);

  return (
    <div>
      <div className="image-container">
        <img src={ images[index] } alt={ `image-${ index }` } className="product-detail-image"/>
      </div>
      <div className="small-images-container">
        { images?.map((item, i) => (
          <img
            src={ item }
            alt={ `item-${ i }` }
            key={ i }
            className={ i === index ? "small-image selected-image" : "small-image" }
            onMouseEnter={ () => setIndex(i) }
          />
        )) }
      </div>
    </div>
  );
};

export default ProductImages;
