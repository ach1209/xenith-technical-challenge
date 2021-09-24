<template>
  <div class="todo-item">
    <input type="checkbox" :name="todoText" :id="todoId" aria-label="Todo Item" ref="toggle" @click="toggleComplete">
    <label :for="todoText">{{ todoText }}</label>
    <button class="todo-item__btn" @click="removeItem">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
      </svg>      
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todoText: {
      type: String
    },
    todoId: {
      type: Number
    }
  },
  inject: ['todosList'],
  methods: {
    removeItem() {
      const itemIndex = this.todosList.findIndex(todo => todo.task === this.todoText)
      this.todosList.splice(itemIndex, 1)
    },
    toggleComplete() {
      const todoStatus = this.$refs.toggle.checked

      this.todosList.findIndex(todo => {
        if (todo.task === this.todoText) {
          todo.isComplete = todoStatus
        } else {
          return null
        }
      })
    }    
  }
}
</script>

<style lang="scss" scoped>
.todo-item {
  @include flex(center);
  height: 7rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid $gray;

  input[type="checkbox"] {
    transform: scale(1.5);
    width: 1.7rem;
    height: 1.7rem;
    background: none;
    border: 1px solid $gray;
    border-radius: 100%;
    appearance: none;
    cursor: pointer;

    &:hover {
      border-color: $gradient1;
    }

    &:checked {
      background-image: linear-gradient(to right bottom, rgba($gradient1, 0.87), rgba($gradient2, 0.73));
      background-position: center;
      border: none;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        background-image: url('../../assets/icon__check.svg');
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    &:checked + label {
      color: $gray;
      text-decoration: line-through;
    }
  }

  label {
    color: $white;
    font-size: 2rem;
    margin-left: 2rem;
  }

  &__btn {
    @include flex(center);
    margin-left: auto;    
    background: none;
    border: none;

    svg {
      fill: $gray;
      cursor: pointer;

      &:hover path {
        fill: $white;
      }
    }    
  }

}
</style>