import React, { Component} from 'react'
// import axios from 'axios' // Don't need axios if we are using Redux
import { connect } from 'react-redux' 

class Post extends Component {

    // *** We DON'T need this part if we are going to use REDUX fot state Mang.
    // state ={
    //     post:null
    // }
    // componentDidMount(){
    //     // console.log(this.props);
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //      .then(res =>{
    //          this.setState({
    //              post: res.data
    //          })
    //         //  console.log(res)
    //      })
    // }

    handelClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/');
    }
    
    render(){
        console.log(this.props)// print deletePoste()
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="right">
                    <button className="btn grey" onClick={this.handelClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) :(
            <div className="center"> Loading post ...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)