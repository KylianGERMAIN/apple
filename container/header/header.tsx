import React from "react";
import { AiFillApple } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import ModalBurger from "./modal";

const navigation = [
  { name: "Store", href: "/store" },
  { name: "Mac", href: "/mac" },
  { name: "iPad", href: "/ipad" },
  { name: "iPhone", href: "/iphone" },
  { name: "Watch", href: "/watch" },
  { name: "AirPods", href: "/airpod" },
  { name: "Tv & Home", href: "/tb-home" },
  { name: "Only on Apple", href: "/services" },
  { name: "Accessorie", href: "/accessories" },
  { name: "Support", href: "/support" },
];

export default function Header() {
  const [burger, setBurger] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 833 && burger === 1) {
        setBurger(0);
      }
    });
  }, [burger]);

  return (
    <div
      className={
        burger === 1
          ? "global__nav_open"
          : burger === 2
          ? "global__nav_close"
          : "global__nav"
      }
    >
      <ModalBurger Status={burger} />
      <div className="center big__nav">
        <ul className="container">
          <li>
            <a className="logo apple__logo" href={""}></a>
          </li>
          {navigation.map((element: any, key: any) => (
            <li className="" key={key}>
              <a href={element.href}>
                <span>{element.name}</span>
              </a>
            </li>
          ))}
          <li>
            <a className="logo search__logo" href={""}></a>
          </li>
          <li>
            <a className="logo basket__logo" href={""}></a>
          </li>
        </ul>
      </div>

      <div className="center little__nav">
        <ul className="container">
          <li>
            <a
              className={
                burger == 0
                  ? "burger__noanimation burger"
                  : burger == 1
                  ? "burger__animation burger"
                  : "burger__invaniamtion burger"
              }
              onClick={() => {
                if (burger == 0 || burger == 2) setBurger(1);
                else {
                  setBurger(2);
                  setTimeout(function () {
                    setBurger(0);
                  }, 500);
                }
              }}
            >
              <span className="span__relative"></span>
              <span className="span__relative"></span>
            </a>
          </li>
          <li>
            <a className="logo apple__logo" href={""}></a>
          </li>
          <li>
            <a className={burger != 1 ? "logo basket__logo" : ""} href={""}></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
