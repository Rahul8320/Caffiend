import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

function Layout({ children }: IProps) {
  const header = <header></header>;

  const footer = <footer></footer>;

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}

export default Layout;
