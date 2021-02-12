function Tank(props) {
 
  return <div>
    <button onClick={() => props.addTank(props.id)} class="dta-btns">{props.Name}</button>
  </div>
  
}

export default Tank;