<template>
    <div>
      <h2>Package</h2>
      <ul>
        <li v-for="pkg in packageList" :key="pkg.id">
          {{ pkg.name }} - ${{ pkg.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        packageList: [], // Store the packages
      };
    },
    async mounted() {
   
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/packages'); // Fetch data from Laravel
        // console.log("this data:",response);
        this.packageList = response.data; // Set the packages data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  </script>
  