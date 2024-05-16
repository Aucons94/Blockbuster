import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../assets/media/Blockbuster_logo.svg";

export function NavigationBar() {
	const isLogged = false;
	return (
		<div className="relative bg-block-blue z-50">
			<Navbar fluid className="container mx-auto bg-block-yellow rounded-full pb-1">
				<Navbar.Brand>
					<img
						src={logo}
						className="absolute top-2 drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)] max-w-[23rem]"
						alt="Blockbuster Logo"
					/>
				</Navbar.Brand>
				<div className="flex md:order-2">
					{isLogged ? (
						<Dropdown
							arrowIcon={false}
							inline
							label={
								<Avatar
									alt="User settings"
									img="https://media.licdn.com/dms/image/D4D35AQHBKG36qZVW9A/profile-framedphoto-shrink_200_200/0/1708789289532?e=1716368400&v=beta&t=BD88QYgiGDZIMQ2XCzn0Dl038q8PMjh6I4ZgdQRMcnk"
									rounded
								/>
							}>
							<Dropdown.Header>
								<span className="block text-sm">Marco Mandorlini</span>
								<span className="block truncate text-sm font-medium">porcaccia@gmail.com</span>
							</Dropdown.Header>
							<Dropdown.Item>Dashboard</Dropdown.Item>
							<Dropdown.Item>Settings</Dropdown.Item>
							<Dropdown.Item>Earnings</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>Sign out</Dropdown.Item>
						</Dropdown>
					) : (
						<a href="/login" className="text-block-blue font-['blockfont'] text-xl">
							Login
						</a>
					)}
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Navbar.Link href="#" className="text-block-blue font-['blockfont'] text-xl ">
						Porn
					</Navbar.Link>
					<Navbar.Link href="#" className="text-block-blue font-['blockfont'] text-xl mx-4">
						Adult
					</Navbar.Link>
					<Navbar.Link href="#" className="text-block-blue font-['blockfont'] text-xl">
						Hentai
					</Navbar.Link>
					<Navbar.Link href="#" className="text-block-blue font-['blockfont'] text-xl mx-4">
						ThreeSome
					</Navbar.Link>
					<Navbar.Link href="#" className="text-block-blue font-['blockfont'] text-xl">
						Contact
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
