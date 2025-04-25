import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "@/components/ui/Header";
import { routes } from "@/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
