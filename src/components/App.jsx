import './App.css';
import { Home } from "./pagesections/Home";
import { About } from "./pagesections/About";
import { Cases } from "./pagesections/Cases";
import { Blog } from "./pagesections/Blog";
import { Contacts } from "./pagesections/Contacts";


export const App = () => {
  return (
    <>
      <Home />
      <About />
      <Cases />
      <Blog />
      <Contacts />
    </>



  );
};
