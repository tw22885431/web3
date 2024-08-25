<script setup lang="ts">

definePageMeta({
  layout: 'front-layout'
})

import { signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

const auth = useFirebaseAuth()

function loginWithGoogle(){

	signInWithPopup(auth, new GoogleAuthProvider())

}

</script>
<template>
  
	<div>
    
		<h1>登入</h1>
    
		<form @submit.prevent="login">
      
			<input v-model="email" type="email" placeholder="電子郵件" required />
      
			<input v-model="password" type="password" placeholder="密碼" required />
      
			<button type="submit">登入</button>
    
		</form>
    
		<button @click="loginWithGoogle">使用 Google 登入</button>
    
		<div v-if="error">{{ error }}</div>
  
	</div>

</template>

<style scoped>

</style>
