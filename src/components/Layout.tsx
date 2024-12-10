import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

function Layout({ children }: IProps) {
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatiate</p>
      </div>
      <button>
        <p>Sign up free</p>
        <i className="fa-solid fa-mug-hot"></i>
      </button>
    </header>
  );

  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Caffiend</span> was made by{" "}
        <a href="https://github.com/Rahul8320" target="_blank">
          Rahul
        </a>{" "}
        using the{" "}
        <a href="https://www.fantacss.com/" target="_blank">
          FantaCSS
        </a>{" "}
        design library.
        <br />
        Check out the project on{" "}
        <a href="https://github.com/Rahul8320/Caffiend" target="_blank">
          Github
        </a>
        !
      </p>
    </footer>
  );

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}

export default Layout;
