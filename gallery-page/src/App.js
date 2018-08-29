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

import Gallery from 'react-grid-gallery';
 
class App extends Component {
  constructor(props) {
    super(props); 

    this.state = { currentPage: "1", page1Style:"clickedButton",
    page2Style:"", page3Style:"", isHiddenPage1: false, 
    isHiddenPage2: true, isHiddenPage3: true,};

    this.onPage1Click= this.onPage1Click.bind(this)
    this.onPage2Click= this.onPage2Click.bind(this)
    this.onPage3Click= this.onPage3Click.bind(this)
  }

  onPage1Click() { 
    this.setState({currentPage: "1", page1Style:"clickedButton",
    page2Style:"", page3Style:"", isHiddenPage1: false, 
    isHiddenPage2: true, isHiddenPage3: true, });
  }

  onPage2Click() { 
    this.setState({currentPage: "2", page1Style:"",
    page2Style:"clickedButton", page3Style:"", isHiddenPage1: true, 
    isHiddenPage2: false, isHiddenPage3: true,});
  }

  onPage3Click() { 
    this.setState({currentPage: "3", page1Style:"",
    page2Style:"", page3Style:"clickedButton", isHiddenPage1: true, 
    isHiddenPage2: true, isHiddenPage3: false,});
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
    // var layoutGeometry_1 = require('justified-layout')({sizes_1});

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
          <div className="page_1 galpg" hidden={this.state.isHiddenPage1} >
            <Gallery images={PHOTOSET_1} enableImageSelection={false} enableLightbox={false} />
          </div>
          <div className="page_2 galpg" hidden={this.state.isHiddenPage2}>
            <Gallery images={PHOTOSET_2} enableImageSelection={false} enableLightbox={false} />
          </div>
          <div className="page_3 galpg" hidden={this.state.isHiddenPage3}>
            <Gallery images={PHOTOSET_3} enableImageSelection={false} enableLightbox={false} />
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
  thumbnail: require('./gallery_photos/35.jpg'),
  thumbnailWidth: 195,
  thumbnailHeight: 260,
  
},{
  src: require('./gallery_photos/34.jpeg'),
  thumbnail:require('./gallery_photos/34.jpeg'),
  thumbnailHeight: 120,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/33.jpg'),
  thumbnail:require('./gallery_photos/33.jpg'),
  thumbnailHeight: 130,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/32.jpg'),
  thumbnail:require('./gallery_photos/32.jpg'),
  thumbnailHeight: 120,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/31.jpg'),
  thumbnail:require('./gallery_photos/31.jpg'),
  thumbnailHeight: 120, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/30.jpg'),
  thumbnail:require('./gallery_photos/30.jpg'),
  thumbnailHeight: 210, 
  thumbnailWidth:160
}, {
  src: require('./gallery_photos/29.jpg'),
  thumbnail:require('./gallery_photos/29.jpg'),
  thumbnailHeight: 120, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/28.jpg'),
  thumbnail:require('./gallery_photos/28.jpg'),
  thumbnailHeight: 110, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/27.jpg'),
  thumbnail:require('./gallery_photos/27.jpg'),
  thumbnailHeight: 210,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/26.jpg'),
  thumbnail:require('./gallery_photos/26.jpg'),
  thumbnailHeight: 210,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/25.jpg'),
  thumbnail:require('./gallery_photos/25.jpg'),
  thumbnailHeight: 100,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/24.jpg'),
  thumbnail:require('./gallery_photos/24.jpg'),
  thumbnailHeight: 130, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/23.png'),
  thumbnail: require('./gallery_photos/23.png'),
  thumbnailHeight: 120,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/22.png'),
  thumbnail:require('./gallery_photos/22.png'),
  thumbnailHeight: 120,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/21.png'),
  thumbnail:require('./gallery_photos/21.png'),
  thumbnailHeight: 120,
  thumbnailWidth:160
}, {
  src: require('./gallery_photos/20.png'),
  thumbnail:require('./gallery_photos/20.png'),
  thumbnailHeight: 148,
  thumbnailWidth:160
},];

const PHOTOSET_2 = [{
  src: require('./gallery_photos/19.png'),
  thumbnail:require('./gallery_photos/19.png'),
  thumbnailHeight: 120, 
  thumbnailWidth:160
}, {
  src: require('./gallery_photos/18.png'),
  thumbnail:require('./gallery_photos/18.png'),
  thumbnailHeight: 90, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/17.png'),
  thumbnail:require('./gallery_photos/17.png'),
  thumbnailHeight: 120,
  thumbnailWidth:160
},{
  src: require('./gallery_photos/16.png'),
  thumbnail:require('./gallery_photos/16.png'),
  thumbnailHeight: 90, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/15.png'),
  thumbnail:require('./gallery_photos/15.png'),
  thumbnailHeight: 90, 
  thumbnailWidth:160
}, {
  src: require('./gallery_photos/14.png'),
  thumbnail:require('./gallery_photos/14.png'),
  thumbnailHeight: 130, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/13.png'),
  thumbnail:require('./gallery_photos/13.png'),
  thumbnailHeight: 110, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/12.jpg'),
  thumbnail:require('./gallery_photos/12.jpg'),
  thumbnailHeight: 120, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/11.jpg'),
  thumbnail:require('./gallery_photos/11.jpg'),
  thumbnailHeight: 120, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/10.jpg'),
  thumbnail:require('./gallery_photos/10.jpg'),
  thumbnailHeight: 160, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/9.jpg'),
  thumbnail:require('./gallery_photos/9.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/8.jpg'),
  thumbnail: require('./gallery_photos/8.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/7.jpg'),
  thumbnail:require('./gallery_photos/7.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
}
]; 

const PHOTOSET_3 = [
  {
    src: require('./gallery_photos/6.jpg'),
    thumbnail:require('./gallery_photos/6.jpg'),
    thumbnailHeight: 105, 
    thumbnailWidth:160
  }, 
  {src: require('./gallery_photos/5.jpg'),
thumbnail:require('./gallery_photos/5.jpg'),
thumbnailHeight: 105, 
thumbnailWidth:160
}, {
  src: require('./gallery_photos/4.jpg'),
  thumbnail:require('./gallery_photos/4.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
  },{
  src: require('./gallery_photos/3.jpg'),
  thumbnail:require('./gallery_photos/3.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/2.jpg'),
  thumbnail:require('./gallery_photos/2.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/1.jpg'),
  thumbnail:require('./gallery_photos/1.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
},{
  src: require('./gallery_photos/0.jpg'),
  thumbnail:require('./gallery_photos/0.jpg'),
  thumbnailHeight: 105, 
  thumbnailWidth:160
}]; 

// const sizes_1 = [{
//   width: 160,
//   height: 260 },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 210
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 110
// },{
//   width: 160,
//   height: 210
// },{
//   width: 160,
//   height: 210
// },{
//   width: 160,
//   height: 100
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// }]

// const sizes_2 =[]

// const sizes_3 = [{
//   width: 160,
//   height: 110
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 110
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 110
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 110
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 110
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 130
// },{
//   width: 160,
//   height: 120
// },{
//   width: 160,
//   height: 110
// },]

export default App;
