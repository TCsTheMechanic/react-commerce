import React from 'react';

import { CarrouselContent, CarrouselItem } from './carrouselStyles';

const Carrousel: React.FC = () => {
  return (
    <CarrouselContent>
      <CarrouselItem />
      <CarrouselItem />
      <CarrouselItem />
      <CarrouselItem />
    </CarrouselContent>
  );
}

export default Carrousel;
