<template>
  <div class="flex justify-center">
    <div class="bg-gray-200 w-2/5 py-5 px-3">
      <div class="flex flex-row justify-between items-center">
        <h1>community</h1>

        <i class="fa-solid fa-circle-xmark"></i>
      </div>
      <div>
        <input
          placeholder="Search community"
          class="border-2 border-gray-500 w-full my-3 p-2"
        />
      </div>
      <div
        class="flex items-center w-full my-5"
        v-for="index in 5"
        :key="index"
      >
        <div class="w-20 px-2">
          <img
            src="../../assets/home-comm.png"
            alt="Home community"
            class="h-14 w-16 mx-auto rounded-full"
          />
        </div>
        <div class="mx-3">
          <h3>Study</h3>
          <p>Private</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            ipsa
          </p>
        </div>
        <div class="flex-1 self-center">
          <button class="bg-red-500 px-5 py-1 rounded-lg">Join</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
