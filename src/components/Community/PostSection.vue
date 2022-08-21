<template>
  <div class="border-2 border-green-500 overflow-auto row-span-full">
    Posts
    <div v-for="index in 20" :key="index">
      <div class="m-4 border-2 border-gray-500">
        <div class="flex items-center p-3">
          <div class="border-2 border-red-500 rounded-full w-16">
            <img
              src="../../assets/home-comm.png"
              alt="Home community"
              class="h-14"
            />
          </div>
          <div class="flex-1 mx-4">
            <h3>Umesh Palival</h3>
            <p>Posted 2 hours ago</p>
          </div>
          <div>
            <button>
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
        <div class="">
          <img src="../../assets/home-comm.png" alt="Home community" />
        </div>
        <div class="flex items-center justify-around">
          <div>
            <button>
              <i class="fa-regular fa-heart"></i>
              Like
            </button>
          </div>
          <div>
            <button>
              <i class="fa-regular fa-comment"></i>
              Comments
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSection",
};
</script>

<style></style>
