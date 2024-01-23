import AdvanceUseStateHook from "./hooks/advanceUseStateHook";

function App() {
  const [get, set] = AdvanceUseStateHook(4);

  const increase = () => {
    set();
  };

  return (
    <>
      <p>Hello{get}</p>
      <button onClick={increase}>Increase IT</button>
    </>
  );
}

export default App;
