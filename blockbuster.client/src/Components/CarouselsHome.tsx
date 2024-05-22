import { Carousel } from "flowbite-react";

export function CarouselsHome() {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <Carousel>
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
        </Carousel>
      </div>
      <div className="col-span-1">
        <Carousel className="h-[20rem]">
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
          <img src="https://www.focus.it/site_stored/imgs/0004/027/corbis_42-19748562.1020x680.jpg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
}
