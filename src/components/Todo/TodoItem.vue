<template>
  <div class="todo-item">
    <input type="checkbox" :name="todoText" :id="todoText">
    <label :for="todoText">{{ todoId }} {{ todoText }}</label>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" fill-opacity="0.2"/>
    </svg>
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
  }
}
</script>

<style lang="scss" scoped>

.todo-item {
  display: flex;
  align-items: center;
  height: 7rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid $gray;

  label {
    color: $white;
    font-size: 2rem;
  }

  svg {
    margin-left: auto;
  }
}

</style>