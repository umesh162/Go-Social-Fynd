<template>
  <div>
    <img
      src="../../assets/home-comm.png"
      alt="Home community"
      class="h-80 mx-auto"
    />
    <p class="mt-6 text-xl font-semibold text-center">Let's get Started!</p>
    <p class="mt text-lg font-semibold text-center">
      Start your activity by creating first channel or joining or any existing
      channel
    </p>
    <div class="flex mx-auto justify-center mt-6">
      <button
        type="button"
        class="btn mr-4 btn-primary bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-5 py-3 rounded-md"
      >
        New Channel
      </button>
      <button
        type="button"
        class="btn ml-4 btn-outline-primary px-5 py-3 rounded-md border-2"
      >
        Join channel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewUser",
};
</script>

<style></style>
