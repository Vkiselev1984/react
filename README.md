# React

## Task 1

1. Install Node.js and NPM (if not already installed).
2. Create a new React project using Create React App by running npx create-react-app my-first-react-app in the terminal.

After installation you will receive the following message:
![Success install](./img/Success_install.png)

3. Run the project using npm start in the project directory and make sure the app renders in the browser.

![Ferst start](./img/First_start.png)

4. Replace the template text with your own

![My template](./img/My_template.png)

## Task 2

1. Create a functional component Greeting that outputs a simple greeting, such as <h1>Hello, React!</h1>.

- Open your React project.
- In the src folder, create a new file called Greeting.js.
- In this file, create a functional component that will display the greeting.

```JavaScript
import React from 'react';

const Greeting = () => {
return <h1>Hi, React!</h1>;
};

export default Greeting;
```

2. Import the Greeting component into App.js and use it inside the App component.

Open the App.js file and import the Greeting component. Then use it inside the main App component.

```JavaScript
import React from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
    return (
        <div className="App">
            <Greeting />
        </div>
    );
}

export default App;
```

3. Run the application and verify that the greeting is displayed on the page.

![Greeting](./img/Greeting.png)

## Task 3

1. Create a functional CurrentTime component that will display the current time formatted in a human-readable way (e.g. "Current time: 14:35").

- In your React project, create a new file named CurrentTime.js in the src folder.
- In this file, create a functional component that will display the current time.

2. Use a Date object to get the current time and the toLocaleTimeString() method to format it.

```JavaScript
import React from 'react';

const CurrentTime = () => {
const currentTime = new Date().toLocaleTimeString(); // Get the current time in a human-readable format

return (
<h2 style={{ color: 'blue', textAlign: 'center' }}>
Current time: {currentTime}
</h2>
);
};

export default CurrentTime;
```

3. Import the CurrentTime component into App.js and use it inside the App component to display the current time on the page.

```JavaScript
import React from 'react';
import './App.css';
import CurrentTime from './CurrentTime';

function App() {
return (
<div className="App">
<CurrentTime />
</div>
);
}

export default App;
```

4. Add minimal styling to the CurrentTime component to highlight the displayed time (e.g. use an h2 for the title and some CSS to improve the appearance).

![Current time](./img/Current_time.png)

## Task 4

1. Modify the Greeting component to display different greetings depending on the time of day, such as "Good morning" or "Good evening", using conditional rendering.

2. Use new Date().getHours() to determine the current time and set a condition to display the appropriate greeting.

```JavaScript
const Greeting = () => {
const currentHour = new Date().getHours(); // Get the current hour
let greeting;

// Set the greeting depending on the time of day
if (currentHour < 12) {
greeting = "Good morning!";
} else if (currentHour < 18) {
greeting = "Good afternoon!";
} else {
greeting = "Good evening!";
}

return <h1>{greeting}</h1>; // Display the appropriate greeting
};
```

3. Run the application and verify that the appropriate greeting is displayed depending on the time of day.

![Greeting hour](./img/Greeting_hour.png)

## Task 5

1. Create a functional EventCard component that will display event information: title, date, and location. The component should receive this data via props.

```JavaScript
import React from 'react';
import './EventCard.css';

const EventCard = ({ title, date, location }) => {
    return (
        <div className="event-card">
            <h2 className="event-title">{title}</h2>
            <p className="event-date">{date}</p>
            <p className="event-location">{location}</p>
        </div>
    );
};

export default EventCard;
```

2. In the App component, use the EventCard component multiple times with different event data passed via props to show a list of upcoming events.

```JavaScript
<h1>Upcoming events</h1>
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
```

3. Add minimal styling to the EventCard component using CSS classes to visually highlight the information about each event

```CSS
.event-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.event-title {
    font-size: 1.5em;
    margin: 0 0 8px;
}

.event-date, .event-location {
    margin: 4px 0;
    color: #555;
}
```

![EventCard](./img/Events.png)
