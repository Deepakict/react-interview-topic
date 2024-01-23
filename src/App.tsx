import Filter from "./components/Filter";
import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <p>App</p>
      <StarRating limits={10} rating={5}/>
      <Filter/>
    </>
  );
}

export default App;
