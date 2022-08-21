<template>
  <div class="border-2 row-span-full border-red-500 overflow-auto">
    <div class="flex justify-center">
      <h2 class="font-bold text-lg">Community</h2>
    </div>
    <div>
      <input type="text" placeholder="Search" class="w-full rounded-md" />
    </div>
    <div v-for="index in 50" :key="index" class="">
      <div class="flex items-center m-2">
        <div class="border-2 border-red-500 rounded-full w-16">
          <img
            src="../../assets/home-comm.png"
            alt="Home community"
            class="h-14"
          />
        </div>
        <div class="mx-5">
          <p>Channel Name</p>
          <p>Private</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommList",
};
</script>

<style></style>
