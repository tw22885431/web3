<template>
  <div>
    <h1>註冊</h1>
    <form @submit.prevent="handleRegister">
      <input type="email" v-model="email" placeholder="電子郵件" required />
      <input type="password" v-model="password" placeholder="密碼" required />
      <button type="submit">註冊</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <nuxt-link to="/login">已經有帳號？點此登錄</nuxt-link>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNuxtApp } from '#app';

export default {
  setup() {
    const { $auth } = useNuxtApp(); // 獲取全域 auth 實例
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const handleRegister = async () => {
      error.value = '';
      try {
        await createUserWithEmailAndPassword($auth, email.value, password.value);
        console.log('註冊成功');
        // 註冊成功後可以重定向到登錄頁面或其他頁面
      } catch (err) {
        error.value = '註冊失敗: ' + err.message;
        console.error('註冊失敗:', err);
      }
    };

    return {
      email,
      password,
      error,
      handleRegister,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>
