import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import { getCurrentUserName } from "../../redux/currentUser/currentUser-selectors";

const PrivateRoute = ({ children }) => {
  const username = useSelector(getCurrentUserName);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    username ? setIsLogin(true) : Router.push("/");
  }, [username]);

  return <>{isLogin && children}</>;
};

export default PrivateRoute;
