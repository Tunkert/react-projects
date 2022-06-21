// import logo from './logo.svg';
import './App.css';
import CardsContainer from './CardsContainer';
import Reload from './Reload';
import { persons, idx1, idx2, idx3, idx4, idx5, idx6 } from './Persons';
import React from 'react';

function App() {
  const gameDecision1 = persons[idx1].talents.cycling + persons[idx1].talents.skiing +
    persons[idx1].talents.coding + persons[idx1].talents.math;
  const gameDecision2 = persons[idx2].talents.cycling + persons[idx2].talents.skiing +
    persons[idx2].talents.coding + persons[idx2].talents.math;
  const gameDecision3 = persons[idx3].talents.cycling + persons[idx3].talents.skiing +
    persons[idx3].talents.coding + persons[idx3].talents.math;
  const gameDecision4 = persons[idx4].talents.cycling + persons[idx4].talents.skiing +
    persons[idx4].talents.coding + persons[idx4].talents.math;
  const gameDecision5 = persons[idx5].talents.cycling + persons[idx5].talents.skiing +
    persons[idx5].talents.coding + persons[idx5].talents.math;
  const gameDecision6 = persons[idx6].talents.cycling + persons[idx6].talents.skiing +
    persons[idx6].talents.coding + persons[idx6].talents.math;
  const gameTotalTop = gameDecision1 + gameDecision2 + gameDecision3;
  const gameTotalBottom = gameDecision4 + gameDecision5 + gameDecision6;
  const gameBool = gameTotalTop > gameTotalBottom;
  const classBool = (gameBool) ? "App greenBorder" : "App redBorder";
  return (
    <div className={classBool}>
      <CardsContainer 
        names={[persons[idx1].name, persons[idx2].name, persons[idx3].name]} 
        images={[persons[idx1].image, persons[idx2].image, persons[idx3].image]}
        cyclingTalents={[persons[idx1].talents.cycling, persons[idx2].talents.cycling, persons[idx3].talents.cycling]}
        skiingTalents={[persons[idx1].talents.skiing, persons[idx2].talents.skiing, persons[idx3].talents.skiing]}
        codingTalents={[persons[idx1].talents.coding, persons[idx2].talents.coding, persons[idx3].talents.coding]}
        mathTalents={[persons[idx1].talents.math, persons[idx2].talents.math, persons[idx3].talents.math]}
      />
      <Reload />
      <CardsContainer 
        names={[persons[idx4].name, persons[idx5].name, persons[idx6].name]} 
        images={[persons[idx4].image, persons[idx5].image, persons[idx6].image]}
        cyclingTalents={[persons[idx4].talents.cycling, persons[idx5].talents.cycling, persons[idx6].talents.cycling]}
        skiingTalents={[persons[idx4].talents.skiing, persons[idx5].talents.skiing, persons[idx6].talents.skiing]}
        codingTalents={[persons[idx4].talents.coding, persons[idx5].talents.coding, persons[idx6].talents.coding]}
        mathTalents={[persons[idx4].talents.math, persons[idx5].talents.math, persons[idx6].talents.math]}
      />
    </div>
  );
}

export default App;
