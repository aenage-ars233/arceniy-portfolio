import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent } from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/">
      <ReactComponent width={50} height={50} />
    </Link>
  )
}