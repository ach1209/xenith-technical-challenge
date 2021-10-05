<template>
  <form @submit.prevent="submitTodo" ref="todoForm">
    <button class="todo-submit__btn"></button>
    <input type="text" name="todo-input" id="todo-input" placeholder="Create a new item..." aria-label="Input Todo" ref="todoInput">
  </form>
  <div class="todo-container" v-if="todos.length">
    <todo-item v-for="item in filterTodos" :key="item.id" :todoId="item.id" :todoText="item.task"></todo-item>
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
  <app-message v-else></app-message>
</template>

<script>
import TodoItem from './TodoItem.vue'
import AppMessage from '../Message/AppMessage.vue'

export default {
  components: {
    TodoItem,
    AppMessage
  },
  data() {
    return {
      todos: [
        {
          id: 0,
          task: 'blah',
          isComplete: false
        }
      ],
      filter: 'all'
    }
  },
  methods: {
    submitTodo() {
      if (this.$refs.todoInput.value !== '') {
        const todo = {
          task: this.$refs.todoInput.value,
          isComplete: false,
          id: JSON.parse(Math.random().toPrecision(5))
        }

        this.todos.push(todo)
        this.$refs.todoForm.reset()
      } else {
        return null
      }
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.isComplete)
    },
    setFilter(val) {
      this.filter = val
    }
  },
  computed: {
    remainingItems() {
      const completed = this.todos.filter(todo => todo.isComplete === true)
      if (this.todos.length - completed.length === 1) {
        return '1 item left'
      } else {
        return `${this.todos.length - completed.length} items left`
      }
    },
    filterTodos() {
      if (this.filter === 'active') {
        return this.todos.filter(todo => todo.isComplete === false)
      } else if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.isComplete === true)
      }
      return this.todos
    }
  }
}
</script>

<style lang="scss">
form {
  @include flex(center);
  background-color: $dark-bg;
  border-radius: 0.5rem;
  padding: 0 1.5rem;
  margin-bottom: 5rem;

  &:focus-within {
    @include box-shadow($white, 0.8);
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

.todo-container {
  background-color: $dark-bg;
  border-radius: 0.5rem;
  min-height: 7rem;
  display: grid;
  margin: 0 2rem;

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
    font-family: $primaryFont;
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