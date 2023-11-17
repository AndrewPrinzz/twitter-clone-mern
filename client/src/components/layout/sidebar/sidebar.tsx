import { SidebarItem } from "./sidebar-item"

function Sidebar() {
  return (
  <nav className="flex flex-col min-w-[15rem]">
    <SidebarItem image="images/icons/home.svg">Home</SidebarItem>
    <SidebarItem image="images/icons/notifications.svg">Notifications</SidebarItem>
    <SidebarItem image="images/icons/premium.svg">Premium</SidebarItem>
  </nav>
  )
}

export {Sidebar}