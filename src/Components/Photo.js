import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Photo extends Component{
    render(){
        const posts = this.props.posts;
         
          return <figure className ='figure'>
                    <img className = 'photo' src={posts.imageLink}/>
                    <figcaption><p>{posts.description}</p></figcaption>
                    <div className = 'button-container'>
                    <button    className = 'remove-button' onClick = {() => {
                        this.props.onRemovePhoto(posts)
                    }} >Remove</button>
                    </div>
          </figure>
        
    }
}

//   Photo.PropTypes = {
//     posts: PropTypes.object.isRequired,
//     onRemovePhoto: PropTypes.func.isRequired

//    }

export default Photo
