import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div class="container">
    <div class="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr>
    </div>
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h3 class="panel-title">Thêm Công Việc<span class="fa fa-times-circle text-right"></span></h3></div>
                <div class="panel-body">
                    <form>
                        <div class="form-group">
                            <label>Tên :</label>
                            <input type="text" class="form-control" name="name" value="">
                        </div>
                        <label>Trạng Thái :</label>
                        <select class="form-control" name="status">
                            <option value="true">Kích Hoạt</option>
                            <option value="false">Ẩn</option>
                        </select>
                        <br>
                        <div class="text-center">
                            <button type="submit" class="btn btn-warning"><span class="fa fa-plus mr-5"></span>Lưu Lại</button>&nbsp;
                            <button type="button" class="btn btn-danger"><span class="fa fa-close mr-5"></span>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" class="btn btn-primary"><span class="fa fa-plus mr-5"></span>Thêm Công Việc</button>
            <div class="row mt-15">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="input-group">
                        <input type="text" name="keyword" value="" class="form-control" placeholder="Nhập từ khóa..."><span class="input-group-btn"><button class="btn btn-primary" type="button"><span class="fa fa-search mr-5"></span>Tìm</button>
                        </span>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span class="fa fa-caret-square-o-down ml-5"></span></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a role="button" class="sort_selected"><span class="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
                            <li><a role="button" class=""><span class="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a></li>
                            <li role="separator" class="divider"></li>
                            <li><a role="button" class="">Trạng Thái Kích Hoạt</a></li>
                            <li><a role="button" class="">Trạng Thái Ẩn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row mt-15">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Tên</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" class="form-control" name="filterName">
                                </td>
                                <td>
                                    <select class="form-control" name="filterStatus">
                                        <option value="-1">Tất Cả</option>
                                        <option value="0">Ẩn</option>
                                        <option value="1">Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
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
