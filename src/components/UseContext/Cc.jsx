import React, { useContext } from 'react'
import { Name, Email, Address } from '../../App';


const Cc = () => {
  const name = useContext(Name);
  const email = useContext(Email);
  const address = useContext(Address);

  return (
    <> <h3> App.js &gt; Compo A &gt;  Comp B &gt;Comp C</h3>
      <h3> App.js &gt;  Comp C</h3>
      <p>  My name is {name} and email si {email} and address -&gt; {address}  </p>
    </>
  )
}

export default Cc