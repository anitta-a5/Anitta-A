import {Link} from "react-router-dom"

export default function Home() {
    return (
      <>
        <div id="sidebar">
          <h1>Jacsi</h1>
          <div>
          <nav>
           <ul>
                <Link to="/Home"> Dashboard </Link>
            </ul>
            <ul>
              <Link to="/Match"> Tables </Link>
              </ul>   
          </nav>
        </div>
        <div id="detail"></div>
        </div>
      </>
    );
  }