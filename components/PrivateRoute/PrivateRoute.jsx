import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useRouter } from "next/router";
import { getCurrentUserName } from "../../redux/currentUser/currentUser-selectors";
import { getUserById } from "../../redux/users/user-selectors";
import { addCurrentUser } from "../../redux/currentUser/currentUser-actions";
import { useDispatch } from "react-redux";

const PrivateRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const { query } = useRouter();
  const username = useSelector(getCurrentUserName);
  const userData = useSelector(getUserById(query.userId));

  const dispatch = useDispatch();

  useEffect(() => {
    userData ? dispatch(addCurrentUser(userData)) : null;
    userData || username ? setIsLogin(true) : Router.push("/");
  }, [username]);

  // useEffect(() => {
  //   username ? setIsLogin(true) : Router.push("/");
  // }, [username]);

  return <>{isLogin && children}</>;
};

export default PrivateRoute;
