# 582-project2

## Project's title

Team Shop!!

## About Me

I am a web design student.

## About this app

This app is made to learn the framework Vue.JS using Pinia, and MongoDB using node.js.

This is an app for a family to share a shopping list to get the shopping done quickly. Admin(such as parents) can add, and delete items. Users(such as kids) can only mark the list as purchased along with the date and the time. This will prevent the users from adding unnecessary items to the list, or deleting unwanted items from the list.

- There could be multiple admins and users
- Each admins/users have their color in the database and the background color of the app will be the color of the user
- Admin function: Add and delete stores from the database
- Admin function: Add and delete items from the database
- All users: View the list
- All users: Mark items as purchased and add the purchased date and time in the database
- In the list page of the each store, users can see the storename in the url

## To do list

- [x] Create Vue app folder for the app
- [x] Draft the plan on paper (draw the relationship between files)
- [x] Created the connection in the Github codespace
- [x] Create files
- [x] Code the app
- Code and run unit tests (attempted)
- [x] Style (responsive design)
- [x] Make Readme.md

## How to Install and Run

1. Start 582-project2-codespace "reimagined eureka" in Github codespace
2. On this code space, run `node insdex.js` and set port visibility to public
3. Clone, pull or download this repository
4. Open the folder in VS Code
5. Install dependencies with `npm install`
6. Install pinia with `npm install pinia --save`
7. Run the app with `npm run serve`
8. Go to `http://localhost:8080/` or any other port given in your browser

## License

No license. The default copyright laws apply to this project.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
