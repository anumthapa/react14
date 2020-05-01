import React from "react";

const Product =({id, name, description,img, price})=>{
  return(
    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
  <div class="tc">
    <img src={img} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Cloths"/>
    <h1 className="f3 mb2">{name}</h1>
    <h2 className="f5 fw4 gray mt0">{description}</h2>
    <span> $ {price}</span><br/>
    <button type="button" className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" >Add to Cart</button>
    
  </div>
</article>
  );
}
export default Product;