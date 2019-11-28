import React from 'react';
function Controls() {
  return (
    <div className="abc">
        <button type="button" className="btn btn-primary">Thêm Công Việc</button>
        <div className="row mt-15">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input type="text" name="keyword" defaultValue className="form-control" placeholder="Nhập từ khóa..." /><span className="input-group-btn"><button className="btn btn-primary" type="button"><span className="fa fa-search mr-5" />Tìm</button>
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
