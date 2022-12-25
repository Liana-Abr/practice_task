import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
    let fields = [
        {
            id:"1",
            text:'Дата парсинга',
            data: '22.02.2022'
        },
        {
            id:"2",
            text:'Название',
            data: 'Джинсы'
        },
        {
            id:"3",
            text:'Описание',
            data: 'Джинсы черные'
        },
        {
            id:"4",
            text:'Цена',
            data: '2999'
        },
        {
            id:"5",
            text:'Продавец',
            data: 'ИП'

        },
        {
            id:"6",
            text:'Рейтинг продавца',
            data: '4.6'
        },
        {
            id:"7",
            text:'Дата доставки',
            data: '24.02.2022'
        },
        {
            id:"8",
            text:'Количество отзывов',
            data: '20'
        },
        {
            id:"9",
            text:'Рейтинг товара',
            data: '5'
        },
    ];

  return (
    <div className="App">
        <Header />
        <Main
            fields={fields}
        />
    </div>
  );
}

export default App;
