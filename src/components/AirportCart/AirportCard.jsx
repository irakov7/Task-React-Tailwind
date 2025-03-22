
function AirportCard ({ image, alt, title, price, currency }) {
	return(

	<article className="card swiper-slide w-[286px] h-[440px] rounded-[12px] overflow-hidden flex flex-col justify-between group cursor-pointer">
		<div className="transition-transform duration-300 ease-in-out group-hover:scale-90">
			<img 
			src={image} 
			alt={alt} 
			/>
		</div>
 		<div className="card-text pt-6 font-bold">
			<h3 className="text-[18px] leading-[28px] pb-[16px] text-navy transition-colors duration-300 group-hover:text-skyblue">
			{title}
			</h3>
    		<p className="text-steel text-[16px] leading-[24px]">
				Airport Service Starting <br />
				from <span className="price text-skyblue font-bold">{price} {currency} </span> 
   			</p>
 		</div>
	</article>

	);
}
export default AirportCard;