<script setup lang="ts">
import type { ITask } from "../model/ITask.ts";

defineProps<{
  task: ITask
}>()
</script>

<template>
  <article class="bg-white p-2 rounded-lg text-[#202125] text-base">
    <div>
      {{ task.priority  }}
    </div>
    {{ task.description }}
  </article>
</template>

<style scoped>

</style>