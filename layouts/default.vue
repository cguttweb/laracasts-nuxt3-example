<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <Title>{{ title }}</Title>
    <nav class="p-6 shadow text-lg">
      <div class="container flex items-center justify-between">
        <div>
          <NuxtLink to="/">Add Logo</NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-10">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script setup>
const title = useState('title', () => 'Nuxt 3 Blog')
</script>

<style>
.router-link-active {
  text-decoration: underline;
}
</style>
