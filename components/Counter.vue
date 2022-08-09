<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Add One:{{ addOne }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
const count = ref(0)

const addOne = computed(() => count.value + 1)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>
