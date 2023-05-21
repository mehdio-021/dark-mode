import { useEffect, useState } from "react";

function App() {
  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };

  const [dark, setDark] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDark(!dark)}
                checked={dark}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>
            {dark
              ? "دارک مود فعال شده و فضای دارک داریم"
              : "لایت مود فعال شده و فضا روشنه"}
          </h1>
          <p>
            {dark
              ? "دارک مود فعال شده و فضای دارک داریم"
              : "لایت مود فعال شده و فضا روشنه"}
          </p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img src="image/1.jpg" alt="" />
              <h2>کارت اول</h2>
              <p>این کارت اول است</p>
            </div>
            <div className="card-item">
              <img src="image/2.jpg" alt="" />
              <h2>کارت دوم</h2>
              <p>این کارت دوم است</p>
            </div>
            <div className="card-item">
              <img src="image/3.jpg" alt="" />
              <h2>کارت سوم</h2>
              <p>این کارت سوم است</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
