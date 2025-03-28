import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

import AirportCard from '../AirportCart/AirportCard';
import airports from '../../airports.json';

export default function AirportSlider() {
  return (
    <Swiper
      modules={[FreeMode, Navigation]}
      spaceBetween={24}
      slidesPerView={4}
      navigation={{
        nextEl: '#btn-right',
        prevEl: '#btn-left',
      }}
	  breakpoints={{
       
        0: {
          slidesPerView: 2,
        },
		850:{
			slidesPerView: 3,
		},
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {airports.map((airport, index) => (
        <SwiperSlide key={airport.id || index}>
          <AirportCard
            image={airport.image}
            title={airport.title}
            city={airport.city}
            price={airport.price}
            currency={airport.currency}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
