import "./App.css";
import { pizzaData } from "./data";
function App() {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main>
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        <li>
          {pizzaData.map((el) => {
            return <Pizza key={el.name} el={el} />;
          })}
        </li>
      </ul>
    </main>
  );
}
function Pizza({ el }) {
  console.log(el);

  return <img />;
}
export default App;
