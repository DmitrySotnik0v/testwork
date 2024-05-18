import { FC } from "react";

import style from "./User.module.css";

import { Link } from "react-router-dom";

type Props = {
  name: string;
  id: number;
};

const User: FC<Props> = ({ name, id }) => <Link className={style.userName} to={`/users/${id}`}>{name}</Link>;

export default User;
