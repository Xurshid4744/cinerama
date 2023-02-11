import { Link, NavLink } from "react-router-dom";
import logo from "assets/images/logo.png";
import { pages } from "./helpers";
import style from "./index.module.scss";
import ButtunSmall from "UI/Buttons/ButtunSmall/ButtunSmall";
import SearchInput from "UI/Inputs/SearchInput/SearchInput";
import { useGetMeQuery, useLazyLogoutQuery } from "store/endpoints/get-me";
const Header = () => {
  const { data } = useGetMeQuery();
  const [trigger, { data: logout }] = useLazyLogoutQuery();
  const logOut = () => {
    trigger();
    if (logout?.code === 200) {
      window.location.reload();
    }
  };
  const isLogin = data?.status;
  return (
    <header className={style.header}>
      <section className={` ${style.headerContainer} container `}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          {pages.map((item) => (
            <NavLink to={item.path} key={item.id}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className={style.actions}>
          <SearchInput />
          {isLogin ? (
            <div className={style.user}>{data?.data?.fullName[0]}</div>
          ) : (
            <Link to={"/auth/sign-in"}>
              <ButtunSmall title={"Войти"} />
            </Link>
          )}
          {isLogin && <p onClick={logOut}>logout</p>}
        </div>
      </section>
    </header>
  );
};

export default Header;
