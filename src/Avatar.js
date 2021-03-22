import React,{Component} from 'react';
import Avatarlist from './Avatarlist'
import './Avatar.css';
import 'tachyons';


class Avatar extends Component{
    
    constructor(){
        super();
        this.state = {
            name : "Avatar World "
        }
    }

    namechange(){
        this.setState({
            name : "Welcome to Avatar World "
        })
    }

    render(){
        const avatarlistarray = [
            {
                id:1,
                name:"Sahil",
                work:"Web Developer"
            },
            {
                id:2,
                name:"Rohit",
                work:"Android Developer"
            },
            {
                id:3,
                name:"Kartik",
                work:"SEO"
            },
            {
                id:4,
                name:"Lakshit",
                work:"HackerBoi"
            }
          ]
      
          const arrayavatarcard = avatarlistarray.map((avatarcard,i)=>{
              return <Avatarlist key={i} id={avatarlistarray[i].id} 
                      name={avatarlistarray[i].name}
                      work={avatarlistarray[i].work}/>
          })      
        return (
            <div className="mainpage">
                <h1 className="tc">{this.state.name}</h1>
                   {arrayavatarcard}
                <button onClick={()=> this.namechange()}>Subscribe</button>
            </div>
        )
    }
}

export default Avatar;
