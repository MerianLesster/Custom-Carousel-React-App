import React, { useState } from "react";

function Carousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imageArr, setImageArr] = useState([
    [
      { title: "Banana", source: "/images/banana.jpg" },
      { title: "Orange", source: "/images/orange.jpg" },
      { title: "Watermelon", source: "/images/watermelon.jpg" },
    ],
    [
      { title: "Burger", source: "/images/burger.png" },
      { title: "Pizza", source: "/images/pizza.jpg" },
      { title: "Noodles", source: "/images/noodles.jpg" },
    ],
  ]);

  const leftAction = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const rightAction = () => {
    if (currentIdx < imageArr.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  return (
    <div className="text-center p-5">
      <h1 className="p-5">My Custom Carousel developed in React + Bootstrap</h1>
      <div className="container p-5" style={{ backgroundColor: "#b7bbc7" }}>
        <div className="row">
          <div className="col d-flex">
            <button
              type="button"
              className="btn btn-white align-items-center"
              onClick={leftAction}
            >
              <img src="/images/left-arrow.png" height="100px" alt="..."></img>
            </button>
          </div>
          <div className="col-8">
            <div className="container">
              <div className="row">
                <div className="card col m-2 p-0">
                  <img
                    src={imageArr[currentIdx][0].source}
                    height="200px"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <p className="card-text">{imageArr[currentIdx][0].title}</p>
                  </div>
                </div>

                <div className="card col m-2 p-0">
                  <img
                    src={imageArr[currentIdx][1].source}
                    height="200px"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <p className="card-text">{imageArr[currentIdx][1].title}</p>
                  </div>
                </div>

                <div className="card col m-2 p-0">
                  <img
                    src={imageArr[currentIdx][2].source}
                    height="200px"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <p className="card-text">{imageArr[currentIdx][2].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex">
            <button
              type="button"
              className="btn btn-white align-items-center"
              onClick={rightAction}
            >
              <img src="/images/right-arrow.png" height="100px" alt="..."></img>
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
            <input name="pagination" type="radio" disabled checked={currentIdx === 0}></input>
            <input name="pagination" type="radio" disabled checked={currentIdx === 1}></input>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
