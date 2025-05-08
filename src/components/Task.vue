<script setup>
import { defineProps } from 'vue';

const props = defineProps{
  task: Object
};
  
</script>

<template>
  <div class="task">
    <h3>
      {{ task.name }}
    </h3>
    <p>
      {{ task.description }}
    </p>
    <div class="task-check">
      <input type="checkbox" v-model="task.completed" />
      <label>
        {{ task.completed ? "Done" : "To-Do" }}
      </label>
    </div>
  </div>
</template>