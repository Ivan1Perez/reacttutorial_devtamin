import React from 'react'

const HelloWorld = (props) => {

  const greeting = "Hello World!";
  const introduction = "My name is Iván";
  const link = "https://www.google.com";

  return (
    <div>
      <div>{greeting}</div>
      <div>{introduction}</div>
      <div>{props.numberprops}</div>
      <a href={link}>Go to Google</a>
    </div>
  )
}

export default HelloWorld