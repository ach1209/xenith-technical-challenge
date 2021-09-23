<template>
  <div class="todo-header">
    <h1>Todo</h1>
    <form>
      <!-- Need button here -->
      <input type="text" name="todo-input" id="todo-input" placeholder="Create a new item...">
    </form>  
  </div>
  <div class="todo-container">
    <ul v-if="todos.length">
      <todo-item></todo-item>
    </ul>
    <p v-else>You have no items in your todo list. Create an item to begin tracking your list.</p>
  </div>
</template>

<script>
import TodoItem from './components/Todo/TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoItem
  },
  data() {
    return {
      todos: []
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

.todo-header {
  width: 100%;

  h1 {
    color: $white;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin: 2rem 0;
  }
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
