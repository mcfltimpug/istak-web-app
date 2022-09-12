<template>
  <div class="hello flex flex-col gap-4">
    <h1 class="text-3xl font-bold text-white">{{ msg }}</h1>
    <div class="w-[800px] bg-neutrals-1 rounded p-4 flex flex-col justify-start items-start text-left"> 
      <div class="font-bold text-sm uppercase text-neutrals-8 text-left">Design System</div>
      <div class="text-4xl font-bold text-neutrals-10 mb-2">Colors</div>
      <p class=" mb-4 ">We use colors purposefully to communicate how things function in the interface. This helps us create visual patterns that can make interacting with users easier and more predictable.</p>
      
      <div class="font-bold text-sm uppercase text-neutrals-10 mb-4 text-left">Main Color Pallete</div>

      <div class="font-bold text-lg text-neutrals-9 text-left">P06 – <span class=" text-brand-6 ">FOREST GREEN</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-brand-1 w-full h-12"></div>
        <div class="bg-brand-2 w-full h-12"></div>
        <div class="bg-brand-3 w-full h-12"></div>
        <div class="bg-brand-4 w-full h-12"></div>
        <div class="bg-brand-5 w-full h-12"></div>
        <div class="bg-brand-6 w-full h-12"></div>
        <div class="bg-brand-7 w-full h-12"></div>
        <div class="bg-brand-8 w-full h-12"></div>
        <div class="bg-brand-9 w-full h-12"></div>
        <div class="bg-brand-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-lg text-neutrals-9 text-left">PD06 – <span class=" text-brandDark-6 ">AUTUMN PINE GREEN</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-brandDark-1 w-full h-12"></div>
        <div class="bg-brandDark-2 w-full h-12"></div>
        <div class="bg-brandDark-3 w-full h-12"></div>
        <div class="bg-brandDark-4 w-full h-12"></div>
        <div class="bg-brandDark-5 w-full h-12"></div>
        <div class="bg-brandDark-6 w-full h-12"></div>
        <div class="bg-brandDark-7 w-full h-12"></div>
        <div class="bg-brandDark-8 w-full h-12"></div>
        <div class="bg-brandDark-9 w-full h-12"></div>
        <div class="bg-brandDark-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-lg text-neutrals-9 text-left">S06 – <span class=" text-secondary-6 ">SUNLIGHT GREEN</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-secondary-1 w-full h-12"></div>
        <div class="bg-secondary-2 w-full h-12"></div>
        <div class="bg-secondary-3 w-full h-12"></div>
        <div class="bg-secondary-4 w-full h-12"></div>
        <div class="bg-secondary-5 w-full h-12"></div>
        <div class="bg-secondary-6 w-full h-12"></div>
        <div class="bg-secondary-7 w-full h-12"></div>
        <div class="bg-secondary-8 w-full h-12"></div>
        <div class="bg-secondary-9 w-full h-12"></div>
        <div class="bg-secondary-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-lg text-neutrals-9 text-left">SL06 – <span class=" text-secondaryLight-6 ">SPRING YELLOW</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-secondaryLight-1 w-full h-12"></div>
        <div class="bg-secondaryLight-2 w-full h-12"></div>
        <div class="bg-secondaryLight-3 w-full h-12"></div>
        <div class="bg-secondaryLight-4 w-full h-12"></div>
        <div class="bg-secondaryLight-5 w-full h-12"></div>
        <div class="bg-secondaryLight-6 w-full h-12"></div>
        <div class="bg-secondaryLight-7 w-full h-12"></div>
        <div class="bg-secondaryLight-8 w-full h-12"></div>
        <div class="bg-secondaryLight-9 w-full h-12"></div>
        <div class="bg-secondaryLight-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-sm uppercase text-neutrals-10 mb-4 text-left">Support Pallete</div>

      <div class="font-bold text-lg text-neutrals-9 text-left">I – <span class=" text-info-6 ">INFO</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-info-1 w-full h-12"></div>
        <div class="bg-info-2 w-full h-12"></div>
        <div class="bg-info-3 w-full h-12"></div>
        <div class="bg-info-4 w-full h-12"></div>
        <div class="bg-info-5 w-full h-12"></div>
        <div class="bg-info-6 w-full h-12"></div>
        <div class="bg-info-7 w-full h-12"></div>
        <div class="bg-info-8 w-full h-12"></div>
        <div class="bg-info-9 w-full h-12"></div>
        <div class="bg-info-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-lg text-neutrals-9 text-left">SU – <span class=" text-success-6 ">SUCCESS</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-success-1 w-full h-12"></div>
        <div class="bg-success-2 w-full h-12"></div>
        <div class="bg-success-3 w-full h-12"></div>
        <div class="bg-success-4 w-full h-12"></div>
        <div class="bg-success-5 w-full h-12"></div>
        <div class="bg-success-6 w-full h-12"></div>
        <div class="bg-success-7 w-full h-12"></div>
        <div class="bg-success-8 w-full h-12"></div>
        <div class="bg-success-9 w-full h-12"></div>
        <div class="bg-success-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-lg text-neutrals-9 text-left">W – <span class=" text-warning-6 ">WARNING</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-warning-1 w-full h-12"></div>
        <div class="bg-warning-2 w-full h-12"></div>
        <div class="bg-warning-3 w-full h-12"></div>
        <div class="bg-warning-4 w-full h-12"></div>
        <div class="bg-warning-5 w-full h-12"></div>
        <div class="bg-warning-6 w-full h-12"></div>
        <div class="bg-warning-7 w-full h-12"></div>
        <div class="bg-warning-8 w-full h-12"></div>
        <div class="bg-warning-9 w-full h-12"></div>
        <div class="bg-warning-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-lg text-neutrals-9 text-left">E – <span class=" text-error-6 ">ERROR</span></div>
      <div class="rounded flex justify-between w-full mb-4">
        <div class="bg-error-1 w-full h-12"></div>
        <div class="bg-error-2 w-full h-12"></div>
        <div class="bg-error-3 w-full h-12"></div>
        <div class="bg-error-4 w-full h-12"></div>
        <div class="bg-error-5 w-full h-12"></div>
        <div class="bg-error-6 w-full h-12"></div>
        <div class="bg-error-7 w-full h-12"></div>
        <div class="bg-error-8 w-full h-12"></div>
        <div class="bg-error-9 w-full h-12"></div>
        <div class="bg-error-10 w-full h-12"></div>
      </div>

      <div class="font-bold text-sm uppercase text-neutrals-10 mb-4 text-left">Form Style</div>
      <div >
        <label for="input" class="block text-sm font-medium text-neutral-9 mb-2">Input Label</label>
        <input type="text" name="input" class="w-full border border-neutrals-4 rounded shadow-sm px-3 py-2 focus:outline-none focus:border-secondary-6 focus:ring-1 focus:ring-brand-6">
      </div>
      <div>
        <label for="select" class="block text-sm font-medium text-neutral-9 mb-2">Select Input</label>
        <select name="select" id="select" class="appearance-none w-full border border-neutrals-4 rounded shadow-sm px-3 py-2 focus:outline-none focus:border-secondary-6 focus:ring-1 focus:ring-brand-6">
          <option value="">Select Value</option>
          <option value="">Cassandra Kathrina Brucelo</option>
          <option value="">Louie Jocson</option>
          <option value="">Christine Faith Timpug</option>
        </select>
      </div>


      <div class="font-bold text-sm uppercase text-neutrals-10 mb-4 text-left">Button Style</div>
      <!-- Here sa button tin -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
