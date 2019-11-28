import React from 'react';
import './App.css';
import CreateTask from './them-task';
import Controls from './controls';
import TaskList from './TaskList';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4">
            <CreateTask/>
          </div>
          <div className="col-8 col-sm-8 col-md-8 col-lg-8">
            <div className="row mt-15">
              <Controls/>
            </div>
            <div className="row mt-15">
              <TaskList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
