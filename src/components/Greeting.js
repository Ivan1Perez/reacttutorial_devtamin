import React from 'react'

const Greeting = () => {

  const sayHi = (name, surname) => {
    alert(`Hi ${name} ${surname}`);
  }

  return (
    <div>
        <button onClick={() => sayHi('Alex', 'Devtamin')}>Say Hi</button>
    </div>
  )
}

export default Greeting