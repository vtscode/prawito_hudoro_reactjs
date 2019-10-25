import React, {Component,Fragment} from 'react';
import { addDataToAPI,getDataFromAPI,updateDataFromAPI,deleteDataFromAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            title:'',
            content:'',
            data:'',
            textButton:'SIMPAN',
            noteId:''
        }
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.uid);
    }

    getDataNotes = () => {
        // const starCount
    }

    handleSaveNotes = () => {
        const {title,content,textButton,noteId} = this.state;
        const {saveNotes,updateNotes} = this.props;

        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            title:title,
            content:content,
            date:new Date().getTime(),
            userId:userData.uid
        }
        if(textButton === 'SIMPAN'){
            saveNotes(data);
        }else{
            data.noteId = noteId;
            updateNotes(data);
        }
        console.log(data);
    }

    updateNotes = (note) => {
        // console.log(note)
        this.setState({
            title:note.data.title,
            content:note.data.content,
            textButton:'UPDATE',
            noteId:note.id
        })
    }
    
    delNote = (e,note) => {
        e.stopPropagation();
        const {deleteNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            userId:userData.uid,
            noteId:note.id
        }
        deleteNotes(data)
    }
    
    cancelUpdate = () => {
        // console.log(note)
        this.setState({
            title:'',
            content:'',
            textButton:'SIMPAN'
        })
    }   


    onInputChange = (e,type) => {
        this.setState({
            [type] : e.target.value
        })
    }
    
    render(){
        const {title,content,textButton} = this.state;
        const {notes} = this.props;
        const {cancelUpdate,updateNotes,delNote} = this;
        // console.log('notes',notes);
        return (
            <Fragment>
                <h1>Dashboard Page</h1>
                <div>
                    <input type="text" placeholder="title" value={title} onChange={(e) => this.onInputChange(e,'title')} />
                    <br/>
                    <textarea name="desc" id="desc" cols="30" rows="5" placeholder="content" value={content} onChange={(e) => this.onInputChange(e,'content')}></textarea>
                    <br/>
                    {
                        textButton === 'UPDATE' ? (
                            <button onClick={cancelUpdate} >Cancel</button>
                        ) : null
                    }
                    <button onClick={this.handleSaveNotes} >{textButton}</button>
                </div>
                <hr/>
                <div>
                {
                    notes.length > 0 ? (
                        <Fragment>
                        {
                            notes.map(note => {
                                return(
                                    <div onClick={() => updateNotes(note)} key={note.id}>
                                        <p>{note.data.title}</p>
                                        <p>{note.data.date}</p>
                                        <p>{note.data.content}</p>
                                        <button onClick={(e) => delNote(e,note)}>DELETE</button>
                                        <hr/>
                                    </div>
                                )
                            })
                        }
                        </Fragment>
                        
                    ) : null
                }
                    
                </div>
            </Fragment>
        )
    }
}

const reduxState = state => ({
    userData:state.user,
    notes:state.notes
})

const reduxDispatch = dispatch => ({
    saveNotes: (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFromAPI(data)),
    updateNotes:(data) => dispatch(updateDataFromAPI(data)),
    deleteNotes: (data) => dispatch(deleteDataFromAPI(data))
})

export default connect(reduxState,reduxDispatch)(Dashboard);