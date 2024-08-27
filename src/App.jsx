import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}

function Header(){
  return <header className="header" >header</header>
}
function Pizza() {
  return <h1>hello Pizza</h1>;
};
export default App;
