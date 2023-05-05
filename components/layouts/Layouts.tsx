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
      <main className="w-[95%] justify-self-center flex flex-col gap-[15px]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layouts;
