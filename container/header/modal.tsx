import React from "react";
import InputSearch from "../../components/input/inputSearch";

interface Props {
  Status: number;
}

export default function ModalBurger({ Status }: Props) {
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
