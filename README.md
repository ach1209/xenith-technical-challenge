# xenith-technical-challenge

## View the project through your browser
https://xenith-technical.firebaseapp.com/

## Updates
10/5/2021 - Fixed issues with the old project. No longer uses provide/inject to pass data

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

The application will be accessible through `localhost:8080`

## What I learned from this project

**Force re-rendering a component**
- I learned a few ways to re-render a component when my updated data wasn't being reflected in the DOM. The best method is updating the key value of a component in order to cause Vue to destroy and build a new component. While I used a different re-rendering method, I think it's a nice trick to know for situations where it might be appropriate to use.

## What I would like to improve On

I would like to improve on passing data effectively for this project. I used provide/inject in this project because I wanted to avoid prop drilling data through my components. I think my method caused more difficulty than it should. I did think about using Vuex or Pinia to handle state changes but I felt it would've been overkill.

The TodoList.vue component could definitely be improved on. I felt as though there was a lot of duplicate code especially with how I created a separate section for the filter buttons in order to the mobile design.

For future iterations of this project, I would like to incorporate TypeScript and unit testing for better code quality. Those are two things that I'm still learning, but haven't quite had the confidence to implement in any project yet. Since I used Vue 3 for this project, I think I would also convert all the code to use the Composition API instead of the Options API to make better use of the new reactivity system.
