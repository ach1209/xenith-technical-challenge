<template>
  <div class="default-message">
    <p>You have no items in your todo list. Create an item to begin tracking your list.</p>
  </div>
</template>

<style lang="scss" scoped>
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