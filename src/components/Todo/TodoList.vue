<template>
  <div class="todo-container">
    <todo-item 
      v-for="(item, index) in todosList" :key="index"
      :todoId="index"
      :todoText="item.task"
    ></todo-item>
    <div class="todo-footer">
      <div class="todo-footer__item">
        <p>{{ remainingItems }}</p>
      </div>
      <div class="todo-footer__item">
        <button class="todo-footer__button">All</button>
        <button class="todo-footer__button">Active</button>
        <button class="todo-footer__button">Completed</button>
      </div>
      <div class="todo-footer__item">
        <button class="todo-footer__button" @click="clearTodos">Clear Completed</button>
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
  },
  computed: {
    remainingItems() {
      if (this.todosList.length === 1) {
        return '1 item left'
      } else {
        return `${this.todosList.length} items left`
      }
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
  @include flex(center, space-between);
  height: 7rem;
  padding: 0 1.5rem;

  &__item {
    color: $gray;
    font-weight: 600;
  }

  &__button {
    background: none;
    border: none;
    color: $gray;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: $white;
    }
  }

}
</style>