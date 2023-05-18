import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

interface Props {
  children: any;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main style={{ overflow: "hidden" }}>{children}</main>
      <CTA />
      <Footer />
    </>
  );
}
