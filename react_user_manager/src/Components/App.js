import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText:'',
      editUserStatus:false,
      userEditObject:{}
    }
  }
  
  componentWillMount() {
    //kiem tra
    if (localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState(
        {
          data: temp
        }
      );
    }
  }
  
  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState(
      {
        data:tempData
      }
    );
    //day vao du lieu
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  doiTrangThai = () => {
    this.setState(
      {
        hienThiForm: !this.state.hienThiForm
      }
    );
  }
  
  getTextSearch = (dl) => {
    this.setState(
      {
        searchText: dl
      }
    );
  }

  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState(
      {
        data:items
      }
    );
    //day vao du lieu
    localStorage.setItem('userData', JSON.stringify(items));
    
  }

  editUser = (user) => {
    this.setState(
      {
        userEditObject: user
      }
    );
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    //day vao du lieu
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState(
      {
        editUserStatus: !this.state.editUserStatus
      }
    );
  }
  render() {
    var ketQua = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    });

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
                userEditObject={this.state.userEditObject}
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserStatus={this.state.editUserStatus}
                ketNoi={() => this.doiTrangThai()} 
                hienThiForm={this.state.hienThiForm} 
                checkConnectProps={(dl) => this.getTextSearch(dl)} />
              <TableData 
                deleteUser={(idUser) => this.deleteUser(idUser)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editFun={(user) => this.editUser(user)} 
                dataUserProps = {ketQua} />
              <AddUser 
                hienThiForm={this.state.hienThiForm} 
                add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;