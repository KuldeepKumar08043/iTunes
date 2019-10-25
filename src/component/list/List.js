import React from 'react';
import './List.css';

const List = (props) => {
    return (
        <tr>
            <td>{props.info.artistId}</td>
            <td>
                <div className="image-container">
                    <figure className="d-i-block mr-2">
                        <img alt="artistName" className="rounded-circle" src={props.info.artworkUrl60} />
                    </figure>
                    <span className="d-i-block">{props.info.artistName}</span>
                </div>
            </td>
            <td>{props.info.trackCensoredName}</td>
            <td>{props.info.country}</td>
            <td>{props.info.currency}</td>
            <td>
                <a href={props.info.artistViewUrl} alt="artist">view</a>
            </td>
            <td><a href={props.info.collectionViewUrl} alt="artist">view</a></td>
        </tr>
    )
}

export default List;