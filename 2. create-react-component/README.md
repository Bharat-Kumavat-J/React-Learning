# React Components Basic 

## What is JSX?

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
- JSX converts HTML tags into react elements.


## Component 

- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

- Components come in two types, **Class components** and **Function components**.
- Component name should be start with **Capital case**.

## Create First Component in React

1. create a folder called components under src folder.
2. create a file called nav.jsx inside components folder.
3. write the following code : 

```
import '../App.css'

function Navbar(){

    return <div className='container'>
        <div Id="navbar">
            <div>
                <img src="https://metronlabs.com/img/newWebsite/logo.svg" alt="" />
            </div>
            <div className='links'>
                <a href="#" class="nav-item">Home</a>
                <a href="#" class="nav-item">Features</a>
                <a href="#" class="nav-item">Connect</a>
                <a href="#" class="nav-item">Empower</a>
                <a href="#" class="nav-item">Hub</a>
                <a href="#" class="nav-item">Career</a>
                <a href="#" class="nav-item">API Monitoring</a>
            </div>
        </div>
    </div>
}

export default Navbar;
```
4. in App.jsx import the Navbar component in following way.
```

import Navbar from "./components/nav";

function App(){
  return <>
   <Navbar></Navbar>
  </>
}
export default App;
```
5. We can use the **Navbar** component across multiple pages just using it like a simple html tag.
```
<Navbar></Navbar>
```

## Use Bootstrap in React App

```
npm i bootstrap@5.3.2
import 'bootstrap/dist/css/bootstrap.min.css'
```


## Learning

1. Components in react are just functions.
1. It improves the reusability, readability.
1. To use component must need to import.
1. There are also class component which are stateful but less in use.
1. function components are stateless.


