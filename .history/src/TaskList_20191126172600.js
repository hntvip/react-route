import {React, Component} from 'react';
class TaskList extends Components {
  return (
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
  );
}

export default TaskList;
