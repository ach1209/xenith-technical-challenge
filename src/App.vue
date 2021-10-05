<template>
  <div class="todo-header">
    <h1>Todo</h1>
  </div>
  <todo-list></todo-list>
</template>

<script>
import TodoList from './components/Todo/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
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
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 5rem;

  @include device-medium {
    padding-left: 0;
    padding-right: 0;
  }

  h1 {
    color: $white;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin: 2rem 0;
  }
}
</style>
