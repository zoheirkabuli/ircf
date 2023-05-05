interface PropsType {
  children: React.ReactNode | React.ReactNode[];
}

// * components
import Header from './Header';
import Footer from './Footer';

const Layouts = ({ children }: PropsType) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layouts;
