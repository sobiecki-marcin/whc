import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KanbanBoard from './KanbanBoard'


let cardsList = [
{
  id:1,
  title:"ISRI-Charlstone",
  description: "Krotko co ostatnio robiles",
  status:"marcin",
  lastModificationData:"2018.05.18",
  tasks: []

},

{
  id:2,
  title:"ELOPRO",
  description: "Krotko co ostatnio robiles",
  status:"server",
  lastModificationData:"2018.05.18",
  tasks: [
    {
      id: 1,
      name: "co jest do zrobienia1",
      done: true
    },
    {
      id: 2,
      name: "co jest do zrobienia2",
      done: true
    },
    {
      id: 3,
      name: "co jest do zrobienia3",
      done: true
    }
  ]

},
{
  id:3,
  title:"BMW Dingolfing",
  description: "Krotko co ostatnio robiles",
  status:"joran",
  lastModificationData:"2018.05.18",
  tasks: []

},
];

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
