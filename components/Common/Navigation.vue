<template>
  <div class="bg-white dark:bg-red-400">
 navigation
  </div>
</template>

<script setup>
// function for toggling dark mode
function toggleDark() {
  const html = document.documentElement;
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
}
</script>
