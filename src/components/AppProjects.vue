<template>
    <div>
      <h1>Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <!-- Altri dettagli -->
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  
  const projects = ref([]);
  
  onMounted(() => {
    axios.get('http://localhost:8000/api/projects') // Assicurati che l'URL sia corretto
      .then(response => {
        projects.value = response.data;
      })
      .catch(error => console.error('Error fetching projects:', error));
  });
  </script>
  
  <style>
  
  </style>