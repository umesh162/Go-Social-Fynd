<template>
  <div class="shadow-lg p-3 rounded-lg mt-5">
    <div>
      <p class="text-left py-2 font-semibold">Joining Request</p>
    </div>
    <div v-for="index in 3" :key="index" class="">
      <div
        class="flex items-center justify-between shadow-md rounded-md p-2 mt-2"
      >
        <p>Umesh Palival</p>
        <div class="flex w-28 justify-between">
          <div class="border-2 rounded-full bg-green-300">
            <button class="px-4 py-3">
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
          <div class="border-2 rounded-full bg-red-500">
            <button class="px-5 py-3">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinRequest",
};
</script>

<style></style>
