import React, { Component, ReactComponent } from 'react';
import coverphoto from './common/cover_photo.jpg';
import facebook from './common/fb.png';
import email from './common/email.png';
import hackpad from './common/hackpad.png';
import git from './common/git.svg';
import twitter from './common/twitter.png';
import instagram from './common/instagram.png';
import logo from './common/gwc.png';
import neu from './common/neu.png';
import calendar from './common/calendar.png';
import clock from './common/clock.png';
import location from './common/location.png';
import ccis from './common/ccis.png';
import bullet from './common/bulletpoint.png'
import './App.css';
import './common/header.css';
import {Header, Footer} from './common/header.js'

import Gallery from 'react-photo-gallery';
 
class App extends Component {
  constructor(props) {
    super(props); 

    this.state = { currentPage: "1", page1Style:"clickedButton",
    page2Style:"", page3Style:""};

    this.onPage1Click= this.onPage1Click.bind(this)
    this.onPage2Click= this.onPage2Click.bind(this)
    this.onPage3Click= this.onPage3Click.bind(this)
  }

  onPage1Click() { 
    this.setState({currentPage: "1", page1Style:"clickedButton",
    page2Style:"", page3Style:""});
  }

  onPage2Click() { 
    this.setState({currentPage: "2", page1Style:"",
    page2Style:"clickedButton", page3Style:""});
  }

  onPage3Click() { 
    this.setState({currentPage: "3", page1Style:"",
    page2Style:"", page3Style:"clickedButton"});
  }

  isHidden(no) {
    if (no == this.state.currentPage) {
      return false; 
    }
    else {
      return true;
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Gallery-Header">      
          <div className="gallery-cover-text " >
          Photos
          </div>
        </div>
        <div className="gallery-pages" >
            <button className={ "gallery-tag-button " + this.state.page1Style} onClick={this.onPage1Click} > 1 </button> 
            <button className={ "gallery-tag-button " + this.state.page2Style} onClick={this.onPage2Click} > 2 </button> 
            <button className={ "gallery-tag-button " + this.state.page3Style} onClick={this.onPage3Click} > 3 </button> 
        </div> 
        <div className="Gallery-div">
          <div className="page_1" hidden={this.isHidden(1)} >
            <Gallery photos={PHOTOSET_1} />
          </div>
          <div className="page_2" hidden={this.isHidden(2)}>
            <Gallery photos={PHOTOSET_2} />
          </div>
          <div className="page_3" hidden={this.isHidden(3)}>
            <Gallery photos={PHOTOSET_3} />
          </div>
        </div>
        <div className="gallery-pages" >
            <button className={ "gallery-tag-button " + this.state.page1Style} onClick={this.onPage1Click} > 1 </button> 
            <button className={ "gallery-tag-button " + this.state.page2Style} onClick={this.onPage2Click} > 2 </button> 
            <button className={ "gallery-tag-button " + this.state.page3Style} onClick={this.onPage3Click} > 3 </button> 
        </div> 
        <Footer />
      </div>
    );
  }
}

const PHOTOSET_1 = [{
  src: require('./gallery_photos/35.jpg'),
  width: 6,
  height: 8
},{
  src: require('./gallery_photos/34.jpeg'),
  width: 37,
  height: 28
},{
  src: require('./gallery_photos/33.jpg'),
  width: 19,
  height: 15
},{
  src: require('./gallery_photos/32.jpg'),
  width: 6,
  height: 5
},{
  src: require('./gallery_photos/31.jpg'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/30.jpg'),
  width: 6,
  height: 8
}, {
  src: require('./gallery_photos/29.jpg'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/28.jpg'),
  width: 3,
  height: 2
},{
  src: require('./gallery_photos/27.jpg'),
  width: 6,
  height: 8
},{
  src: require('./gallery_photos/26.jpg'),
  width: 6,
  height: 8
},{
  src: require('./gallery_photos/25.jpg'),
  width: 8,
  height: 5
},{
  src: require('./gallery_photos/24.jpg'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/23.png'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/22.png'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/21.png'),
  width: 4,
  height: 3
}];

const PHOTOSET_2 = [{
  src: require('./gallery_photos/20.png'),
  width: 1,
  height: 1
},{
  src: require('./gallery_photos/19.png'),
  width: 4,
  height: 3
}, {
  src: require('./gallery_photos/18.png'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/17.png'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/16.png'),
  width: 8,
  height: 5
},{
  src: require('./gallery_photos/15.png'),
  width: 8,
  height: 5
}, {
  src: require('./gallery_photos/14.png'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/13.png'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/12.jpg'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/11.jpg'),
  width: 4,
  height: 3
},{
  src: require('./gallery_photos/10.jpg'),
  width: 1,
  height: 1
},{
  src: require('./gallery_photos/9.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/8.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/7.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/6.jpg'),
  width: 7,
  height: 5
}]; 

const PHOTOSET_3 = [{
  src: require('./gallery_photos/5.jpg'),
  width: 7,
  height: 5
}, {
  src: require('./gallery_photos/4.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/3.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/2.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/1.jpg'),
  width: 7,
  height: 5
},{
  src: require('./gallery_photos/0.jpg'),
  width: 7,
  height: 5
}]; 

export default App;
