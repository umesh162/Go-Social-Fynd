<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        v-show="true"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <form class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between w-96">
            <h3 class="text-2xl">Create Post</h3>
            <svg
              @click="toggle"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <div class="flex justify-center">
              <div
                class="flex items-center justify-center w-full h-60 border-2 border-dashed border-red-400"
              >
                <button>Click Here to Upload</button>
              </div>
            </div>

            <div class="my-2">
              <textarea
                type="text"
                placeholder="Description"
                class="w-full rounded-md"
                v-model="des"
              />
            </div>
          </div>
          <div>
            <button type="submit" v-on:click.prevent="createPost">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CreatePost",
  props: {
    toggle: {
      type: Function,
      required: true,
    },
  },
  computed: {
    ...mapState("comm", ["singleChannel"]),
  },
  data() {
    return {
      isOpen: false,
      des: "",
    };
  },

  methods: {
    async createPost() {
      let payload = {
        title: this.des,
        communityName: this.singleChannel.data._id,
      };
      console.log(payload);
      await this.$store.dispatch("comm/CreatePost", payload);
      this.toggle();
    },
  },
};
</script>

<style></style>
