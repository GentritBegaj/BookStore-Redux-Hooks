import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Favourites from "./components/Favourites";
import ThemeContext from "./contexts/theme";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContext.Provider value={[theme, setTheme]}>
          <NavigationBar />
          <div className={`${theme}-theme`}>
            <Route exact path="/" component={Main} />
            <Route exact path="/favourites" component={Favourites} />
          </div>
        </ThemeContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}
