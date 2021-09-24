<template>
  <div class="todo-container">
    <todo-item 
      v-for="(item, index) in filterTodos" :key="index"
      :todoId="index"
      :todoText="item.task"
    ></todo-item>
    <div class="todo-footer">
      <div class="todo-footer__item">
        <p>{{ remainingItems }}</p>
      </div>
      <div class="todo-footer__item todo-footer__item--even todo-footer__item--desktop">
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
        <button class="todo-footer__button" @click="clearCompletedTodos">Clear Completed</button>
      </div>
    </div>
    <teleport to="#app">
      <div class="todo-footer-mobile">
        <div class="todo-footer-mobile-container">
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
      </div>
    </teleport>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  inject: ['todosList'],
  provide() {
    return {
      filteredList: this.filterTodos
    }
  },
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    clearCompletedTodos() {
      for(let i = 0; i < this.todosList.length; i++) {
        if (this.todosList[i].isComplete === true) {
          this.todosList.splice(i, 1)
        }
      }
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
    },
    filterTodos() {
      let filteredTodos = []
      if (this.filter === 'active') {
        this.todosList.find(todo => {
          if (todo.isComplete === false) {
            filteredTodos.push(todo)
          }
        })
      } else if (this.filter === 'completed') {
        this.todosList.find(todo => {
          if (todo.isComplete === true) {
            filteredTodos.push(todo)
          }
        })
      } else {
        filteredTodos = this.todosList
      }
      return filteredTodos
    }
  }
}
</script>

<style lang="scss">
.todo-container {
  background-color: $dark-bg;
  border-radius: 0.5rem;
  min-height: 7rem;
  display: grid;
  margin: 0 2rem;

  @include device-medium-small {
    min-height: 15rem;
  }

  @include device-medium {
    margin: 0;
  }
}

.todo-footer {
  @include flex(center, space-between);
  height: 7rem;
  padding: 0 1.5rem;
  align-self: center;

  &__item {
    flex: 0.5;
    color: $gray;
    font-weight: 600;

    @include device-medium-small {
      flex: 0.3;
    }

    &--desktop {
      display: none;

      @include device-medium-small {
        display: block;
      }
    }

    &--even {
      @include device-medium-small {
        @include flex(null, space-evenly);
      }
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

.todo-footer-mobile {
  display: block;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0 1.5rem;
  background-color: $dark-bg;
  border-radius: 0.5rem;

  @include device-medium-small {
    display: none;
    margin-left: 0;
    margin-right: 0;
  }

  &-container {
    @include flex(center, space-evenly);
    max-width: 30rem;
    height: 7rem;
    margin: 0 auto;
  }
}
</style>