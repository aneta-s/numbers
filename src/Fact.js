import React from "react";
import "./Fact.css";

const Fact = (props) => {
  return (
      <article>
      <div>
        <p className='f5 f3-ns lh-copy measure georgia'>
   
        {props.numberToDisplay + ' '} 
        {props.topicToDisplay + ' '} 
        </p>
      <div >
      <p className='f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4'>{props.factToDisplay}</p>
      </div>
      </div>
    </article>
  );
}
export default Fact;
