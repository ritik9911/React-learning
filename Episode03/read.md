So instead of running project using "npx parcel index.html" we create our own command and configure it in package.json file inside Scripts and inside there we will write something like this "start": "parcel index.html", "build": "parcel build index.html" 'npm run start or npm start' to start the project in dev mode and in production mode we will write "npm run build". We can't write here "npm build" because start is something which is already registered behind the scenes so it is accepted by npm and same for the stop that is also registered.
If we are working on any new project for any company simply go to package.json file to see the command they are using to run project.

domElement is similar to React Element. dom contains the html tags in it similarly reactElement creates an object and pass it to reactDom which render react element and make them look simialr to dom element html tags, After rendering it becomes a similar to dom-element. 

JSX code is not a JS code because that is something which is not readable by js engine, So parcel plays a role to through babel to transpile the jsx code to js so that will be readable by browser, and babel is not returned by facebook developers.

In jsx for attribute we have to follow Camalcase format, class in html uses "class" in jsx it will be like "className" tabindex will return as "tabIndex".

We can execute any JS in component or element using this {} => suppose we executing any api which contains malicious data using that attacker can access js in any users browser then think what he can do he can access cookies, seesion-data. localstorage etc. this is know as cross-site attack jsx already prevent this it not run js blindly to avoid this jsx already providing us security means it is inbuilt already so that it sanitizes the harmful data and then reflect the js variable, function etc. output in the display.

We call the components using <> angular bracket but there are ways we call them and all that ways are valid I have commented below.         
<!-- <Title/>
<Title></Title>
{Title()} -->
