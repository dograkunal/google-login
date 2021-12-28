import logo from "./logo.svg";
import "./App.css";
import Main from "./main";
// import GoogleLogin from "./GoogleLogin";

function App() {
  return (
    <div className="App">
      {/* <GoogleLogin  /> */}
      <header className="App-header">
        <Main clientId="924435253527-vhcu2stflulekv974d4baqp0288qnv6v.apps.googleusercontent.com"></Main>
      </header>
    </div>
  );
}

export default App;
