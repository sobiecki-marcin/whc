import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List id='todo' title="Server" cards={
            this.props.cards.filter((card) => card.status === "server")
        } />

        <List id='in-progress' title="Marcin" cards={
            this.props.cards.filter((card) => card.status === "marcin")
        } />

        <List id='done' title="Joran" cards={
            this.props.cards.filter((card) => card.status === "joran")
        } />

      </div>
    );
  }
}

export default KanbanBoard;