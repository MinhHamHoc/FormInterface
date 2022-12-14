import React from 'react';
import logo from './logo.svg';
import './App.css';
import TenUsers from './Component/TenUser';
import FromUsers from './Component/FromUsers';

function App() {


  return (
    <div className="App">
      <FromUsers />
      <h1 className='mt-3'>Information Users</h1>
      <TenUsers />
      <div id='pagination' className='mt-5 d-flex justify-content-center'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default App;
