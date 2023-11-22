import React,{Component} from 'react';

class addPhoto extends Component{

    constructor(){
        super()
        this.handleSubmit= this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        const link = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        
        const post = {
            id:0,
            description: description,
            imageLink: link
        }
        if(description && link){
            console.log(link)
            this.props.onAddPhoto()
        }
    }
    render()
    {
        return (
            <div className="form">
           
              <div>
                  <form onSubmit={this.handleSubmit}>
                  <input type = "text" placeholder="Link" name="link"/>
                  <input type = "text" placeholder="description" name ="description"/>
                  <button>post</button>
                  </form>
              </div>
            </div>

        )
    }
}

export default addPhoto;