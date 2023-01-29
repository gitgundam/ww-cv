<!--  -->
<script setup lang="ts">
import Header from './views/Header/index.vue'
import Skill from './views/Skill/index.vue'
import Experience from './views/Experience/index.vue'
import Project from './views/Project/index.vue'
import Mine from './views/Mine/index.vue'
</script>

<template>
  <div w-100vw bg="#f5f7fa" min-h-100vh p-10px>
    <div mx-auto max-w-850px bg-white p-30px>
      <Header />
      <Skill />
      <Experience />
      <Project />
      <Mine />
    </div>
  </div>
</template>
