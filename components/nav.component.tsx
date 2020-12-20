/***********************
  Nav Component
 ***********************/

import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = (props) => {
  const router = useRouter();
  const menu = [
    {
      title: "Home",
      url: "/",
      section: "navbar",
    },
    {
      title: "Portfolio",
      url: "",
      section: "projects",
    },
    // {
    //   title: "Contact",
    //   url: "/contact",
    // },
  ];

  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            HERO
            <strong>SONY</strong>
          </p>

          <Menu
            theme="light"
            mode="horizontal"
            // defaultSelectedKeys={["1"]}
            // selectedKeys={["1"]}
            className="menu"
          >
            {menu.map((item) => (
              <Menu.Item
                className={
                  item.url === router.pathname ? "ant-menu-item-selected" : ""
                }
              >
                {/* <Link href={item.url}>{item.title}</Link> */}
                <a href={`#${item.section}`}>{item.title}</a>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Nav;
