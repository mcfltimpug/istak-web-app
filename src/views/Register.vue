<script>
export default {
  name: 'Register',
  computed: {
    shouldShowSidebar() {
      return this.$route.meta.sidebar !== true;
    }
  }

}
</script>
<template>

  <div class="login-page -ml-[13.5rem]">
    <div class="navbar bg-neutrals-2 flex flex-col">
      <div class="w-full bg-gradient-to-r from-brand-6 to-secondary-6">
        <span class="m-5"></span>
      </div>

      <div class="flex flex-col justify-around items-center gap-4 m-3 md:flex-row ">
        <div>
          <img src="../assets/assumpta-horizontal-logo.png" alt="" class="h-12">
        </div>
        <div class="">
          <a href="" class="text-sm uppercase text-brand-6 p-5 mr-8 border-b-4 border-brand-6 hover:bg-neutrals-1">Log
            In</a>
          <button class="assumpta-btn-secondary w-52">
            <span class="w-full assumpta-btn-span uppercase text-xs">
              Go to Front-site
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col-reverse md:flex-row lg:flex-row w-screen h-screen justify-center">
      <div class=" w-full relative hidden md:block">
        <div class="w-full relative z-0">
          <div class="w-full absolute left-1 p-5 h-screen flex justify-center">
            <img src="../assets/login-header-0.png" alt="" class="rounded-2xl">
          </div>
        </div>
        <div class="absolute w-72 left-8 top-20 z-10">
          <img src="../assets/login-image-1.png" alt="">
        </div>
        <div class="absolute w-4/6 right-1 top-52 z-20">
          <img src="../assets/login-image-2.png" alt="">
        </div>
      </div>

      <div class="login-form w-full  flex justify-center items-center -mt-44 md:mt-0">
        <div class="flex flex-col justify-center w-3/4 md:w-2/3">
          <div class="flex justify-center w-full">
            <img src="../assets/assumpta-horizontal-logo.png" alt="" class="h-12 mb-10">
          </div>
          <div class="bg-error-1 border border-error-4 text-error-7 px-4 py-3 rounded relative mb-4" role="alert"
            v-if="errMsg">
            <strong class="font-bold">Oops!</strong>
            <span class="block sm:inline ml-2"> {{ errMsg }}</span>
          </div>
          <h1 class="mb-5 text-center font-bold uppercase">Register</h1>
          <div class="w-full flex flex-col gap-3 mb-4">
            <div class="relative flex items-center">
              <input type="text" v-model="email" name="email" class="pr-3 pl-10" placeholder="Enter Email">
            </div>
            <img src="../assets/user_icon.svg" class="w-5 h-5 absolute ml-3 mt-2" alt="User Icon" />
          </div>
          <div class="w-full flex flex-col gap-3 mb-4">
            <div class="w-full">
              <label for="password" class="block w-full text-sm font-medium text-neutrals-9 mb-2"></label>
              <input type="password" v-model="password" name="password" class="pr-3 pl-10" placeholder="Enter Password">
            </div>
            <img src="../assets/user_pass_icon.svg" class="w-5 h-5 absolute ml-3 mt-4" alt="UserPass Icon" />
          </div>
          <div class="flex justify-between w-full">
            <div class="flex">
              <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
              <label for="terms-and-privacy"
                class="mr-20 ml-2 block text-xs text-neutrals-9 hover:text-neutrals-8">Remember Me
              </label>
            </div>
            <div>
              <a href="" class="text-xs font-medium text-brand-6 hover:text-brand-5">Forgot Password?</a>
            </div>
          </div>
          <div class="w-full">
            <button @click="register"
              class="font-bold block w-full px-4 py-2 mt-4 text-sm assumpta-gradient mb-3">Register
            </button>

          </div>


        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
}

.login-page {
  overflow: hidden;
}

.home>* {
  z-index: 100;
}

.home {
  background-image: url("https://assumptaclinic.com/wp-content/uploads/2022/08/bg_left.png");
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
  z-index: 2;
  width: 100vw;
  height: 100vh;

}

.home::after {
  content: '';
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.207);
  z-index: 1;
}

.side-header {
  background-image: url("../assets/login-header-0.png");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  width: 50vw;
  border-radius: 14px;

}
</style>

<script setup>
// @ is an alias to /src
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from "vue-router";

const email = ref('');
const password = ref('');
const errMsg = ref();
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      alert("Success!");
      router.push('/dashboard');
    })
    .catch((er) => {
      switch (er.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email";
          break;
        case "auth/user-not-found":
          errMsg.value = "The email or mobile number you entered isn’t connected to an account.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or Password was incorrect.";
          break;
      }
    });

}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      alert("Success!");
      router.push('/dashboard');
    })
    .catch((err) => {

    });
}
</script>