<template>
  <div>
    <h1>登錄</h1>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="電子郵件" required />
      <input type="password" v-model="password" placeholder="密碼" required />
      <button type="submit">登錄</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    
    <button @click="handleGoogleSignIn">使用 Google 登錄</button>
    
    <nuxt-link to="/register">還沒有帳號？點此註冊</nuxt-link>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNuxtApp } from '#app';

export default {
  setup() {
    const { $auth } = useNuxtApp(); // 獲取全域 auth 實例
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const handleLogin = async () => {
      error.value = '';
      try {
        await signInWithEmailAndPassword($auth, email.value, password.value);
        console.log('登錄成功');
        // 登錄成功後可以重定向到主頁或其他頁面
      } catch (err) {
        error.value = '登錄失敗: ' + err.message;
        console.error('登錄失敗:', err);
      }
    };

    const handleGoogleSignIn = async () => {
      error.value = '';
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup($auth, provider);
        console.log('Google 登錄成功');
        // 登錄成功後可以重定向到主頁或其他頁面
      } catch (err) {
        error.value = 'Google 登錄失敗: ' + err.message;
        console.error('Google 登錄失敗:', err);
      }
    };

    return {
      email,
      password,
      error,
      handleLogin,
      handleGoogleSignIn,
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
