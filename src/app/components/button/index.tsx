import React from "react";
import { IProps } from "./interface";

export default function Button(props: IProps) {
  return <button>{props.title}</button>;
}
