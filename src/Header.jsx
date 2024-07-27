import React from 'react'

export default function Header(props, cname,children) {
  console.log(props.headerinfo.email, props.cname)
  return (
    <div>
      <h1>Welcome to the header section, {props.headerinfo.email}{ props.cname}</h1>
      <h1>{children}</h1>
    </div>
  )
}
