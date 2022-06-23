import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../common/Breadcrumb";

export default function TitleHeader() {
  return (
    <div>
      <Breadcrumb>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"#"}>my house</Link>
          </li>
        </ul>
      </Breadcrumb>
    </div>
  );
}
