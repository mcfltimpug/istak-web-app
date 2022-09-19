<template>

  <div class="login-page">
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

    <div class="flex flex-col-reverse md:flex-row lg:flex-row w-screen ">
      <div class=" w-full h-screen relative">
        <div class="w-full relative z-0">
          <div class="w-full absolute left-1 p-5">
            <img src="../assets/login-header-0.png" alt="" class="h-screen rounded-2xl">
          </div>
        </div>
        <div class="absolute w-72 left-8 top-20 z-10">
          <img src="../assets/login-image-1.png" alt="">
        </div>
        <div class="absolute w-4/6 right-1 top-52 z-20">
          <img src="../assets/login-image-2.png" alt="">
        </div>
      </div>

      <div class="login-form w-full  flex justify-center items-center">
        <div class="flex justify-center w-full sm:p-20 p-9 ">
          <div class="w-4/4 md:w-3/4">
            <div class="flex justify-center">
              <img src="../assets/assumpta-horizontal-logo.png" alt="" class="h-12 mb-10">
            </div>
            <div class="w-full flex flex-col gap-3 mb-4">
              <div class="relative flex items-center">
                <input type="text" name="input" class="pr-3 pl-10" placeholder="Enter Username">
              </div>
              <img src="../assets/user_icon.svg" class="w-5 h-5 absolute ml-3 mt-2" alt="User Icon" />
            </div>
            <div class="w-full flex flex-col gap-3 mb-4">
              <div class="w-full">
                <label for="input" class="block w-full text-sm font-medium text-neutrals-9 mb-2"></label>
                <input type="text" name="input" class="pr-3 pl-10" placeholder="Enter Password">
              </div>
              <img src="../assets/user_pass_icon.svg" class="w-5 h-5 absolute ml-3 mt-4" alt="UserPass Icon" />
            </div>
            <div class="flex justify-between">
              <div class="flex">
                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
                <label for="terms-and-privacy" class="mr-20 ml-2 block text-sm font-medium text-neutrals-9 ">Remember Me
                </label>
              </div>
              <div>
                <a href="" class="text-sm font-medium text-brand-6">Forgot Password?</a>
              </div>
              
            </div>
            <button type="submit" class="font-bold block w-full px-4 py-2 mt-4 text-sm assumpta-gradient mb-3">Sign
              In</button>

            
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

<script>
  // @ is an alias to /src

  export default {
    name: 'IndexView',

  }
</script>