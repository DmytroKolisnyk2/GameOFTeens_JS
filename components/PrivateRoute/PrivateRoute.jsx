import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import { getCurrentUserName } from "../../redux/currentUser/currentUser-selectors";

const PrivateRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const username = useSelector(getCurrentUserName);

  useEffect(() => {
    username ? setIsLogin(true) : Router.push("/");
  }, [username]);

  // useEffect(() => {
  //   username ? setIsLogin(true) : Router.push("/");
  // }, [username]);

  return <>{isLogin && children}</>;
};

export default PrivateRoute;
