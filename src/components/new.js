import React from 'react';
import PropTypes from 'prop-types';

const New = (noticia) => {

    const {urlToImage , title, description, url, source } = noticia.noticia;

    const imagen = (urlToImage)  ?
                <React.Fragment>
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </React.Fragment>


    : '';

    return ( 
        <div className="col s6 l4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" className="waves-efect waves-light btn">
                    Leer</a>
                </div>
            </div>
        </div>
     );
}

    New.propTypes = {
        noticia : PropTypes.shape({
            urlToImage : PropTypes.string ,
            title : PropTypes.string, 
            description : PropTypes.string, 
            url : PropTypes.string, 
            source : PropTypes.shape ({
                name : PropTypes.string
            })
    
        })
    }
 
export default New;