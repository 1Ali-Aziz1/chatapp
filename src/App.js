import "./App.css";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ChatScreen from "./Pages/ChatScreen/ChatScreen";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<div>Hi!<a href="/chat">Let's chat!</a></div>} />
          <Route path="/chat" exact element={<ChatScreen/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
