import React from 'react';
import Avatarlist from './Avatarlist'
import './Avatar.css';
import 'tachyons';

const Avatar = (props) => {
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
    return (
        <div>
            <h1>Welcome to Avatar World</h1>
            <Avatarlist id={avatarlistarray[0].id} 
                        name={avatarlistarray[0].name}
                         work={avatarlistarray[0].work}/>

            <Avatarlist id={avatarlistarray[0].id}
                        name={avatarlistarray[1].name}
                        work={avatarlistarray[1].work}/>

            <Avatarlist id={avatarlistarray[0].id}
                        name={avatarlistarray[2].name} 
                        work={avatarlistarray[2].work}/>

            <Avatarlist id={avatarlistarray[0].id} 
                        name={avatarlistarray[3].name}
                        work={avatarlistarray[3].work}/>
            <button>Subscribe</button>
        </div>
 )
}

export default Avatar;
