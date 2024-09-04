import React, {useState} from 'react'

function Test() {
 
      
  const [Key, setKey] = useState(null);
  const cities = ["London", "Paris", "Rome"];
  return (
    <div>
      {cities.map((city, index) => (
        <span key={index} onClick={() => setKey(index)}>
          {city}
        </span>
      ))}
      <p>Clicked element's key is {Key}</p>
      {console.log(Key)}
    </div>
  );

}

export default Test
