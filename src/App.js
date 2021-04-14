import './App.css';
import { useState, useEffect } from 'react';

import styled from 'styled-components';

import RatingWidget from './components/RatingWidget';




function App() {
  const [starWidgets, setStarWidgets] = useState({
    title: [

    ]
  })

  const [content, setContent] = useState(null);

  const [showForm, setShowForm] = useState(false);



  useEffect(() => {
    setStarWidgets({
      title: [
        'Please rate how fast page loads.',
        'Please rate how good is solution.'
      ]
    })

  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('asdfasd')
    setShowForm(false);
    const newTitleArray = [...starWidgets.title, content]

    setStarWidgets({ title: newTitleArray })
  }


  return (
    <div className="App">
      <h1 style={{ margin: "100px auto 50px" }}>Embeddable Rating Widget</h1>
      {starWidgets && starWidgets.title.map((title, index) => {
        return (<RatingWidget key={index} title={title} />)
      })}

      {showForm && (


        <FormWidget onSubmit={(e) => onSubmit(e)} >
          <label>
            <span>Please type content to be rated</span>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
            <input type="submit" value="Submit" />
          </label>
        </FormWidget>
      )}
      {showForm === false && (
        <Button className="btn" onClick={() => { setShowForm(true) }}>Add more Widget</Button>
      )}
    </div >
  );
}



export default App;

const FormWidget = styled.form`
  display:block;
  width:500px;
  margin: 50px auto;
  * {
    display:block;
    width:100%;
  }
  input {
    margin:10px 0 40px;
    padding:20px 10px;
  }
`


const Button = styled.button`
  width: 150px;
  margin: 20px auto 40px;
  padding:10px 0;
  outline: none;
  border:1px solid;
  cursor: pointer;
  border-radius: 5px;

`
