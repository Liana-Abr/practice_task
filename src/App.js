import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
import {useEffect, useState} from "react";


function App() {
    const [items, setItems] = useState([])

    //запрос на получение всех товаров
    useEffect(() =>{
        fetch("https://wbsuperparser.herokuapp.com/api/v1/products/?page=1",{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
            .then((res) =>{
                return res.json()
            })
            .then((arr) =>{
                setItems(arr)
                console.log(arr)
            })
    }, [])
  return (
    <div className="App">
        <Header />
        <Main data={items}/>
    </div>
  );
}

export default App;
