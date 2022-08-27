<template>
  <div
    class="border-t-2 border-l-2 border-b-2 row-span-full border-slate-300 overflow-auto scroll-hidden before rounded-l-lg"
  >
    <div class="sticky top-0 bg-white p-5">
      <h2 class="font-bold text-lg text-center">Community</h2>

      <input type="text" placeholder="Search" class="w-full rounded-md" />
    </div>
    <div class="px-3">
      <div v-for="index in 50" :key="index" class="">
        <div class="flex items-center m-2 border-2 p-1 rounded-lg shadow-lg">
          <div class="border-2 rounded-full w-16">
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
  </div>
</template>

<script>
export default {
  name: "CommList",
};
</script>

<style>
.scroll-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.scroll-hidden::-webkit-scrollbar {
  /* Firefox */
  display: none;
}
</style>
