import React from 'react';
import './index.css';
import Options from './options.js';



const Thumbnail = ({ title, num, header, description, imageUrl }) => {
 return (<div className = {'div'}>
                    <img className = {'center-pic'} src={imageUrl}/>
                    <h3>{header}</h3>
                    <section>{description}</section>
                    <button className = {'buttonThumbnail'}> {title}
                        <div className = {'divBtnThumbnail'}> {num} </div>
                    </button>
                </div>
  )
}


const ThumbnailList = ({ options = Options }) => {
  
  return (
                <ul>
                    {options.map((option,index) =>
                            <Thumbnail key={index}
                                      {...option}/>
                    )}
                </ul>
                )
}

export default ThumbnailList;

