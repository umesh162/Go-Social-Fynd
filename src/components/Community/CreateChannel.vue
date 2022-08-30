<template>
  <div class="container w mx-auto">
    <div class="flex justify-center">
      <div
        v-show="true"
        class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between w-80">
            <h3 class="text-2xl">Create Channel</h3>
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
                <input type="file" />
              </div>
            </div>
            <div class="my-2">
              <input
                type="text"
                placeholder="Channel Name"
                class="w-full rounded-md"
              />
            </div>
            <div class="my-2">
              <input
                type="text"
                placeholder="Description"
                class="w-full rounded-md"
              />
            </div>
            <div class="flex justify-around">
              <button
                @click="toggle"
                class="w-24 py-2 text-blue-800 border border-blue-600 rounded"
              >
                Public
              </button>
              <button
                class="w-24 py-2 text-blue-800 border border-blue-600 rounded"
              >
                Private
              </button>
            </div>
            <div class="my-2 flex justify-around">
              <button
                @click="toggle"
                class="w-24 py-2 text-blue-800 border border-blue-600 rounded"
              >
                Admin
              </button>
              <button
                class="w-24 py-2 text-blue-800 border border-blue-600 rounded"
              >
                anyone
              </button>
            </div>
            <div class="flex justify-around">
              <button
                @click="toggle"
                class="w-24 py-2 text-blue-800 border border-blue-600 rounded"
              >
                Cancel
              </button>
              <button class="w-24 py-2 text-blue-100 bg-blue-600 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateChannel",
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
};
</script>

<style></style>
