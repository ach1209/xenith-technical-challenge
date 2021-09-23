<template>
  <div class="todo-header">
    <h1>Todo</h1>
    <form>
      <!-- Need button here -->
      <input type="text" name="todo-input" id="todo-input" placeholder="Create a new item...">
    </form>  
  </div>
  <todo-list v-if="todos.length"></todo-list>
  <app-message v-else></app-message>
</template>

<script>
import TodoList from './components/Todo/TodoList.vue'
import AppMessage from './components/Message/AppMessage.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    AppMessage
  },
  data() {
    return {
      todos: ['test', 'test 2']
    }
  },
  provide() {
    return {
      todosList: this.todos
    }
  }
}
</script>

<style lang="scss">
#app {
  max-width: 80rem;
  min-height: 100vh;
  margin: 0 auto;
}

form {
  input[type="text"] {
    width: 100%;
    height: 6rem;
    background-color: $dark-bg;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      color: $gray;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      opacity: 1; /* Resolves transparency in Firefox */
    }

    &:focus {
      &::placeholder {
        color: $white;
      }      
    }
  }

}
</style>
