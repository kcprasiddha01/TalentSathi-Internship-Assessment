<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-8">Welcome to User Auth System</h1>
    <div class="space-x-4">
      <router-link class="text-lg font-semibold text-blue-600 hover:underline" to="/login">Login</router-link>
      <router-link class="text-lg font-semibold text-blue-600 hover:underline" to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
