<script setup lang="ts">
import TasksColumn from "./modules/tasks/ui/TasksColumn.vue";
import type { ITask } from "./modules/tasks/model/ITask.ts";
import {computed, ref} from "vue";

const tasks = ref<ITask[]>(
    [
      {
        taskId: '1',
        description: 'Работать',
        priority: 'low',
        status: 'toProcess'
      },
      {
        taskId: '2',
        description: 'Пить пиво',
        priority: 'low',
        status: 'toProcess'
      }
    ]
)

const tasksPlan = computed(() => {
  return tasks.value.filter((task) => task.status === 'toPlan')
})

const tasksProcess = computed(() => {
  return tasks.value.filter((task) => task.status === 'toProcess')
})

const tasksTesting = computed(() => {
  return tasks.value.filter((task) => task.status === 'toTesting')
})

const tasksDone = computed(() => {
  return tasks.value.filter((task) => task.status === 'onDone')
})
</script>

<template>
  <div class="flex justify-center gap-4 pt-6">
    <TasksColumn name="Планирование" :tasks='tasksPlan' />
    <TasksColumn name="В работе" :tasks='tasksProcess' />
    <TasksColumn name="Тестирование" :tasks='tasksTesting' />
    <TasksColumn name="Выполнено" :tasks='tasksDone' />
  </div>
</template>
