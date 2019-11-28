import React from 'react';
import './App.css';
function CreateTask() {
  return (
    <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Thêm Công Việc<span className="fa fa-times-circle text-right" /></h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" name="name" defaultValue />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" name="status">
              <option value="true">Kích Hoạt</option>
              <option value="false">An</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Lưu Lại</button>&nbsp;
              <button type="button" className="btn btn-danger">Hủy Bỏ</button>
            </div>
          </form>
        </div>
    </div>  
  );
}

export default App;
