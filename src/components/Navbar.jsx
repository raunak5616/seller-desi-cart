import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/sellerAuth.context";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Products", href: "/products" },
  { name: "Orders", href: "/orders" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const anchor = "right";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { isSellerAuth, logout } = useAuth();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawerItems = isSellerAuth
    ? [
      { text: "Settings", icon: <InboxIcon />, path: "/settings" },
      { text: "About", icon: <MailIcon />, path: "/about" },
      { text: "Logout", icon: <MailIcon />, action: "logout" },
    ]
    : [
      { text: "Login", icon: <InboxIcon />, path: "/" },
      { text: "About", icon: <MailIcon />, path: "/about" },
    ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                if (item.action === "logout") {
                  logout();
                  navigate("/");
                } else {
                  navigate(item.path);
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Box>
  );
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
      <Disclosure as="nav" className="bg-white border-b border-gray-200">
        <div className="w-full px-4">
          <div className="relative flex h-16 items-center justify-between">

            {/* MOBILE MENU BUTTON */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
                <Bars3Icon className="block h-6 w-6 data-open:hidden" />
                <XMarkIcon className="hidden h-6 w-6 data-open:block" />
              </DisclosureButton>
            </div>

            {/* LOGO + LINKS */}
            <div className="flex flex-1 items-center justify-center sm:justify-start">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-900">
                <button
                  onClick={toggleDrawer(anchor, true)}
                  className="rounded-md p-2 hover:bg-gray-100"
                >
                  ☰
                </button>
                <span className="material-symbols-outlined">moped</span>
                DesiCart Seller
              </div>

              {/* DESKTOP LINKS */}
             <div className="hidden sm:ml-8 sm:flex space-x-1">
  {isSellerAuth &&
    navigation.map((item) => (
      <button
        key={item.name}
        onClick={() => navigate(item.href)}
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
      >
        {item.name}
      </button>
    ))}
</div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

              {/* NOTIFICATION */}
              <button className="rounded-md p-2 text-gray-700 hover:bg-gray-100">
                <BellIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE PANEL */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
        >
          <DisclosurePanel className="sm:hidden border-t border-gray-200">
            <div className="hidden sm:ml-8 sm:flex space-x-1">
  {isSellerAuth &&
    navigation.map((item) => (
      <button
        key={item.name}
        onClick={() => navigate(item.href)}
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
      >
        {item.name}
      </button>
    ))}
</div>
          </DisclosurePanel>
        </Transition>
      </Disclosure>
    </>
  );
}
