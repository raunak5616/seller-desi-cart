import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/sellerAuth.context";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Orders", href: "/orders" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { isSellerAuth, logout } = useAuth();
  const navigate = useNavigate();

  return (
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
              <span className="material-symbols-outlined">moped</span>
              DesiCart Seller
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden sm:ml-8 sm:flex space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={classNames(
                    "rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                  )}
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

            {/* PROFILE MENU */}
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="profile"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                {isSellerAuth ? (
                  <>
                    <MenuItem>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => navigate("/profile")}
                      >
                        Profile
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          logout();
                          navigate("/login");
                        }}
                      >
                        Logout
                      </button>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => navigate("/")}
                    >
                      Login
                    </button>
                  </MenuItem>
                )}
              </MenuItems>
            </Menu>
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
          <div className="space-y-1 px-3 py-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="button"
                onClick={() => navigate(item.href)}
                className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}
