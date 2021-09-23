<template>
  <div class="todo-container">
    <todo-item 
      v-for="(item, index) in todosList" :key="index"
      :todoId="index"
      :todoText="item"
    ></todo-item>
    <div class="todo-footer">
      <!-- Needs update -->
      <div class="todo-footer__item">
        <p>{{ todosList.length }} items left</p>
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
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  inject: ['todosList'],
  methods: {
    clearTodos() {
      this.todosList.length = 0
    }
  }
}
</script>

<style lang="scss">
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
</style>