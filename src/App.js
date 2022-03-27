import "./styles.css";
import React,{useState,useEffect} from 'react';
class Car extends React.Component{
  render(){
    return (
      <>
      <h2>Hello {"I Love"} Class component</h2>
      </>
    );
  }
}
function FunctionalComponent(props){
  return (
    <>
    <h2>This is functional componet {props.color}</h2>
    </>
  );
}
export default function App() {
  const Name = 'Nagendra';
  const link = "https://www.linkedin.com/feed/";
  const data =(
    <div>
      <FunctionalComponent color="green"/>
      <Car />
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
      <li>Fourth</li>
      <li>Fifth</li>
    </ul>
    </div>
  );
  const input = (
    <>
    <input type="number"/>
    </>
  );
  return (
    <div>
      {input}
      {data}
    <h3>Dynamic values example</h3>
    <a href={link} target='_blank'>Goole Site</a>
    <h1>{Name}</h1>
    <p>{"name"}</p>
    <h3>This is Jsx expression & the result is {59+41}</h3>
    <h3>{[5,8,6]}</h3>
    <h3>{Math.random()*10}</h3>
    <div>Api calling</div>
    <div>Fetching the api data from the Api url</div>
    </div>
  );
}
