import headerStyle from "./Header.module.css";

function Header(abc) {
  return (
    <header>
      <h1 className={headerStyle.heading}>Hello! I am Heading.</h1>
    </header>
  );
}

export default Header;
