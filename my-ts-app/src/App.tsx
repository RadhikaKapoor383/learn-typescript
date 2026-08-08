import {
  username,
  age, 
  isActive, 
  hobbies, 
  mark, marks, 
  subjects, 
  student, 
  randomThing, mysteryValue
} from "./Basics/basic";
import mathOperations from "./Basics/functions/maths";


function App() {
  const results = mathOperations();

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Name: {username}</p>
      <p>Age: {age}</p>
      <br />
      <h2>Math Operations</h2>
      <p>Sum: {results.sum}</p>
      <p>Difference: {results.difference}</p>
      <p>Product: {results.product}</p>
      <p>Quotient: {results.quotient}</p>
      <p>Area: {results.area}</p>
      <p>Perimeter: {results.perimeter}</p>
      <p>Circle Area: {results.circleArea}</p>
      {/* <mathOperations /> */}
      {/* <p>Active: {isActive ? "Yes" : "No"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Mark: {mark}</p>
      <p>Subjects: {subjects.join(", ")}</p>
      <p>Marks: {marks.join(", ")}</p>
      <p>Student: {student[0]}, Semester: {student[1]}</p>
      <p>Random Thing: {randomThing}</p>
      <p>Mystery Value: {mysteryValue}</p> */}
    </div>
  )
}

export default App
