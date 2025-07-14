import "./App.css";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/login.jsx";
import Profile from "./components/profile.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>Learning React Context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
