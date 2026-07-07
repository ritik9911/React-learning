Food Ordering App in React 
- initially always planning required for creating any app design I have created in "Communication crafts Diary".
- 

internal-css in react is getting returned inside Javascript object (JSON) .


we have created the "ResturantCard" component which list down the resturants, to make that dynamic we will use props in component. component is nothing but Javascript same way there is a props we are passing for making resturantCard component dynamic And "Props" is new thing but it simple to understand props in react is same as we pass arguments in javascript. eg:- <ResturantCard resName="Meghana Foods" cuisine="Biryani, North Indian, South Indian"/> 
-resName
-cuisine 
both are like passing props to the components, what react will do here it will take props of the components and pass (props) in the components function like "ResturantCard = (props)"

we can also destructuring props property in component like this {resName, cuisine}. Destructuring on the fly instead of writing {props}

CONFIG Driven UI:-

Config driven UI means it all depends on the city and based on that UI will get vary all that configuration comes through api and depends on all that UI for different cities will get appear different. for eg:- mumbai, banglore, ahmedabad etc. have different UI example swiggy.com. Based on the configuration UI gets driven for various different location

This way large scales application works different for different cities, country etc. 



Optimize the code using destructuring make use of maps for looping json-array data. 

Also there is a concept in REACT while creating loops known as key attribute which is used for keeping data unique while creating components. So there is a dom which contains multiple elements in it like image cards already. suppose there are comes new image cards so instead of loading all card images we would like to render only those which is new so that increase the performance of site and that can only be achieved by key attribute in while looping component, it's recommended that we should use unique_id which will already present or must be there in backend. and React not recommended to use "index" for key attr in components props while looping or mapping data.    


