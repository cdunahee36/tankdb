function Tank(props) {
 
  return <div>
    <button  onClick={() => props.displayTank("Name:" + "  " + props.Name + "  " + "Weight:" + "  " + props.Weight + "  " + "Length:" + "  " +  props.Length + "  " + "Width:" + "  " +  props.Width + "  " + "Height:" + "  " + props.Height + "  " + "Cannon:" + "  " + props.Size + "  " + "Speed:" + "  " + props.Speed + "  " + "Type:" + "  " + props.Type + "  " + "Country:" + "  " + props.Count)} class="dta-btns">
      {props.Name}
    </button>
  </div>
  
}

export default Tank;