<template>
  <div
    class="border-y-2 border-slate-300 overflow-auto row-span-full scroll-hidden"
  >
    <div class="py-10 bg-white top-0 sticky">
      <p class="text-center font-bold text-lg">Post</p>
    </div>
    <div v-for="index in 20" :key="index">
      <div class="m-4 border-2 rounded-lg py-3 shadow-lg">
        <div class="flex items-center px-3 pb-1">
          <div class="rounded-full w-16">
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
        <div class="border-y-2">
          <img src="../../assets/home-comm.png" alt="Home community" />
          <div class="w-full">
            <p class="px-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, esse? Dignissimos laborum itaque dolores est magnam, qui
              laboriosam temporibus in suscipit nulla reiciendis ratione debitis
              accusantium cumque sunt nemo maxime.
            </p>
          </div>
        </div>
        <div class="flex items-center justify-around pt-2">
          <div>
            <button class="">
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
    <div class="bottom-24 sticky">
      <button
        class="bg-blue-400 px-6 py-5 rounded-full absolute right-0 hover:bg-slate-400 active:bg-slate-400 focus:outline-none"
        @click="toggle"
      >
        <i class="fa-solid fa-plus fa-lg"></i>
      </button>
    </div>
    <div v-show="visible" class="">
      <CreatePost :toggle="toggle" />
    </div>
  </div>
</template>

<script>
import CreatePost from "./CreatePost.vue";
export default {
  name: "PostSection",
  components: { CreatePost },
  data() {
    return { visible: false };
  },
  methods: {
    toggle() {
      console.log("clickkk", this.visible);
      this.visible = !this.visible;
    },
  },
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
