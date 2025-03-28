import SectionTitle from './components/SectionTitle/SectionTitle';
import CarouselNavigation from './components/CarouselNavigation/CarouselNavigation';

import AirportSlider from './components/AirportSlider/AirportSlider';


function App() {
  return (
    
	<section className="top-destinations pt-[204px] pb-[108px] bg-[#f6f7f6]">
		<div className="container max-w-[1280px] mx-auto px-8">

    	<SectionTitle />

		<AirportSlider />

		<CarouselNavigation/>
		
   		</div>
	</section>
  );
}

export default App;
