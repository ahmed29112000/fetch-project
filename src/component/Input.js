import "./css/input.css";

function Input({ name, setOne, children, Id }) {
  return (
    <div className="input-cont">
      <>{children}</>
      <input type="text" id={Id} onChange={setOne} value={name}></input>
    </div>
  );
}

export default Input;
