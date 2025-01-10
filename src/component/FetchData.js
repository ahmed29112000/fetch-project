import "./css/fetchData.css";
import { useState, useEffect } from "react";
function FetchData() {
  let [theInput, setInput] = useState("");
  let [reposData, setReposdata] = useState("No Data To Show");
  let [fetdata, setFetData] = useState([]);
  let [dotInput, setDotinput] = useState({
    inOne: "",
    inTow: "",
    inThree: "",
    num: "",
  });
  // articles.json
  useEffect(
    (e = theInput) => {
      fetch(e)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFetData(data);
        });
    },
    [theInput]
  );
  function getDisplayedValue(e, key) {
    if (dotInput[key]) {
      return e[dotInput[key]] || "N/A"; // إرجاع القيمة من e أو "N/A" إذا لم توجد
    }
    return "N/A"; // إرجاع "N/A" إذا لم يتم تحديد الحقل
  }

  let f = fetdata
    .map((e) => {
      return (
        <div className="pear" key={e.id}>
          <div>{e.id}</div>
          <div>{getDisplayedValue(e, "inOne")}</div>
          <div>{getDisplayedValue(e, "inTow")}</div>
          <div>{getDisplayedValue(e, "inThree")}</div>
        </div>
      );
    })
    .filter((e, ind) => {
      return ind < dotInput.num;
    });

  function handl(ev) {
    setInput(ev.target.value);
  }
  let getButton = function () {
    getRepos();
  };
  function getRepos() {
    if (theInput === "") {
      setReposdata("Please write Github Username.");
    } else {
      setInput(theInput);
      setReposdata(f);
      // console.log(theInput);
    }
  }

  return (
    <div className="repos-cont">
      <div className="get-repos">
        <div className="group">
          <input
            id="Name"
            required=""
            type="text"
            className="input"
            onChange={handl}
            value={theInput}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="Name">Name</label>
        </div>
        <span className="get-button" onClick={getButton}>
          Get Repos
        </span>
      </div>
      <div className="conts-all">
        <h3>Enter the names of the keys you want to display.</h3>
        <div className="cont-dot">
          <div className="input-cont">
            <label htmlFor="one">key one</label>
            <input
              id="one"
              required=""
              type="text"
              onChange={(e) => {
                setDotinput({ ...dotInput, inOne: e.target.value });
              }}
              value={dotInput.inOne}
            ></input>
          </div>
          <div className="input-cont">
            <label htmlFor="two">key two</label>
            <input
              id="two"
              required=""
              type="text"
              onChange={(e) => {
                setDotinput({ ...dotInput, inTow: e.target.value });
              }}
              value={dotInput.inTow}
            ></input>
          </div>
          <div className="input-cont">
            <label htmlFor="three">key three</label>
            <input
              id="three"
              required=""
              type="text"
              onChange={(e) => {
                setDotinput({ ...dotInput, inThree: e.target.value });
              }}
              value={dotInput.inThree}
            ></input>
          </div>
        </div>
        <div className="cont-num">
          <label htmlFor="num">
            <h3>Number of items you want to display</h3>
          </label>
          <input
            id="num"
            required=""
            type="text"
            onChange={(e) => {
              setDotinput({ ...dotInput, num: e.target.value });
            }}
            value={dotInput.num}
          ></input>
        </div>
      </div>
      <div className="show-data">
        <span>{reposData}</span>
      </div>
    </div>
  );
}

export default FetchData;

/*
https://jsonplaceholder.typicode.com/posts

https://jsonplaceholder.typicode.com/comments

https://jsonplaceholder.typicode.com/albums

https://jsonplaceholder.typicode.com/photos

https://jsonplaceholder.typicode.com/todos

https://jsonplaceholder.typicode.com/users

*/
