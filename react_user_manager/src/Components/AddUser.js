import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState(
            {
                [name]:value
            }
        );
        //package to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
        
    }
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true){
            return (
                <div className="col-12">
                    <form method="post">
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <label>Tên user</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" aria-describedby="helpId" placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input onChange={(event) => this.isChange(event)} type="text" name="tel" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" required name="permission" onChange={(event) => this.isChange(event)}> 
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" 
                                        onClick={() => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>  
                    </form>  
                </div>    
            );
        }
    }
    render() {
        return (
            <div className="card">
                {
                    this.kiemTraTrangThai()
                }              
            </div>
        );
    }
}

export default AddUser;