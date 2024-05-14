import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../src/assets/media/Blockbuster_logo.svg";

export function NavigationBar() {
  return (
    <div className="relative bg-block-blue">
      <Navbar fluid className="container mx-auto bg-block-yellow rounded-full">
        <Navbar.Brand href={logo}>
          <img
            src={logo}
            className="absolute top-2 drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)]"
            style={{ width: "300px" }}
            alt="Blockbuster Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-block-blue">
            Porn
          </Navbar.Link>
          <Navbar.Link href="#" className="text-block-blue">
            Adult
          </Navbar.Link>
          <Navbar.Link href="#" className="text-block-blue">
            Hentai
          </Navbar.Link>
          <Navbar.Link href="#" className="text-block-blue font-['blockfont']">
            ThreeSome
          </Navbar.Link>
          <Navbar.Link href="#" className="text-block-blue">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
