import Tank from './Tank.js';
import Tankspic from './Tankpics.js';


function TankSelect(props) {
  const allTanks = props.tanks.map(tank => {
    return <Tank
    id={tank.id}
    Name={tank.name}
    Weight={tank.weight}
    Length={tank.length}
    Width={tank.width}
    Height={tank.height}
    Size={tank.size}
    Speed={tank.speed}
    Type={tank.type}
    Count={tank.country}
    Img={tank.img}
    addTank={props.addTank}
    />
  });

  return <div>
    <div class="container">
      <div class="row" id="tank-list">
        <div class="col-sm">
          {allTanks[0]}
          {allTanks[1]}
          {allTanks[2]}
          {allTanks[3]}
          {allTanks[4]}
          {allTanks[5]}
          {allTanks[6]}
          {allTanks[7]}
          {allTanks[8]}
          {allTanks[9]}
          {allTanks[10]}
          {allTanks[11]}
        </div>
        <div class="col-sm">
          {allTanks[12]}
          {allTanks[13]}
          {allTanks[14]}
          {allTanks[15]}
          {allTanks[16]}
          {allTanks[17]}
          {allTanks[18]}
          {allTanks[19]}
          {allTanks[20]}
          {allTanks[21]}
          {allTanks[22]}
          {allTanks[23]}
          {allTanks[24]}
          {allTanks[25]}
          {allTanks[26]}
          {allTanks[27]}
        </div>
        <div class="col-sm">
          {allTanks[28]}
          {allTanks[29]}
          {allTanks[30]}
          {allTanks[31]}
          {allTanks[32]}
          {allTanks[33]}
          {allTanks[34]}
          {allTanks[35]}
          {allTanks[36]}
          {allTanks[37]}
          {allTanks[38]}
          {allTanks[39]}
          {allTanks[40]}
          {allTanks[41]}
          {allTanks[42]}
          {allTanks[43]}
          {allTanks[44]}
        </div>
      </div>
    </div>
  </div>
}

export default TankSelect;