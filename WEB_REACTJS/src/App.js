import React from 'react';
import './App.css';
import CardContainer from './components/cardContainer/CardContainer';

function App() {
  return (
    <div>
      <h1>Interview Quiz</h1>
      <span>
        Feel free to create as many helper/container react compontents as you
        feel helps you complete the task effectively.
      </span>
      <ol>
        <li>
          Create a new react component that contains an input field. Set the
          default text to be "Kenna"
        </li>
        <li>
          Create another new react component to display a single letter as a
          "card" (should have a border, padding, and contain only a single
          letter)
        </li>
        <li>
          Update the application so that when a user types into the input field
          (created in step 1) it creates a new "card" for each letter they
          entered (put these cards on a single line)
        </li>
        <li>
          Update the applciation so that when a user clicks on a "card" it
          removes that card, and updates the input field
        </li>
        <li>
          Create a route on the node server that will accept any text string and
          return that text in the reverse order (ie Kenna would become anneK)
        </li>
        <li>
          Create a new react component for a button that when clicked passes the
          value from the input field to the route you created on the node server
          gets the return value and stores it in a state variable (use axios)
        </li>
        <li>
          Update the application so that it will display a card for each letter
          based on the text in your state variable (on a new line than your old
          cards)
        </li>
        <li>
          Update the application so that when a user clicks a card that was
          created from the state variable it removes that card and updates the
          state variable
        </li>
        <li>
          Update the application so that that cards created from the input field
          are green and cards created from the state variable are red
        </li>
      </ol>

      {/* ADD YOUR CODE HERE */}
      <CardContainer />
    </div>
  );
}

export default App;
