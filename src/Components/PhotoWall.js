import React,{Component} from 'react';
import Title from './Title';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function PhotoWall(props){
   
        return (
        <div>
            {/* <button className ='addIcon' onClick = {props.onNavigate}> </button> */}
            {/* <a  className='addIcon' onClick ={props.onNavigate} href ="#AddPhoto"></a> */}
           <Link className = "addIcon" to ="/AddPhoto"></Link>
           <div className='photoGrid'>
            {props.posts.map((post,index) => <Photo key = {index} posts = {post} onRemovePhoto ={props.onRemovePhoto}/>)}
           </div>
        </div>
        
        )
}

// PhotoWall.PropTypes = {
//     posts: PropTypes.array.isRequired,
//     onRemovePhoto: PropTypes.func.isRequired
// }

export default PhotoWall