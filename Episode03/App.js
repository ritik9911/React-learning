import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
// React Element
const heading = React.createElement("h1", {id : "heading"}, "Hello React");
console.log(heading);
// JSX - jsx is not html is js and html-like or xml-like syntax in JSX.
// jsxElement converted to react element by babel compiler and then react element is converted to html element by react-dom library.

// JSX(transpiled to JS before it reaches the browser) - parcel - babel
// JSX => React.createElement => Object => HTMLElement(render)
// So babel converts jsx to react element and then react-dom library converts react element to html element and then it renders it in the browser. for checking this practically you can go to this 'https://babeljs.io/' site
// const jsxHeading = <h1 id="heading">Hello React JSX</h1>;
// if multiple lines of jsx then we need to wrap it in parenthesis otherwise it will give error.

// React Element
const jsxHeading = (<h1 id="heading">
                        Hello React JSX
                    </h1>
                );
const Title = () => (
    <h1 id="heading">
        Hello React JSX
    </h1>
);               
console.log(jsxHeading);

// React Component - React component is a function which returns react element or jsx. React component name should start with capital letter. React component can be used as html tag in jsx. React component can be 
// class based - old way of creating react component.
// function based - new way of creating react component. Function based component is more popular and easy to use than class based component.
// React Functional Component(RFC) - is basic js function we should declare function name in capital letter. RFC is function which return some react element or jsx code.

// ways to write react functional component
// const HeadingComponent = () => {
//     return <h1 id="heading"> hello world </h1>
// }
// const HeadingComponent = () => <h1 id="heading"> hello world </h1>;

//() inside parenthesis there is always JSX code
const HeadingComponent = () => (
    // component inside component is known as composition of component. we can use component inside component like html tag.
    // inside jsx code we can use curly braces {} to write any js expressions and ofcourse reactElement at the end  is also an js expression.

    <div id="container">
        {jsxHeading}
        <Title/>
        <Title></Title>
        {Title()}
        <h1 className="heading"> hello react component</h1>
    </div>
);





// instead of creating react element like above "heading" we can also create react element using jsx which is more easy to read and write and it will be converted to react element by babel compiler, React uses it as it is the javascript syntax to write html code in javascript file. 

// Note: JSX is different and React is different.

const root = ReactDOM.createRoot(document.getElementById("root"));
// render will remove existing html element it's content and then convert the react element into html element and then it will add it to the dom

// for rendering react element
// root.render(jsxHeading);

// for rendering react component we will use <> angular brackets
root.render(<HeadingComponent />);