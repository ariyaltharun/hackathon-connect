import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button, 
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Avatar,
} from "@nextui-org/react";
import { csrftoken } from "./utils";


export default function NavBar() {
  const logout = async (e) => {
    await fetch('/users/logout/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken
      },
      mode: 'same-origin'
    })
  }
  
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        {/* TODO: AddLogo */}
        <p className="font-bold text-inherit">HackathonConnect</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/connect">
            Connect
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            PlaceHolder
          </Link>
        </NavbarItem>
      </NavbarContent>
      {
        (window.is_authenticated === 'False') ?
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/users/login/">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/users/register/" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          :
          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Profile</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={logout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
      }
    </Navbar>
  );
}