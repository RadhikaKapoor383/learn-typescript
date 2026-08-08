import { username, age, isActive } from "./Basics/basic";
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
    </div>
  )
}

export default App
