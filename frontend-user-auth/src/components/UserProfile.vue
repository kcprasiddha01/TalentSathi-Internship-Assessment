<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Profile</h1>
      <form @submit.prevent="updateProfile">
        <div class="mb-4">
          <input v-model="name" type="text" placeholder="Name" class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <div class="mb-4">
          <input v-model="email" type="email" placeholder="Email" class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">Update Profile</button>
      </form>
      <button @click="deleteAccount" class="w-full bg-red-600 text-white p-3 rounded-lg mt-4 hover:bg-red-700 transition-colors">Delete Account</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth';

export default {
  name: 'UserProfile',
  computed: {
    name: {
      get() {
        const authStore = useAuthStore();
        return authStore.user.name;
      },
      set(value) {
        const authStore = useAuthStore();
        authStore.user.name = value;
      }
    },
    email: {
      get() {
        const authStore = useAuthStore();
        return authStore.user.email;
      },
      set(value) {
        const authStore = useAuthStore();
        authStore.user.email = value;
      }
    }
  },
  methods: {
    updateProfile() {
      const authStore = useAuthStore();
      authStore.updateProfile({ name: this.name, email: this.email });
    },
    deleteAccount() {
      const authStore = useAuthStore();
      authStore.deleteAccount();
    }
  }
};
</script>
