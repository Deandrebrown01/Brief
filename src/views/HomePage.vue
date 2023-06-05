<script setup>
import { ref } from 'vue';

let wordText = ref('')


async function asyncfunction(){
const result = await fetch ('https://api.dictionaryapi.dev/api/v2/entries/en/' + wordText.value);

console.log(result)

}
</script>

<template>
  <v-btn @click="asyncfunction">Fetch</v-btn>


<input v-model="wordText">

<h1>Dictonary</h1>
<v-text-field label="Label"></v-text-field>

</template>