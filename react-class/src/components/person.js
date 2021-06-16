import { person } from "../constants";

function Person(props) {
  // console.log({ props });
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
    </tr>

    // <div
    //   className="personWrapper"
    //   style={{
    //     backgroundColor: props.bg,
    //   }}
    // >
    //   <h1>Name: {props.name}</h1>
    //   <h1>Age: {person.age}</h1>
    // </div>
  );
}

export default Person;
