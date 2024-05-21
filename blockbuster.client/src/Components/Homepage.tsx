import { Carousel } from "flowbite-react";
import { SearchBar } from "./SearchBar";
import { CarouselsHome } from "./CarouselsHome";
import { CardsShowcase } from "./CardsShowcase";

export function Homepage() {
  return (
    <>
      <div className="container mx-auto mt-10 mb-[10rem] h-[40rem]">
        <Carousel>
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHBKG36qZVW9A/profile-framedphoto-shrink_200_200/0/1708789289532?e=1716368400&v=beta&t=BD88QYgiGDZIMQ2XCzn0Dl038q8PMjh6I4ZgdQRMcnk"
            alt="..."
          />
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHBKG36qZVW9A/profile-framedphoto-shrink_200_200/0/1708789289532?e=1716368400&v=beta&t=BD88QYgiGDZIMQ2XCzn0Dl038q8PMjh6I4ZgdQRMcnk"
            alt="..."
          />
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHBKG36qZVW9A/profile-framedphoto-shrink_200_200/0/1708789289532?e=1716368400&v=beta&t=BD88QYgiGDZIMQ2XCzn0Dl038q8PMjh6I4ZgdQRMcnk"
            alt="..."
          />
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHBKG36qZVW9A/profile-framedphoto-shrink_200_200/0/1708789289532?e=1716368400&v=beta&t=BD88QYgiGDZIMQ2XCzn0Dl038q8PMjh6I4ZgdQRMcnk"
            alt="..."
          />
          <img
            src="https://media.licdn.com/dms/image/D4D35AQHBKG36qZVW9A/profile-framedphoto-shrink_200_200/0/1708789289532?e=1716368400&v=beta&t=BD88QYgiGDZIMQ2XCzn0Dl038q8PMjh6I4ZgdQRMcnk"
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
