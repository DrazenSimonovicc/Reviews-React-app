import React from "react";
import reviews from "./data";

function App() {
  const [index, setIndex] = React.useState(0);
  const { name, job, image, text } = reviews[index];

  function increase() {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function decrease() {
    if (index === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function suprise() {
    const randomReview = Math.floor(Math.random() * reviews.length);
    setIndex(randomReview);
  }

  return (
    <div className="App">
      <h1 className="heading-primary"> Our reviews</h1>
      <div className="container">
        <div className="img-box">
          <img src={image} alt="{name}" className="img" />
        </div>
        <div className="text-box">
          <h3 className="name">{name}</h3>
          <h4 className="job">{job}</h4>
          <p className="text">{text}</p>
        </div>
      </div>
      <div className="button-box">
        <button className="btn btn-prev" onClick={decrease}>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button className="btn btn-next" onClick={increase}>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <button className="button" onClick={suprise}>
        Suprise Me
      </button>
    </div>
  );
}

export default App;
