import Tank from './Tank.js';

function Tanklist(props) {

  const allTanks = props.tanks.map(tank => {
    return <Tank
      id={tank.id}
      Name={tank.name}
      Weight={tank.weight}
      Length={tank.length}
      Size={tank.size}
      Img={tank.img}
    />
  });

  return <div>
    <main class="tank-list">
      {allTanks[0]}
      {allTanks[1]}
      {allTanks[2]}
      {allTanks[3]}
      {allTanks[4]}
      {allTanks[5]}
      {allTanks[6]}
      {allTanks[0]}
    </main>
  </div>
};

export default Tanklist;