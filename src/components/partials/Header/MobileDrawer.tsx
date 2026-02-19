import { menuItems } from "@/constants";
import { Drawer } from "antd";
import Link from "next/link";

interface MenuItem {
  label: string;
  child?: MenuItem[];
}

interface MobileDrawerProps {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}

export const MobileDrawer = ({
  mobileOpen,
  setMobileOpen,
}: MobileDrawerProps) => {
  return (
    <Drawer
      placement="left"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
    >
      <ul className="space-y-4">
        {menuItems.map((item: MenuItem, index: number) => (
          <li key={index}>
            <Link href="#" className="font-semibold">
              {item.label}
            </Link>

            {item.child && (
              <ul>
                {item.child.map((childItem: MenuItem, i: number) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="my-2 ml-4 block text-sm text-secondary hover:text-primary"
                    >
                      {childItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Drawer>
  );
};
