<script setup lang="ts">
definePageMeta({
  layout: 'front-layout'
});

const user = useSupabaseUser();
const { auth } = useSupabaseClient();
const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          name: `${firstName.value} ${lastName.value}`,
        }
      }
    });

    if (error) throw error;

    successMsg.value = "Check your email to confirm your account.";
    // 可以在這裡導航到其他頁面，例如首頁
    // router.push('/');
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>

<template>
<section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="mb-5">
          <h2 class="display-5 fw-bold text-center">Sign up</h2>
          <p class="text-center m-0">Already have an account? <a href="#!" class="link-primary text-decoration-none">Sign in</a></p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8">
        <div class="row gy-5 justify-content-center">
          <div class="col-12 col-lg-5">
            <form @submit.prevent="signUp">
              <div class="row gy-3 overflow-hidden">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="firstName" id="firstName" placeholder="First Name" required>
                    <label for="firstName" class="form-label">First Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control border-0 border-bottom rounded-0" v-model="lastName" id="lastName" placeholder="Last Name" required>
                    <label for="lastName" class="form-label">Last Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control border-0 border-bottom rounded-0" v-model="email" id="email" placeholder="name@example.com" required>
                    <label for="email" class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control border-0 border-bottom rounded-0" v-model="password" id="password" placeholder="Password" required>
                    <label for="password" class="form-label">Password</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="iAgree" required>
                    <label class="form-check-label text-secondary" for="iAgree">
                      I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <button class="btn btn-lg btn-dark rounded-0 fs-6" type="submit">Sign up</button>
                  </div>
                </div>
              </div>
            </form>
            <div v-if="errorMsg" class="alert alert-danger mt-3" role="alert">
              {{ errorMsg }}
            </div>
            <div v-if="successMsg" class="alert alert-success mt-3" role="alert">
              {{ successMsg }}
            </div>
          </div>
          <div class="col-12 col-lg-2 d-flex align-items-center justify-content-center gap-3 flex-lg-column">
            <div class="bg-dark h-100 d-none d-lg-block" style="width: 1px; --bs-bg-opacity: .1;"></div>
            <div class="bg-dark w-100 d-lg-none" style="height: 1px; --bs-bg-opacity: .1;"></div>
            <div>or</div>
            <div class="bg-dark h-100 d-none d-lg-block" style="width: 1px; --bs-bg-opacity: .1;"></div>
            <div class="bg-dark w-100 d-lg-none" style="height: 1px; --bs-bg-opacity: .1;"></div>
          </div>
          <div class="col-12 col-lg-5 d-flex align-items-center">
            <div class="d-flex gap-3 flex-column w-100 ">
              <a class="btn btn-lg btn-danger" @click="auth.signInWithOAuth({ provider: 'google' })">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                <span class="ms-2 fs-6">Sign in with Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
</style>
