<script setup>
import { ref, reactive } from 'vue';
import Task from './components/Task.vue';
import Filters from './components/Filters.vue';

const appName = "Task manager";

const tasks = reactive([
  {
    name: "Website design",
    description: "Define the style guide, branding and create the webdesign on Figma.",
    completed: true,
    id: 1
  },
  {
    name: "Website development",
    description: "Develop the portfolio website using Vue JS.",
    completed: false,
    id: 2
  },
  {
    name: "Hosting and infrastructure",
    description: "Define hosting, domain and infrastructure for the portfolio website.",
    completed: false,
    id: 3
  },
  {
    name: "Composition API",
    description: "Learn how to use the composition API and how it compares to the options API.",
    completed: true,
    id: 4
  },
  {
    name: "Pinia",
    description: "Learn how to setup a store using Pinia.",
    completed: true,
    id: 5
  },
  {
    name: "Groceries",
    description: "Buy rice, apples and potatos.",
    completed: false,
    id: 6
  },
  {
    name: "Bank account",
    description: "Open a bank account for my freelance business.",
    completed: false,
    id: 7
  }
]);

const filterBy = ref('');


let newTask = {
  name: "",
  description: "",
  completed: false
}

function addTask() {
  if (newTask.name && newTask.description) {
    newTask.id = Math.max(...tasks.map(task => task.id)) + 1;
    tasks.push(newTask);
    newTask = { completed: false }
  } else {
    alert("Please fill in all fields")
  }
}

function toggleCompleted(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
  }
  
}

function filter(state) {
  if (state === 'todo') {
    filterBy.value = 'todo';
  }
  else if (state === 'done') {
    filterBy.value = 'done';
  } else {
    filterBy.value = '';
  }
}
  
</script>

<template>
  <main class="container">
    <div class="header">
      <div class="header-side">
        <h1>
          {{ appName }}
        </h1>
      </div>
    </div>

    <Filters @todo="() => filter('todo')" @done="() => filter('done')" @click="() => filter('clear')" :filterBy="filterBy" />

    <div class="tasks">
      <Task @toggleCompleted="toggleCompleted" v-for="(task, index) in tasks" :task="task" :key="index" />
    </div>

    <div class="add-task">
      <h3>Add a new task</h3>
      <input type="text" name="title" placeholder="Enter a title..." v-model="newTask.name"><br />
      <textarea name="description" rows="4" placeholder="Enter a description..." v-model="newTask.description" /><br />
      <button class="btn gray" @click="addTask">Add Task</button>
    </div>

  </main>
</template>


<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-side {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      font-size: 42px;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
    }

    .secondary {
      margin-left: 12px;
    }
  }

}

.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.add-task {
  margin-top: 60px;

  input,
  textarea {
    width: 360px;
    max-width: 100%;
    margin-top: 12px;
    padding: 5px;
  }

  button {
    width: 360px;
    margin-top: 12px;
  }
}
</style>