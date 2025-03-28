function CarouselNavigation () {
	return(
		
		<div className="mt-8 flex justify-between items-center">
				<div className="flex gap-3">
					<button id="btn-left" className="flex items-center justify-center bg-white p-4 rounded-[6px] text-[18px] shadow-xl transition active:bg-skyblue">
						<img src={`${process.env.PUBLIC_URL}/images/slider-left.svg`} alt="Left" />
					</button>
					<button id="btn-right" className="flex items-center justify-center bg-white p-4 rounded-[6px] text-[18px] shadow-xl transition active:bg-skyblue">
						<img src={`${process.env.PUBLIC_URL}/images/slider-right.svg`} alt="Right" />
					</button>
				</div>
               <div className="font-bold leading-7 text-navy text-xl hover:text-skyblue">
					<a href="#">See all Airports</a>
			   </div>
        </div>

	);
}
export default CarouselNavigation;