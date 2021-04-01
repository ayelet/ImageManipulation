import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Image Processing Web | Ayelet Danieli</h1>
        <p>under contruction...be back soom</p>
        <Loader
          type="Hearts"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={0} //3 secs
        />
      </main>
    </div>
  );
}

export default App;
