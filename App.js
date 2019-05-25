import React from 'react';
// import logo from './logo.svg';
import './App.css';

// const pstyle={
//   top:'16px'
// }

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableItems: [
                { id: 1, name: 'course.jpg', text: 'This is a sample text.' },  
                { id: 2, name: 'course2.jpg', text: 'This is a sample text.' },
                { id: 3, name: 'course3.jpg', text: 'This is a sample text.' },
                { id: 4, name: 'course4.jpg', text: 'This is a sample text.' },
                { id: 5, name: 'course5.jpg', text: 'This is a sample text.' },
                { id: 6, name: 'course6.jpg', text: 'This is a sample text.' },
                { id: 7, name: 'course7.jpg', text: 'This is a sample text.' },
                { id: 8, name: 'course8.jpg', text: 'This is a sample text.' },
                { id: 9, name: 'course9.jpg', text: 'This is a sample text.' },
                { id: 10, name: 'course10.jpg', text: 'This is a sample text.' }
            ],
            items: [],
            availableVideoItems: [
                { id: 1, name: 'video.gif', text: 'This is a sample text.' },  
                { id: 2, name: 'video2.gif', text: 'This is a sample text.' },
                { id: 3, name: 'video3.gif', text: 'This is a sample text.' },
                { id: 4, name: 'video4.gif', text: 'This is a sample text.' },
                { id: 5, name: 'video5.gif', text: 'This is a sample text.' },
                { id: 6, name: 'video.gif', text: 'This is a sample text.' }
            ],
            videoItems: []
        }
        this.doSearchFilter = this.doSearchFilter.bind(this);
    }

    componentWillMount(){
        this.setState({
            ...this.state,
            items: this.state.availableItems,
            videoItems: this.state.availableVideoItems
        });
    }

    doSearchFilter = (event) => {
        console.log('Event : ', event.target.value);
        this.setState({
            ...this.state,
            items: this.state.availableItems.filter(ai => 
                ai.name.toLowerCase().includes(event.target.value.toLowerCase())),
            videoItems: this.state.availableVideoItems.filter(avi => 
                avi.name.toLowerCase().includes(event.target.value.toLowerCase()))
        });
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid top" >
                    <div className="row ">
                        <div className="col-lg-2 " >
                            <div className="search">
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="search" onChange={this.doSearchFilter} />
                                    <span className="fa fa-search form-control-feedback" ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {this.state.items.map(item => {
                            return (
                                <div className="col-lg-2 " key={item.id}> 
                                    <div className="wid-panel">
                                        <div className="wid-sub-1">{item.text}</div>
                                        <div className="wid-sub-2">{item.name}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row no-gutters">
                        {this.state.videoItems.map(item => {
                            return (
                                <div className="col-lg-2 " key={item.id}> 
                                    <div className="wid-panel">
                                        <div className="wid-sub-1">{item.text}</div>
                                        <div className="wid-sub-2">{item.name}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

// function App() {
//   return (
//     <div className="App">
//           <div class="container-fluid top" >
//                   <div class="row ">
//           <div class="col-lg-2 " >
//               <div class="search">
//                 <div class="form-group"> 
//                     <input class="form-control" type="text" placeholder="search" /> 
//                     <span class="fa fa-search form-control-feedback" ></span>
//                 </div>
//               </div>
//           </div>
//         </div>
//         <div class="row no-gutters">
//             <div class="col-lg-2 ">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">untitled quiz</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//         </div>
//         <div class="row no-gutters">
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">untitled quiz</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Hello World!</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div> 
//         </div>
//         <div class="row no-gutters">
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">RecordRTC</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">RecordRTC</div>
//                 </div>
//             </div>
//         </div>
//     </div> 
//     </div>
//   );
// }

// export default App;
