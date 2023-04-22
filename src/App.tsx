import { Routes, Route } from "react-router-dom";
import Page1 from "./components/pages/Page1";

const App = () => {
  return (
    <div className="grid grid-rows-[min-content_1fr] h-[100vh] overflow-hidden">
      <Routes>
        <Route path="/" >
          <Route path="page" element={<Page1 />} />
        </Route>
      </Routes>
    </div>
  )
};

export default App;
