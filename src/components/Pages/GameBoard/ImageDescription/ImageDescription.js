import React from 'react';
import classes from './ImageDescription.module.scss';

const ImageDescription = (props) => {
    const {author,title,titleOriginal,date,country} = props.description;
    return (
        <div className={classes.imageDescription}>
            <p>Title: <strong>{title}</strong>{titleOriginal ? <span> ({titleOriginal})</span> : null}</p>
            <p><strong>{author}</strong>{date ? <span>, {date}</span> : null}{country ? <span>, {country}</span> : null}</p>
        </div>
    );
};

export default ImageDescription;
