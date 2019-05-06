import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: "",
            id:''
        }
    }
    
    componentWillMount() {
        if(this.props.editItem){   //edit case
            this.setState(
                {
                    noteTitle: this.props.editItem.noteTitle,
                    noteContent: this.props.editItem.noteContent,
                    id: this.props.editItem.id
                }
            );
        }
    }
    
    addData = (title, content) => {
        if (this.state.id) { 
            //edit case
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteContent = this.state.noteContent;
            editObject.noteTitle = this.state.noteTitle;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus();//tat form
             
        } 
        else{
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            // //gui item ken tren app, de app xu ly
            // this.props.getData(item);
            this.props.addDataStore(item);
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
            [name]:value
        });
    }
    render() {
        return (
            <div className="col-4">
                <h3>Sửa nội dung Note</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung Note" />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit,
        editItem: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getitem) => {
            dispatch({ type: "ADD_DATA", getitem})
        },
        editDataStore: (getItem) => {
            dispatch({ type: "EDIT", getItem })
        },
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);