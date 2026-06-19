    // <div id="parent">
    //     <div id="child">
    //         <h1>I'm h1 tag</h1>
    //         <h2>I'm h2 tag</h2>
    //     </div>
    //     <div id="child1">
    //         <h1>I'm h1 tag</h1>
    //         <h2>I'm h2 tag</h2>
    //     </div>
    // </div>
    

// html looks more easy instead of the below code instead code below creates our more complicated html code due this only JSX concept is introduced in react which looks like html but it is not html it is just a syntax which is used to create react elements and it is also called as syntactic sugar for react.createElement() method. JSX code will be transpiled to react.createElement() method by babel compiler.

    const heading = React.createElement("div", {id: "parent"}, 
                        [
                            React.createElement("div", {id: "child"},[
                                React.createElement("h1", {}, "I'm h1 tag" ),
                                React.createElement("h2", {}, "I'm h2 tag" )
                            ]),
                            React.createElement("div", {id: "child1"},[
                                React.createElement("h1", {}, "I'm h1 tag" ),
                                React.createElement("h2", {}, "I'm h2 tag" )
                            ])
                        ]
                    );
// React is the library which can be applied on the small part or section of the page remaining section will work as it is  react provide us the helpers to create the react elements and also to render the react elements in the browser.


// {} here use for adding attributes in the element 
// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React 12!" ); // {} here use for adding attributes in the element 
const root = ReactDOM.createRoot(document.getElementById("root")); // All react code will run inside this root this will get the root element
root.render(heading);