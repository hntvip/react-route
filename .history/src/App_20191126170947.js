import React from 'react';
import './App.css';
import CreateTask from './them-task';
import Controls from './controls';
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
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control" name="filterName" />
                      </td>
                      <td>
                        <select className="form-control" name="filterStatus">
                          <option value={-1}>Tat Ca</option>
                          <option value={0}>An</option>
                          <option value={1}>Kich Hoat</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
