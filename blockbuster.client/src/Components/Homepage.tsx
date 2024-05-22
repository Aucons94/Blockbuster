import { Carousel } from "flowbite-react";
import { SearchBar } from "./SearchBar";
import { CarouselsHome } from "./CarouselsHome";
import { CardsShowcase } from "./CardsShowcase";

export function Homepage() {
  return (
    <>
      <div className="container mx-auto mt-10 mb-[10rem] h-[40rem]">
        <Carousel>
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
        </Carousel>
        <SearchBar />
      </div>
      <CarouselsHome />
      <CardsShowcase />
    </>
  );
}
