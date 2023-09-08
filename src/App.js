import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./views/About.view";
import Home from "./views/Home.view";
import Detail from "./views/Detail/Detail.view";
import Form from "./components/Form/Form";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Favorites from "./views/Favorites/Favorites.view";

function App() {
  const [access, setAccess] = useState(false);
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  const [characters, setCharacters] = useState([]);

  const EMAIL = "";
  const PASSWORD = "";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onClose = (id) => {
    setCharacters((characters) => characters.filter((ch) => ch.id !== +id));
  };

  const onSearch = (characterID) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          const found = characters.some((element) => element.id === data.id); //some devuelve true o false
          if (!found) {
            setCharacters((characters) => [...characters, data]);
          } else {
            window.alert(`El personaje ${characterID} esta repetido!`);
          }
        } else {
          window.alert(`No se encontro el personaje ${characterID}`);
        }
      });
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
