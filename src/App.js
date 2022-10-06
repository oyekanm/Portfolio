import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SharedLayout from "./Pages/SharedLayout";
import Projects from "./Pages/Projects";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
