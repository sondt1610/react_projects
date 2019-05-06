import React, { Component } from 'react';
import { connect } from 'react-redux';

class NodeItem extends Component {
    twoActionButton = () => {
        this.props.changeEditStatus()
        //console.log(this.props.note);
        this.props.getEditData(this.props.note);
    }
    deleteData = () => {
        //console.log(this.props.note);
        this.props.getDeleteData(this.props.note.id);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={"note-" + this.props.i}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls={"number" + this.props.i}>
                            {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button 
                                onClick={() => this.twoActionButton()}
                                className="btn btn-outline-info"
                            >
                                Sửa
                            </button>
                            <button 
                                onClick={() => this.deleteData()}
                                className="btn btn-outline-secondary"
                            >
                                Xóa
                            </button>
                        </div>
                    </h5>
                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby={"note-" + this.props.i}>
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
        getEditData: (editObject) => {
            dispatch({ type: "GET_EDIT_DATA", editObject })
        },
        getDeleteData: (deleteId) => {
            dispatch({ type: "DELETE", deleteId })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NodeItem);