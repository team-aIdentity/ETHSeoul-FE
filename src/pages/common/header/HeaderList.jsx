import { Link } from "react-router-dom";

export const Title = [
  {
    title: "Pre-Order",
    to: "/preorder",
  },
  {
    title: "Fandom",
    to: "/shop/0",
  },
  {
    title: "Notice & Event",
    to: "/nande",
  },
];

export const SubTitle = [
  {
    title: "concert",
    to: "/shop/1",
  },
  {
    title: "performance",
    to: "/shop/2",
  },
  {
    title: "celebrity",
    to: "/shop/3",
  },
];

export const User = [
  {
    title: "My Page",
    to: "/mypage",
    icon: "bx bxs-user",
  },
  {
    title: "Cart",
    to: "/user/cart",
    icon: "bx bxs-cart-alt",
  },
  {
    title: "Login",
    to: "/user/login",
    icon: "bx bxs-lock",
  },
];

export default function HeaderList(props) {
  return (
    <ul className={props.className}>
      {props.arr.map((value, index) => (
        <li key={index}>
          <Link to={value.to}>
            {value.icon && <i className={value.icon} />}
            {value.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
