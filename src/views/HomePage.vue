<script setup>
import { ref } from 'vue';

let wordText = ref('')
let valueThing = ref()

async function asyncfunction(){
const result = await fetch ('https://api.dictionaryapi.dev/api/v2/entries/en/' + wordText.value);
console.log(result)
let jsonValue = await result.json();
valueThing.value = jsonValue

}
</script>

<template>
  <v-btn @click="asyncfunction">Fetch</v-btn>

<h1>Dictonary</h1>
<v-text-field v-model="wordText" label="Search" @keydown.enter="asyncfunction"></v-text-field>
<h1 v-for="value in valueThing?.[0]?.meanings?.[0]?.definitions">
{{ value.definition }}
</h1>

</template>