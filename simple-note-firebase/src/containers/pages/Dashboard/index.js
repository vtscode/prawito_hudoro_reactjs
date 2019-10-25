import React, {Component,Fragment} from 'react';
import { addDataToAPI,getDataFromAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state= {
            title:'',
            content:'',
            data:''
        }
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));

        console.log(this.props.getNotes(userData.uid));
    }

    getDataNotes = () => {
        // const starCount
    }

    handleSaveNotes = () => {
        const {title,content} = this.state;
        const {saveNotes} = this.props;

        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            title:title,
            content:content,
            date:new Date().getTime(),
            userId:userData.uid
        }
        saveNotes(data);
        // console.log(data);
    }

    onInputChange = (e,type) => {
        this.setState({
            [type] : e.target.value
        })
    }
    
    render(){
        const {title,content,date} = this.state;
        const {notes} = this.props;
        // console.log('notes',notes);
        return (
            <Fragment>
                <h1>Dashboard Page</h1>
                <div>
                    <input type="text" placeholder="title" value={title} onChange={(e) => this.onInputChange(e,'title')} />
                    <br/>
                    <textarea name="desc" id="desc" cols="30" rows="5" placeholder="content" value={content} onChange={(e) => this.onInputChange(e,'content')}></textarea>
                    <br/>
                    <button onClick={this.handleSaveNotes} >Simpan</button>
                </div>
                <hr/>
                <div>
                {
                    notes.length > 0 ? (
                        <Fragment>
                        {
                            notes.map(note => {
                                return(
                                    <div key={note.id}>
                                        <p>{note.data.title}</p>
                                        <p>{note.data.date}</p>
                                        <p>{note.data.content}</p>
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
    getNotes: (data) => dispatch(getDataFromAPI(data))
})

export default connect(reduxState,reduxDispatch)(Dashboard);