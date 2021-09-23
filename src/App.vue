<template>
  <div class="todo-header">
    <h1>Todo</h1>
    <form>
      <!-- Need button here -->
      <input type="text" name="todo-input" id="todo-input" placeholder="Create a new item...">
    </form>  
  </div>
  <!-- Convert section into separate component and use provide/inject to pass data? -->
  <div class="todo-container" v-if="todos.length">
    <todo-item 
      v-for="(item, index) in todos" :key="index"
      :todoId="index"
      :todoText="item"
    ></todo-item>
    <div class="todo-footer">
      <!-- Needs update -->
      <div class="todo-footer__item">
        <p>{{ todos.length }} items left</p>
      </div>
      <div class="todo-footer__item">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div class="todo-footer__item">
        <button @click="clearTodos">Clear Completed</button>
      </div>
    </div>
  </div>
  <div class="default-message" v-else>
    <p>You have no items in your todo list. Create an item to begin tracking your list.</p>
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
      todos: ['test', 'test 2']
    }
  },
  methods: {
    clearTodos() {
      this.todos.length = 0
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
  padding-top: 10rem;
  margin-bottom: 5rem;

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

.todo-container {
  background-color: $dark-bg;
  border-radius: 0.5rem;
  min-height: 15rem;
}

.todo-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 0 1.5rem;

  &__item {

  }
}

.default-message {
  background-color: $dark-bg;
  border-radius: 0.5rem;
  min-height: 15rem;

  p {
    color: $white;
    font-size: 2rem;
  }  
}

</style>
