<template>
    <div>
      <h1>Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  
  const projects = ref([]);
  
  onMounted(() => {
    axios.get('http://localhost:8000/api/projects')
      .then(response => {
        projects.value = response.data;
        console.log(projects.value); // Verifica in console
      })
      .catch(error => console.error('Error fetching projects:', error));
  });
  </script>
  
  <style scoped>
 
  </style>