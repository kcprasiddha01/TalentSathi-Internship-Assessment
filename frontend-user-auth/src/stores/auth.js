import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post("/auth/login", { email, password });
        this.user = response.data.user;
        this.token = response.data.token;
        router.push("/profile");
      } catch (error) {
        console.error(error);
      }
    },
    async signUp(name, email, password) {
      try {
        const response = await axios.post("/auth/signup", {
          name,
          email,
          password,
        });
        this.user = response.data.user;
        this.token = response.data.token;
        router.push("/profile");
      } catch (error) {
        console.error(error);
      }
    },
    async fetchProfile() {
      try {
        const response = await axios.get("/auth/profile", {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = response.data.user;
      } catch (error) {
        console.error(error);
      }
    },
    async updateProfile(updatedUser) {
      try {
        const response = await axios.put("/auth/profile", updatedUser, {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = response.data.user;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteAccount() {
      try {
        await axios.delete("/auth/profile", {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = null;
        this.token = null;
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
