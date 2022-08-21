<template>
  <div class="border-2 border-yellow-500 overflow-auto row-span-full p-5">
    Profile
    <div class="">
      Profile Details
      <div class="grid justify-items-center">
        <div class="grid justify-center w-1/3">
          <img
            src="../../assets/home-comm.png"
            alt="Home community"
            class="h-24"
          />
          <div class="px-5">
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
    <div class="">
      Channel Details
      <div class="flex items-center">
        <div class="border-2 border-red-500 rounded-full w-28">
          <img
            src="../../assets/home-comm.png"
            alt="Home community"
            class="h-24"
          />
        </div>
        <div class="mx-5">
          <p>Channel Name</p>
          <p>Private</p>
          <p>Admin: <span>Mark </span></p>
        </div>
        <div>
          <button class="bg-blue-400 px-3 py-1 rounded">
            <i class="fa-solid fa-pen-to-square"></i>
            Edit Channel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSection",
};
</script>

<style></style>
