import Footer from "../header/footer";
import Header from "../header/header";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => (
  <div className="">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
