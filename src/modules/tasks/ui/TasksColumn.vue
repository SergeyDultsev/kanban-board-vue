<script setup lang="ts">
import TaskItem from "./Task.vue";
import type { ITask } from "../model/ITask.ts";

const { name = '', tasks = [] } = defineProps<{
  name: string,
  tasks: ITask[]
}>()
</script>

<template>
  <div class="flex flex-col gap-2 p-4 rounded-lg bg-[#E8E8E8] w-[300px]">
    <h2 class="text-[#202125] text-lg font-bold">{{ name }}</h2>
    <div
        class="flex flex-col gap-1"
        v-for="task in tasks"
    >
      <TaskItem
          :task="task"
          :key='task.taskId'
      />
    </div>
    <button class="
    text-[#202125]
    text-left
    p-2
    cursor-pointer
    text-sm
    rounded-lg
    hover:text-white hover:bg-[#202125]
">
      Добавить задачу
    </button>
  </div>
</template>

<style scoped>

</style>