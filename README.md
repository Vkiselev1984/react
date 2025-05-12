# Seminar 1

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

# Seminar 2

For different workshops we will use different pages to test tasks. For this we will set up routing and use the react-router-dom library.

```Terminal
npm install react-router-dom
```

Let's create a new file for a new page. For example, let's create a page "Seminar2".

To do this, create a new folder in the src folder, for example, pages, and inside the file "Seminar2.js".

## Task 1

- Create a Counter component that displays a button and a number.
- The number increases by 1 each time the user clicks the button.

Let's create a Counter.js file and the following code:

```JavaScript
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter: {count}</h1>
            <button className="increment-button" onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;
```

Now we can use the Counter component in your main application component, for example in Seminar2.js:

```JavaScript
import React from 'react';
import Counter from './Counter';

const Seminar2 = () => {
  return (
    <div>
      <h1>Welcome to the counter app!</h1>
      <Counter />
    </div>
  );
};

export default Seminar2;
```

## Task 2

Create a TextInput component that contains a text input field and displays the entered text below it in real time.

Let's create a TextInput.js file with a component:

```JavaScript
import React, { useState } from 'react';
import './TextInput.css';

const TextInput = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="text-input-container">
            <input
                type="text"
                className="text-input"
                value={text}
                onChange={handleChange}
                placeholder="Enter text here"
            />
            <p className="text-output">You entered: {text}</p>
        </div>
    );
};

export default TextInput;
```

Let's use it in the application:

```JavaScript
import React from 'react';
import TextInput from './TextInput';

const Seminar2 = () => {
return (
<div>
<h1>Welcome to the text input app!</h1>
<TextInput />
</div>
);
};

export default Seminar2;
```

## Task 3

Create a TodoList component that allows adding items to a to-do list via a text input field. The list should be updated when a new to-do is added.

Let's create a TodoList.js file with a component:

```JavaScript
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <form className="todo-form" onSubmit={addTodo}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
```

Using TodoList in the main component of the application:

```JavaScript
import React from 'react';
import TodoList from './TodoList';

const Seminar2 = () => {
return (
<div>
<h1>Welcome to the Todo List app!</h1>
<TodoList />
</div>
);
};

export default Seminar2;
```

## Task 4

Create a Timer component that displays a timer that increases by 1 every second. Use useEffect to set and clear the interval.

```JavaScript
import React, { useState, useEffect } from 'react';

const Timer = () => {
const [seconds, setSeconds] = useState(0);

useEffect(() => {
// Set an interval to increment the timer every second
const interval = setInterval(() => {
setSeconds(prevSeconds => prevSeconds + 1);
}, 1000);

// Clear the interval when the component unmounts
return () => clearInterval(interval);
}, []); // An empty array of dependencies so that the effect only fires once on mount

return (
<div>
<h1>Timer: {seconds} seconds</h1>
</div>
);
};

export default Timer;
```

![Finish second seminar](./img/Finish_second_seminar.png)

## Homework

### Task: Comments list with deletion.

#### Goal

Combine useState, list rendering, and event handling to create an interactive interface.

#### Task:

Create a CommentsList component that displays a list of comments. Each comment should have a button to delete it. When the button is clicked, the comment should be deleted from the list.

You can use a template:

const [comments, setComments] = useState([
{ id: 1, text: "This is the first comment" },
{ id: 2, text: "This is the second comment" },
{ id: 3, text: "This is the third comment" }
]);

#### Solution

```JavaScript
import React, { useState } from 'react';
import '../css/CommentsList.css';

const CommentsList = () => {
const [comments, setComments] = useState([
{ id: 1, text: "This is the first comment" },
{ id: 2, text: "This is the second comment" },
{ id: 3, text: "This is the third comment" }
]);

const handleDelete = (id) => {
setComments(prevComments => prevComments.filter(comment => comment.id !== id));
};

return (
<div>
<h2>List of comments</h2>
<ul className="comments-list">
{comments.map(comment => (
<li key={comment.id} className="comment-item">
<span>{comment.text}</span>
<button
className="delete-button"
onClick={() => handleDelete(comment.id)}
>
Delete
</button>
</li>
))}
</ul>
</div>
);
};

export default CommentsList;
```
