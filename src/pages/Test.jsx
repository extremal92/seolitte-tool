import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // fetch('http://seoapi.cherry.agency/api/oauth/token', {method: 'POST', body: JSON.stringify({"grant_type":"client_credentials",
    // "client_id":"3",
    // "client_secret":"XrcOQj7eGlWhbkseREOlkRxu5v2jUzAhE7VSZTT5",
    // "scope":"*"})})
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}









// import React from "react";

// const Mdata = ({ dat, key }) => (
//   <tr>
//     <td>{dat.id}</td>
//     <td>{dat.email}</td>
//     <td>
//       {dat.first_name} {dat.last_name}
//     </td>
//     <td>
//       <img src={dat.avatar} alt={dat.last_name} />
//     </td>
//   </tr>
// );

// export default class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       loading: true
//     };
//   }

//   componentDidMount() {
//     fetch("https://reqres.in/api/users?page")
//       .then(res => res.json())
//       .then(mapdata => {
//         this.setState({
//           loading: false,
//           mapdata
//         });
//       });
//   }
//   loading() {
//     return "Loading...";
//   }

//   error() {
//     return this.state.error.message;
//   }

//   show() {

//     const { error, mapdata } = this.state;

//     if (error) {
//       return this.error();
//     }

//     return (
//       <React.Fragment>
//         <br />
//         <table className="table table-bordered table-condensed table-hover table-stripped">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>mail</th>
//               <th>full name</th>
//               <th>avatar</th>
//             </tr>
//           </thead>
//           <tbody>
//             {mapdata.data.map(dat => (
//               <Mdata dat={dat} key={dat.key} />
//             ))}
//           </tbody>
//         </table>
//       </React.Fragment>
//     );
//   }

//   render() {
//     if (this.state.loading) {
//       // console.log('CLG Loading', mapdata) 
//       return this.loading();
//     } else if (this.state.error) {
//       // console.log('CLG Error', mapdata) 
//       return this.error();
//     } else {
//       return this.show();
//     }
//   }
// }










// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Breadcrumbs } from '../components';
// import { fetchPages } from '../redux/actions/pages';

// function Test() {

//     const dispatch = useDispatch();
//     const items = useSelector(({ pages }) => pages.items.tools);
//     const isLoaded = useSelector(({ pages }) => pages.isLoaded);
  
//     React.useEffect(() => {
//       dispatch(fetchPages());
//     }, [dispatch]);
  
//     return (
//       <div className='container'>
//         <Breadcrumbs/>
//         <h1>Test Page for login</h1>
//         <div className='pages'>
//           {isLoaded ?  
//               <div 
//                   className='pages-item'
//                   dangerouslySetInnerHTML={{__html: items}}></div> 
//           : null }  
  
//         </div>
//       </div>
//     );
// }

// export default Test;





// import React from 'react'


// class Test extends React.Component {

//   constructor (props){
//     super(props);
  
//     this.state = {
//       isLoaded: false,
//       test: {}
//     };
//   }

//   componentDidMount() {
//     return fetch(`http://seoapi.cherry.agency/api/docs`)
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(responseJson)
//         this.setState({ test: responseJson });
//         this.setState({ isLoaded: true });
//     })
//     .catch((error) => {
//       console.error(error);
//     });        
//   } 

//   render(){
//     console.log('test', this.state.test)
//     console.log('isLoaded', this.state.isLoaded)

//     return(
//       <div className="container">
//         <div className="row">
//           <h1>Blog resp wordpress</h1>
//           {/* <div className="blog">
//           {
//             Object.keys((this.state.blog)).map((item, i)=>{
//                 return(
//                     <div className='blog__item' key={i}>
//                         <div className='blog__item-image'>
//                           {item.id}
//                           {item.date}
//                           {item}
//                         </div>
//                         <div className='itemTitle'>
//                             <h3>{this.state.blog[item].id}</h3>
//                         </div>
 
//                     </div>
//                 )
//             })
//           }
//           </div>
//           {this.state.isLoaded ? 
//             this.state.blog.map((item, index)=>{
//             const {
//               id,
//               title: {rendered},
//               date
//             } = item;
//             return(
//                 <div key={id}>
//                     <div>{rendered}</div>
//                     <div>{id}</div>
//                     <div>{date}</div>
//                     <div
//                       className= "content"
//                       dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
//                      <br/>
//                      <br/>
//                      <br/>
//                 </div>
//             )})
//           : null} */}
//         </div>
//       </div>
//     )
//   }
// }


// export default Test







