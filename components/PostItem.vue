<template>
  <div class="post-container py-8">
    <h3 class="text-xl uppercase">
      <Nuxtlink :to="`/posts/1`" class="underline">Post Title</Nuxtlink>
    </h3>
    <div>
      <p>Date</p>
      <p>Author</p>
    </div>
    <div class="post-preview mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      exercitationem dolor architecto et ipsa doloribus nemo nostrum. Eveniet,
      ipsa repudiandae.
    </div>
    <div class="mt-4">
      <Nuxtlink
        :to="`/posts/1`"
        class="bg-red-600 p-2 text-white hover:bg-red-800"
        >Read More</Nuxtlink
      >
    </div>
  </div>
</template>

<script setup></script>
