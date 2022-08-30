<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        v-show="true"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex justify-between">
            <h3 class="text-2xl">Community List</h3>
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
          <div>
            <div>
              <input
                placeholder="Search community"
                class="border-2 border-gray-500 w-full my-3 p-2"
              />
            </div>
            <div class="h-96 overflow-auto">
              <div
                class="flex items-center w-full my-5 shadow-lg rounded-lg border p-3"
                v-for="index in commList"
                :key="index._id"
              >
                <div class="w-24 px-2">
                  <img
                    :src="index.communityImage"
                    alt="Home community"
                    class="h-16 w-24 rounded-full"
                  />
                </div>
                <div class="mx-3">
                  <div class="flex">
                    <h3>{{ index.communityName }}</h3>
                    <p class="text-cyan-500 mx-3">{{ index.type }}</p>
                  </div>
                  <p>
                    {{ index.description }}
                  </p>
                </div>
                <div class="self-center w-44">
                  <button
                    class="bg-violet-400 px-5 py-1 w-full rounded-lg hover:bg-violet-500"
                    @click.prevent="joinComm(index._id)"
                  >
                    Join
                  </button>
                </div>

                <!-- <div class="self-center w-44">
                <button class="bg-red-500 px-5 py-1 w-full rounded-lg hover:bg-red-700">
                  Join Request
                </button>
              </div>  -->
                <!-- <div class="self-center w-44">
                <button class="bg-cyan-300 px-5 py-1 w-full rounded-lg ">
                  Request Send
                </button>
              </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AllCommModal",
  props: {
    toggle: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState("comm", ["commList"]),
  },
  methods: {
    async joinComm(id) {
      let payload = {
        communityId: id,
      };
      await this.$store.dispatch("comm/joinCommunity", payload);
      await this.$store.dispatch("comm/getAllCOmmunity");
      await this.$store.dispatch("comm/getUserJoinComm");
    },
  },
  async created() {
    await this.$store.dispatch("comm/getAllCOmmunity");
  },
};
</script>

<style></style>
