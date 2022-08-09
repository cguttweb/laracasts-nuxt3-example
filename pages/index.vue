<template>
  <div class="container mx-auto p-6">
    <!-- <h1 class="text-center text-3xl w-4/5">Homepage</h1> -->
    <PostItem v-for="n in 10" :key="n" />
    <!-- <Counter /> -->
    <!-- <div>x: {{ x }} y: {{ y }}</div> -->
    <!-- <div>
      <h2>Using onMounted</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div> -->
    <!-- <div>
      <h2>Using useAsyncData - rendered on the server</h2>
      <ul>
        <li v-for="user in users2" :key="user.id">{{ user.name }}</li>
      </ul>
    </div> -->
    <!-- <div>
      <h2>Using useFetch - shorthand version of the above</h2>
      <ul>
        <li v-for="user in users2" :key="user.id">{{ user.name }}</li>
      </ul>
    </div> -->
    <!-- <div>
      <h2>Getting a user</h2>
      <p>{{ user.name }}</p>
    </div> -->
    <!-- <div>
      <h2>Weather</h2>
      <p>Name: {{ weather.name }}</p>
      <p>Description: {{ weather.weather[0].description }}</p>
      <p>Temperature: {{ weather.main.temp }}</p>
    </div> -->
  </div>
</template>

<script setup>
// const { x, y } = useMouse()
// const users = ref([])

// onMounted(() => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => (users.value = data))
// })

// const { data: users2 } = await useAsyncData('users2', () =>
//   $fetch('https://jsonplaceholder.typicode.com/users')
// )

// const { data: users3 } = await useFetch(
//   'https://jsonplaceholder.typicode.com/users'
// )

// const { data: user } = await useFetch(
//   'https://jsonplaceholder.typicode.com/users/1',
//   { pick: ['id', 'name', 'email'] }
// )

// const { data: weather } = await useFetch('/api/weather')
</script>
