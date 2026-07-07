npm manages packages
"create react app command"  already have an npm in it
Now we will see how to create react environment ready app environment 
initially we have basic files html, css and js that contains react cdn in it for making it as actual react app environment things below required

we will hit first command "npm init" it ask some details like ("name", "version", "description", "entry point for an app", "test", "git-repository", "keywords", "author", "license") after writing this package.json will get created
So basically Package.json is configuration for npm, package manager manages packages and this packages also known as dependencies, our project is dependent on so manny packages and that packages in project is dependent on depencies that contains version of project that  npm manage that and npm will check what is version of that package npm will take care of it in package.json

Now let's install dependency in while creating react environment
Imp package in our project is
- Bundler -> bundler optimize and bundle together like html,css js and images it bundles together and sent it or ship to for production. famous Web pack, parcel, veet these are bundler.

"create react app" uses web pack bundler behind the scenes.

we will use parcel bundler in this project, comes with node package manager using => npm install -D parcel "-D is for developer package" there are two types of dependency for any packages Dev dependencies, normal dependencies. While doing development we will prefer Dev dependencies which will help us bundling and optimizing app

after install parcel through npm we will be able to see the dependency in package.json with version and carat sign (^) this automatically updates to newer version released and with 2.0.1,2.0.2,2.0.3 but (~) tilde sign will directly upgrade to major vesrion of dependency like from present 2.2.8, to directly 3.0.1.
after installing parcel from npm there is one more folder created with name node_modules that contains all so many node packages in it. Why So many packages if we only install parcel then? answer for these that parcel has some dependencies and that dependencies have other dependencies so that the reason there are so many dependencies got installed so every folder in node_modules is connected with some of it's dependencies so this is known as "transitive dependencies"  N_Manager is type of database and package.json contains configurations versions.

No need to push node_modules in git instead push package.json and package-lock.json file in git it re-install the node_modules using "npm install" command

We will now ignite our App using following step:
- "npx parcel index.html" it will provide us server where we can see our output, what npx is used for is use to executes the files and create the bundler of files(i.e minify the existing files to dist folder and host it on given server port), So basically parcel will go to that file and build a development build and host on server.

We won't go with cdn links as they need to update all the time with version changes and also calling network again and again for request. so the prefer way is to go with npm and get react into our package.json.

We will install the react using npm instead of using it through cdn "npm install react" & "npm install react-dom" after that we will import react and react-dom in our js file after doing that we need to add attribute type="module" where we have added the external script tag which includes App.js file use of type="module" says that it is used using the framework.

#what parcel do for us behind the scenens?
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- parcel keeps and eye using this system "File watching algorithm" -> Written in C++.
- Faser Builds - because of caching.
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting 
- Differential Bundling - It basically make react code compatible for all types of new and older browser.
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code for us.
- Different dev and prod bundles

Ritik POV what akshay will tell I don't know because this is return by my understanding before akshay explained:-
Basically parcel creates the dist folder which is also known as Build, which contains all the minified code of our react app contains html,css and js files and that is what shown in ("local server" or "host")

React is making our app fast is coorect but there is lot more stuff behind the scene like parcel is also does most of the things for us in react


For creating prod builduse below command:-
npx parcel build index.html

The things which can be regenrate we can't push that to git we will add them to .gitignore file.


How to make app compatible for older browser list "go to browser list package." on this site "https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z"
Add "browserslist" in package.json file like below
{
"browserslist" : [
    "last 2 Chrome version",
    "last 2 firefox version"
]
} 
