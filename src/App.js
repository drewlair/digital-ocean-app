
import axios from 'axios';
import react, { useState, useEffect } from 'react';
import db from './firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import './App.css';




function App() {
  const [message, setMessage] = useState([{id: 0, message: ""}]);
  const [response, setResponse] = useState("");
  useEffect( () => 
    onSnapshot(collection(db,"nd-cse-mwpResearch"),(snapshot) => 
    // setMessage(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    console.log(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    ),
  []
);
      
  /*
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [resList, setResList] = useState([]);
  const [counter, setCounter] = useState(0);
  */
  /*
  const addQuestion = () => {
    console.log(question)
    axios.post('http://localhost:5001/create', {question: question})
    .then( () => { 
        console.log("success");
    });
  }
  */
  /*
  const getReply = () => {
    console.log(reply)
    axios.get('http://localhost:5000/reply')
    .then( (response) => {
      console.log("success")
      setReply(response.data)
    });
  }
  */

  return(
  
  <div>
      <container class="title">
          <h1>Math Word Problem Tutor</h1>
      </container>
      <container class="second">
          <div className="input1">
              <h2>Sample MWP</h2>
              <form>
                  <input type="text" onChange={(e) => {setResponse(e.target.value)}}></input>
              </form>
              <button className="button1" type="Submit">Sumbit Question</button>
          </div>
          <div className="res">
              <h1>Tutor:  </h1>
          </div>
          <div className="resButton">
              <button onClick={ () => {
                console.log(message)
              }}>
                Get Response
              </button>
              <ul>
                {message.map((mes) => (
                <li key={mes.id}>
                  <h1>{mes.message}</h1>
                </li>
                ))}
              </ul>
          </div>
      </container>
  </div>
  )

}

export default App;
