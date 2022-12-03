import React from "react";
import InputSearch from "../../components/input/inputSearch";

interface BugerProps {
  Status: number;
}

interface BagProps {
  Status: boolean;
}

export function ModalBurger({ Status }: BugerProps) {
  if (Status == 1)
    return (
      <div className="global__modal open">
        <div className="space__fixed"></div>
        <div className="modal_container">
          <InputSearch />
        </div>
        <div className="container__ul">
          <ul className="ul_link">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Only on Apple</li>
            <li>Accesories</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    );
  else if (Status == 2)
    return (
      <div className="global__modal close">
        <div className="space__fixed"></div>
      </div>
    );
  else return null;
}

export function ModalBag({ Status }: BagProps) {
  if (Status == true)
    return (
      <div className="global__bagmodal">
        <div className="empty__bag">
          <span>Your Bag is empty</span>
        </div>
        <div className="container__ul">
          <ul className="ul_ul">
            <li>
              <a className="bag">Bag</a>
            </li>
            <li>
              <a className="save">Saved Items</a>
            </li>
            <li>
              <a className="orders">Orders</a>
            </li>
            <li>
              <a className="account">Account</a>
            </li>
            <li>
              <a className="sign">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    );
  else return null;
}
