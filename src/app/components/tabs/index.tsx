import React from "react";

interface IProps {
  title: string;
}

export default function (props: IProps) {
  return <div>{props.title}</div>;
}
