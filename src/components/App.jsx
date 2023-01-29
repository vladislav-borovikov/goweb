import './App.css';
import { Header } from "./pagesections/Header/Header"
import { Home } from "./pagesections/Home/Home";
import { About } from "./pagesections/About/About";
import { Cases } from "./pagesections/Cases/Cases";
import { Blog } from "./pagesections/Blog/Blog";
import { Contacts } from "./pagesections/Contacts/Contacts";
import { Form } from './pagesections/Form/Form';
import { Footer } from './pagesections/Footer/Footer';


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
        <Form />
      </main>

      <Footer />

    </>



  );
};
