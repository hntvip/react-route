import React from 'react';
function Controls() {
  return (
    <div className="row mt-15">
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                  <input type="text" name="keyword" defaultValue className="form-control" placeholder="Nhập từ khóa..." /><span className="input-group-btn"><button className="btn btn-primary" type="button"><span className="fa fa-search mr-5" />Tìm</button>
                  </span>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" /></button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <button className="sort_selected"><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></button>
                      </li>
                    <li>
                      <button className="sort_selected" ><span className="fa fa-sort-alpha-asc pr-5">ên Z-A</span></button>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <button className="sort_selected">Trang Thai Kich Hoat</button>
                    </li>
                    <li>
                      <button className="sort_selected">TTrang Thai An</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  );
}

export default Controls;
