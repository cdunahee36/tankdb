function Tankspic (props) {

  return (
  <div>
      {props.choTank.map(tank => {
        return (<div>
          <div class="container">
            <div class="row">
              <div class="col-sm" id="pic">
                <p class="display-text" id="dtop">Name: {tank.name} </p> 
                <p class="display-text">Weight: {tank.weight} </p> 
                <p class="display-text">Length: {tank.length}</p> 
                <p class="display-text">Width: {tank.width}</p> 
                <p class="display-text">Height: {tank.height}</p> 
                <p class="display-text">Cannon: {tank.size}</p> 
                <p class="display-text">Type: {tank.type}</p> 
                <p class="display-text">Speed: {tank.speed}</p> 
                <p class="display-text">Country: {tank.country}</p> 
              </div>
              <div class="col-sm">
                <img src={tank.img} height="220px" width="300px" id="pic"></img>
              </div>
            </div>
          </div>
        </div>
        )
      } )}
  </div>
  )

}

export default Tankspic;