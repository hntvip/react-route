import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc<span className="fa fa-times-circle text-right" /></h3></div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input type="text" className="form-control" name="name" defaultValue />
                  </div>
                  <label>Trạng Thái :</label>
                  <select className="form-control" name="status">
                    <option value="true">Kích Hoạt</option>
                    <option value="false">Ẩn</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5" />Lưu Lại</button>&nbsp;
              <button type="button" className="btn btn-danger"><span className="fa fa-close mr-5" />Hủy Bỏ</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary"><span className="fa fa-plus mr-5" />Thêm Công Việc</button>
            <div className="row mt-15">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type="text" name="keyword" defaultValue className="form-control" placeholder="Nhập từ khóa..." /><span className="input-group-btn"><button className="btn btn-primary" type="button"><span className="fa fa-search mr-5" />Tìm</button>
                  </span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" /></button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a role="button" className="sort_selected"><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
                    <li><a role="button" className><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a></li>
                    <li role="separator" className="divider" />
                    <li><a role="button" className>Trạng Thái Kích Hoạt</a></li>
                    <li><a role="button" className>Trạng Thái Ẩn</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
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
