import React from 'react'
import Button from "./Button";

const ButtonList = () => {
  const list = ["All","Gaming","Song","Live","Cricket","Cooking","Thrillers","News"];
  return (
    <div className='flex'>
      {
        list.map((buttonName) =>
           <Button key={buttonName} name={buttonName}/>
        )
      }
    </div>
  )
}

export default ButtonList