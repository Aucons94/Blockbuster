import { Carousel } from "flowbite-react";
import { SearchBar } from "./SearchBar";
import { CarouselsHome } from "./CarouselsHome";
import { CardsShowcase } from "./CardsShowcase";

export function Homepage() {
	return (
		<>
			<div className="container mx-auto mt-10 mb-[10rem] h-[40rem]">
				<Carousel className="h-[35rem]">
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
				<SearchBar />
			</div>
			<CarouselsHome />
			<CardsShowcase />
		</>
	);
}
