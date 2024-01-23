import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <p>App</p>
      <StarRating limits={10} rating={5}/>
    </>
  );
}

export default App;
