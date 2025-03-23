function CarouselNavigation () {
	return(
		
		<div className="navigation  mt-[32px] flex justify-between items-center">
				<div className="nav-left  flex gap-3">
					<button id="btn-left" className="nav-btn flex items-center justify-center bg-white p-4 rounded-[6px] text-[18px] cursor-pointer shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.8)] transition-all duration-200 ease-in-out active:bg-skyblue">
						<img src="images/slider-left.svg"/>
					</button>
					<button id="btn-right" className="nav-btn flex items-center justify-center bg-white p-4 rounded-[6px] text-[18px] cursor-pointer shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.8)] transition-all duration-200 ease-in-out active:bg-skyblue">
						<img src="images/slider-right.svg"/>
					</button>
				</div>
               <div className="nav-right">
					<a href="#" className="see-all inline-block font-bold leading-7 text-[#192234] no-underline text-[20px]">See all Airports</a>
			   </div>
        </div>

	);
}
export default CarouselNavigation;