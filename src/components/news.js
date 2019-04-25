import React, { Component } from 'react'
import New from './new';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class News extends Component {
    
    render() { 
        return ( 
            <div className="row">
                <TransitionGroup>
                    {this.props.noticias.map(noticia => (
                        <CSSTransition classNames="fade" timeout={500} key = {noticia.url}>
                            <New noticia = {noticia}/>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
           
         );
    }
}
 
export default News;
