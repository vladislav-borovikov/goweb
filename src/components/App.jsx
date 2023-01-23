import './App.css';
import { Header } from "./pagesections/Header"
import { Home } from "./pagesections/Home";
import { About } from "./pagesections/About";
import { Cases } from "./pagesections/Cases";
import { Blog } from "./pagesections/Blog";
import { Contacts } from "./pagesections/Contacts";
import { Footer } from './pagesections/Footer';



export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Cases />
        <Blog />
        <Contacts />
      </main>

      <Footer />
    </>



  );
};
