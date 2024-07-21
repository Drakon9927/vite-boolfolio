<template>
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <span>{{ project.start_date }} - {{ project.end_date }}</span>
      <span>Status: {{ project.status }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['project']
  }
  </script>
  
  <style scoped>
    .project-card {
      border: 1px solid #ccc;
      padding: 20px;
      margin-bottom: 10px;
      border-radius: 8px;
    }
  </style>