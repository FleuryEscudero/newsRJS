import React,{Component} from 'react';
import Header from './Header';
import News from './news';
import Category from './category';

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount(){
    this.consultarNoticias ();
  }

  consultarNoticias = (categoria='general') => {

    let url =`https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=96a7e34875c44d3ea4083290e5b7c714`;

    fetch (url)
    .then(response =>{
      return response.json();
    })
    .then (noticias =>{
     this.setState({
       noticias : noticias.articles
     })
    })

  }
  
  render (){
         
      return (
        <div className="contenedor-app">
        <Header
          titulo ='Noticias'/>
          <div className=" container white contenedor-noticias">
          <Category
           consultarNoticias= {this.consultarNoticias}/>
            <News
            noticias = {this.state.noticias}/>
          </div>
        </div>
      );
    }
}

export default App;
