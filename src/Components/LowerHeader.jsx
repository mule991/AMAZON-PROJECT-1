import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";


const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>


      <ul>
         <li>
            <AiOutlineMenu />
            <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Card</li>
        <li>Sell</li>

      </ul>
    </div>
  );
}

export default LowerHeader