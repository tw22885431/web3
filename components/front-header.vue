<script setup lang="ts">

const user = useSupabaseUser(); // 獲取當前用戶狀態
const { auth } = useSupabaseClient();

async function handleAuth() {
  if (user.value) {

    const { error } = await auth.signOut()

  } else {
    
    router.push('/')
    
  }
}
</script>

<template>
  <div class="superNav border-bottom py-2 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
          <select class="me-3 border-0 bg-light">
            <option value="en-us">EN-US</option>
          </select>
          <span class="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>info@neochaoblog.com</strong></span>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light p-3 shadow-sm" style="background-color: #E89D6B">
    <div class="container" style="height: 7rem">
      <a class="navbar-brand" href="#"><i class="fa-solid fa-shop me-2"></i> <img src="~/assets/image/logo.png"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
        <div class="input-group">
          <span class="border-warning input-group-text bg-warning text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
          <input type="text" class="form-control border-warning" style="color:#7a7a7a">
          <button class="btn btn-warning text-white">Search</button>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="ms-auto d-none d-lg-block">
          <div class="input-group">
            <span class="border-warning input-group-text bg-warning text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" class="form-control border-warning" style="color:#7a7a7a;width: 35rem">
            <button class="btn btn-warning text-white">Search</button>
          </div>
        </div>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" href="/login" @click="handleAuth()">
              <i class="fa-solid fa-cart-shopping me-1"></i> 
              {{ user ? 'Logout' : 'Account' }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" href="#"><i class="fa-solid fa-circle-user me-1"></i> Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
