import "./styles/App.css";
import { tableData } from "./constants";
import Person from "./components/person";
import React, { useState, useEffect } from "react";
import LogoImg from "./assets/logo512.png";

// Functional/Hook based component
function App() {
  const backgroundColor = "orange";

  const [count, setCount] = useState(0);
  const [bg, setBg] = useState("tomato");
  // const count = state[0];
  // const setCount = state[1];

  // function setCount(value) {
  //   count = value;
  //   return count;
  // }

  //  [1=0, 2=function()]

  useEffect(() => {
    console.log('Component loaded');

    return () => console.log('unloaded')
  });

  useEffect(() => {
    if(count === 10) setBg('aqua')
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };



  return (
    // <div className="App">
    //   <Person bg={backgroundColor} name="Shekhar" />
    //   <img src={LogoImg} />
    // </div>
    <div style={{backgroundColor: bg}}>
      <table>
        <th>
          <td>ID</td>
          <td>NAME</td>
        </th>

        {tableData.map((obj) => {
          return <Person id={obj.id} name={obj.name} />;
        })}

        {/* <Person id="1" name="Rahul" />
      <Person id="2" name="Shekhar" />
      <Person />
      <Person />
      <Person /> */}
      </table>

      <br />
      <br />

      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

// Class based component
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.backgroundColor = "#ccc";
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     if (this.state.count > 0) {
//       this.setState({ count: this.state.count - 1 });
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <Person bg={this.backgroundColor} name="Mukul" />
//         <div>
//           <button onClick={this.decrement}>-</button>
//           <span>{this.state.count}</span>
//           <button onClick={this.increment}>+</button>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
