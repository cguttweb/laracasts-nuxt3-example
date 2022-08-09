<template>
  <div class="mt-4 mx-auto w-4/5">
    <Title> {{ $route.params.id }} || {{ title }}</Title>
    <h3 class="text-xl uppercase">
      <Nuxtlink :to="`/posts/1`" class="font-bold underline"
        >Post Title</Nuxtlink
      >
    </h3>
    <div>
      <p>Date</p>
      <p>Author</p>
    </div>
    <p class="post-content mt-4">
      {{ $route.params.id }} Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Rerum quam quod labore laudantium quasi nisi quia, accusamus quis,
      eveniet nam maxime voluptates! Tempora, eos perspiciatis maiores itaque
      facere voluptatem enim corrupti, a, alias dolorem harum nulla eum nobis
      obcaecati ratione?
    </p>
  </div>
</template>

<script setup>
const title = useState('title');
</script>
