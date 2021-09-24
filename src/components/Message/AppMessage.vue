<template>
  <div class="default-message">
    <p>You have no items in your todo list. Create an item to begin tracking your list.</p>
  </div>
</template>

<style lang="scss" scoped>
.default-message {
  @include flex(center, center);
  background-color: $dark-bg;
  border-radius: 0.5rem;
  min-height: 10rem;
  margin: 0 2rem;

  @include device-medium {
    margin: 0;
    min-height: 15rem;
  }

  p {
    color: $white;
    font-size: 1.5rem;
    text-align: center;
    max-width: 45rem;

    @include device-medium-small {
      font-size: 1.75rem;
    }

    @include device-medium {
      font-size: 2rem;
    }
  }  
}
</style>