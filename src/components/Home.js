import React,{ Component} from 'react'
import axios from 'axios'

class Home extends Component {
    state ={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0,20)
                })
            })
    }
    render(){
        return (
            <div>
                <div className="container">
                    <h4 className="center">Home</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
                </div>
            </div>
        )
   }

}

export default Home