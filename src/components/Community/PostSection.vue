<template>
  <div
    class="border-y-2 border-slate-300 overflow-auto row-span-full scroll-hidden"
  >
    <div class="py-10 bg-white top-0 sticky">
      <p class="text-center font-bold text-lg">Post</p>
    </div>
    <div v-for="item in commPost" :key="item._id">
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
            <h3>
              {{
                item.createdBy.user[0].firstname +
                " " +
                item.createdBy.user[0].lastname
              }}
            </h3>
            <p>Posted 2 hours ago</p>
          </div>
          <div>
            <button>
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
        <div class="border-y-2">
          <img
            :src="item.Image"
            alt="Home community"
            class="object-contain p-2 bg-slate-50 h-64 w-full"
          />
          <div class="w-full">
            <p class="px-3">{{ item.title }}</p>
          </div>
        </div>
        <div class="flex items-center justify-around pt-2">
          <div>
            <button
              class=""
              v-on:click.prevent="
                item.isLike ? postUnlike(item._id) : postLike(item._id)
              "
            >
              <i
                class="fa-solid fa-heart"
                style="color: blue"
                v-if="item.isLike"
              ></i>
              <i class="fa-regular fa-heart" v-else></i>
              Like
            </button>
          </div>
          <div>
            <button v-on:click.prevent="commentOnPost(item._id)">
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
import { mapState } from "vuex";
import CreatePost from "./CreatePost.vue";
export default {
  name: "PostSection",
  components: { CreatePost },
  data() {
    return { visible: false };
  },
  computed: {
    ...mapState("comm", ["commPost"]),
  },
  methods: {
    toggle() {
      console.log("clickkk", this.visible);
      this.visible = !this.visible;
    },
    async postLike(id) {
      let payload = {
        postId: id,
      };
      await this.$store.dispatch("comm/LikePost", payload);
    },

    async postUnlike(id) {
      let payload = {
        postId: id,
      };
      await this.$store.dispatch("comm/UnLikePost", payload);
    },

    async commentOnPost(id) {
      let payload = {
        postId: id,
        comment: "Testing Comments",
      };

      await this.$store.dispatch("comm/Comment", payload);
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
