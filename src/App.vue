<template>
  <div class="todo-header">
    <h1>Todo</h1>
    <form>
      <button class="todo-submit__btn"></button>
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
  @include flex(center);
  background-color: $dark-bg;
  border-radius: 0.5rem;
  padding: 0 1.5rem;

  &:focus-within {
    @include box-shadow($white, 0.8)
  }

  .todo-submit__btn {
    content: "";
    transform: scale(1.5);
    width: 1.7rem;
    height: 1.7rem;
    border: 1px solid $gray;
    border-radius: 100%;
    background: none;
    cursor: pointer;
    padding-inline: 0.75rem; // Makes the button size the same as checkbox size

    &:hover {
      border-color: $gradient1;
    }
  }

  input[type="text"] {
    width: 100%;
    height: 6rem;
    background-color: $dark-bg;
    border: none;
    border-radius: 0.5rem;
    color: $white;
    font-family: $primaryFont;
    font-size: 2rem;
    letter-spacing: 0.1rem;
    margin-left: 2rem;

    &::placeholder {
      color: $gray;
      opacity: 1; /* Resolves transparency in Firefox */
    }

    &:focus {
      outline: none;

      &::placeholder {
        color: $white;
      }      
    }
  }

}
</style>
