

<template>
   <div class="w-1/4 sm:w-1/5">
     <FacebookAuth :appId="facebookAppId" @on-submit="handleResponse">
       <button>Facebook</button>
     </FacebookAuth>
   </div>
    <!-- <h1>Is Initialized: {{ Vue3GoogleOauth.isInit }}</h1>
    <h1>Is Authorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
    <h2 v-if='user'>Logged in user: {{ user }}</h2>

    <button @click='handleSignIn' :disabled='!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized'>Sign In</button>
    <button @click='handleSignOut' :disabled='!Vue3GoogleOauth.isAuthorized'>Sign Out</button> -->
</template>

<script lang="ts" setup>
import FacebookAuth from './FacebookAuth.vue';
import { ref } from 'vue'

    
console.log(import.meta.env.VITE_FACEBOOK_APP_ID)


const facebookAppId = import.meta.env.VITE_FACEBOOK_APP_ID;
    const response: any = ref(null);

const handleResponse = (value: any): void => {
      response.value = JSON.stringify(value, null, 4);
      // closeAuth();
    }
</script>
