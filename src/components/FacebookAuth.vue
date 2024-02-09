<template>
  <span class="cursor-pointer" @click="signIn">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { initFacebook, login, logout } from '../config/FaceBookAuth';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'FacebookAuth',
  props: {
    appId: String
  },
  emits: ['on-submit'],
  setup(props: any, { emit }: any) {
    async function signIn() {
      const response = await login();
      console.log(response)
      emit('on-submit', response);
    }

    async function signOut() {
      logout();
    }

    onMounted(async () => {
      initFacebook(props.appId);
    });
    return { signIn, signOut };
  }
});
</script>