<script setup>




 

</script>



<template>

<v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item to="/">
                  <v-list-item-title>
                    Home
                  </v-list-item-title>
                </v-list-item>
              <v-list-item to="/aboutPage">
              <v-list-item-title>
                About Us
            </v-list-item-title>
                </v-list-item>
                <v-list-item to="/searchPage">
                  <v-list-item-title>
                  Contact Page
                  </v-list-item-title>
                </v-list-item>
                <v-list-item to="/settingsPage">
                  <v-list-item-title>
                    Settings
                  </v-list-item-title>
                </v-list-item>
                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey-lighten-4"
                >
                  <v-list-item-title>
                    Refresh
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<style>
body{
font-family: 'Times New Roman', Times, serif;
background-color: rgb(171, 207, 233);
text-align: center;
 }

</style>
