import { Carousel } from "flowbite-react";

export function CarouselsHome() {
	return (
		<div className="container mx-auto grid grid-cols-5 gap-10">
			<div className="col-span-3 h-[20rem]">
				<Carousel>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
				</Carousel>
			</div>
			<div className="col-span-2 pt-[2.5rem]">
				<Carousel className="h-[15rem]">
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
					<img
						src="https://www.punto-informatico.it/app/uploads/2022/01/blockbuster-rinascita-futuro-servizio-metaverso-nuovo-nemico-netflix-2120x848.jpeg"
						alt="..."
					/>
				</Carousel>
			</div>
		</div>
	);
}
