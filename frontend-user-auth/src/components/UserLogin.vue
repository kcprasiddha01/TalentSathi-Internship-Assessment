<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">User Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input v-model="email" type="email" placeholder="Email" class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div class="mb-4">
          <input v-model="password" type="password" placeholder="Password" class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const authStore = useAuthStore();
      authStore.login(this.email, this.password);
    }
  }
};
</script>
