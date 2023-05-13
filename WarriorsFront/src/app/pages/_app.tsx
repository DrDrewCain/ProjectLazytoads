import { BrowserRouter, Routes, Route} from "react-router-dom";
import aboutMe from "./aboutMe";
import contactMe from "./contactMe";
import homePage from "./homePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" Component={homePage} />
        <Route  path="/aboutMe" Component={aboutMe} />
        <Route  path="/contactMe" Component={contactMe} />
        <Route Component={() => <h1>404: page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;