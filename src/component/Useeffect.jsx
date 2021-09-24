import React, { useState } from "react";
import { RingLoader } from "react-spinners";

function UseEffect() {
  /*const fetchData = () => {
    return fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };*/

  const [users, setUser] = useState([]);
  const [load, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);

    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    setUser([]);
    setTimeout(() => {
      setUser(users.data);
    }, 1000);

    //console.log(data);
  };

  return (
    <>
      <div className="nav">
        <h1>Dead Note</h1>

        <button className="button" onClick={fetchData}>
          Get Users
        </button>
      </div>

      {load ? (
        <div className="Loader">
          <RingLoader color="#fff" size={100} />
        </div>
      ) : (
        " "
      )}

      <div className="Card_container">
        {users?.map((curr, index) => {
          return (
            <div className="Card" key={index}>
              <img src={curr.avatar} alt={curr.id} />
              <div className="content">
                <h3>{curr.id}</h3>
                <h2>
                  {curr.first_name} {curr.last_name}
                </h2>
                <p>{curr.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UseEffect;
