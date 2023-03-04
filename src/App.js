import "./App.css";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import OnPageChecklist from "./pages/OnPageChecklist";
import OffPageChecklist from "./pages/OffPageChecklist";
import MetaTagChecklist from "./pages/MetaTagChecklist";
import OgTagChecklist from "./pages/OgTagChecklist";
import MetaTagForm from "./pages/MetaTagForm";
import OgTagForm from "./pages/OgTagForm";

function App() {
  return (
    <div className="App">
          <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/onpage-seo" element={<OnPageChecklist />} />
      <Route path="/offpage-seo" element={<OffPageChecklist />} />
      <Route path="/ogtags-seo" element={<OgTagChecklist />} />
      <Route path="/metatags-seo" element={<MetaTagChecklist />} />
      <Route path="/form-metatags" element={<MetaTagForm />} />
      <Route path="/form-ogtags" element={<OgTagForm />} />
    </Routes>
    </div>
  );
}

export default App;
