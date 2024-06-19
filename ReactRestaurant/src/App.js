import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <>
    <Cart></Cart>
      <Header></Header>
      <main>
      <Meals />
      </main>
    </>
  );
}

export default App;
