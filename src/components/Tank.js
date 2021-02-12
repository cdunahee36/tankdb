function Tank(props) {
 
  return <div>
    <button  onClick={() => props.displayTank("Weight:" + "  " + props.Weight + "  " + "Length:" + "  " +  props.Length + "  " + "Cannon:" + "  " + props.Size + "  " + "Type:" + "  " + props.Type + "  " + "Country:" + "  " + props.Count)} class="dta-btns">
      {props.Name}
    </button>
  </div>
  
}

export default Tank;