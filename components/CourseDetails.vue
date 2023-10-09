
<template>
    <div class="container mx-auto p-4">
      <h2 class="text-xl font-semibold mb-4">{{ course.title }}</h2>
      <p>{{ course.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      course: Object,
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  