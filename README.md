# xenith-technical-challenge

## View the project through your browser
https://xenith-technical.firebaseapp.com/

## Project setup
This project uses Vue 3 and requires the latest version of Vue. To install the latest version:
```
npm install -g @vue/cli
```

## Installing locally
```
npm install
```

## Running a local server
```
npm run serve
```

## What I learned from this project

**Force re-rendering a component**
- I learned a few ways to re-render a component when my updated data wasn't being reflected in the DOM. The best method is updating the key value of a component in order to cause Vue to destroy and build a new component. While I used a different re-rendering method, I think it's a nice trick to know for situations where it might be appropriate to use.

## What I would like to improve On

I would like to improve passing data effectively for this project. I think my method of using provide/inject caused more difficulty than it should. I did think about using Vuex or Pinia to handle state changes but I felt it would've been overkill.

For future iterations of this project, I would like to incorporate TypeScript and unit testing for better code quality.
