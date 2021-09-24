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
      <div class="todo-footer__item todo-footer__item--even">
        <button 
          class="todo-footer__button" @click="setFilter('all')" 
          :class="{ 'todo-footer__button--active': filter === 'all' }"
        >All</button>
        <button 
          class="todo-footer__button" @click="setFilter('active')" 
          :class="{ 'todo-footer__button--active': filter === 'active' }"
        >Active</button>
        <button 
          class="todo-footer__button" @click="setFilter('completed')" 
          :class="{ 'todo-footer__button--active': filter === 'completed' }"
        >Completed</button>
      </div>
      <div class="todo-footer__item todo-footer__item--end">
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
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    clearTodos() {
      this.todosList.length = 0
    },
    setFilter(filter) {
      this.filter = filter
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
    flex: 0.3;
    color: $gray;
    font-weight: 600;

    &--even {
      @include flex(null, space-evenly);
    }

    &--end {
      @include flex(null, flex-end);
    }
  }

  &__button {
    background: none;
    border: none;
    color: $gray;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    &--active {
      color: $light-blue;
    }

    &:hover {
      color: $white;
    }
  }

}
</style>