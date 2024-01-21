import React from 'react'

export default function CarCard(props) {
  return (
    <div >
      <div class="card" style={{ width: '18rem', minHeight: '325px' }} onClick={props.onClick}
      >
      <img src={`${props.base64String}`} className="card-img-top container mt-3" alt="..." style={{ width: '250px', height: '250px', objectFit: 'cover' ,borderRadius:'20px'}} />
    <div class="card-body">
        <h5 class="card-title">{props.title.length > 20 ? props.title.substring(0, 20) + '...' : props.title}</h5>
        <p class="card-text">{props.description.length > 50 ? props.description.substring(0, 100) + '...' : props.description}</p>
        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    </div>
    </div>
    </div>
  )
}
