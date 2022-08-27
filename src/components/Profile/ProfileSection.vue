<template>
  <div
    class="border-t-2 border-r-2 border-b-2 border-slate-300 overflow-auto row-span-full p-5 rounded-r-lg overflow-auto scroll-hidden"
  >
    <div class="sticky top-0 bg-white px-5">
      <h3 class="font-bold text-lg text-center pb-8 pt-4">Profile</h3>
    </div>
    <div class="shadow-lg p-3 rounded-lg mt-5">
      <h3 class="text-left py-2 font-semibold">Profile Details</h3>
      <div class="grid justify-items-center">
        <div class="grid justify-center w-1/3">
          <img
            src="../../assets/home-comm.png"
            alt="Home community"
            class="h-24"
          />
          <div class="text-center">
            <p class="">Umesh Palival jkhkhkhkhkjjjjj</p>
          </div>
        </div>
      </div>
      <div class="flex justify-evenly m-2">
        <div>
          <button class="bg-blue-400 px-3 py-1 rounded">
            <i class="fa-solid fa-plus"></i>
            Create Post
          </button>
        </div>
        <div>
          <button class="bg-blue-400 px-3 py-1 rounded">
            <i class="fa-solid fa-pen-to-square"></i>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
    <div class="shadow-lg p-3 rounded-lg">
      <h3 class="text-left py-2 font-semibold">Channel Details</h3>

      <div class="flex items-center">
        <div class="rounded-full w-16">
          <img
            src="../../assets/home-comm.png"
            alt="Home community"
            class="h-16"
          />
        </div>
        <div class="flex flex-col flex-1 ml-2">
          <p>Channel Name</p>
          <p>Private</p>
          <p>Admin: <span>Mark </span></p>
        </div>
        <div class="w-32">
          <button class="bg-blue-400 py-1 rounded w-full">
            <i class="fa-solid fa-pen-to-square"></i>
            Edit Channel
          </button>
        </div>
      </div>
    </div>
    <JoinRequest />
  </div>
</template>

<script>
import JoinRequest from "../Community/JoinRequest.vue";
export default {
  name: "ProfileSection",
  components: { JoinRequest },
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
