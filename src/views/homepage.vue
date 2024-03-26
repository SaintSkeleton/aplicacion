<template>
  <div class="counter-container">
    <div class="brand-dropdown">
      <label for="brand">Seleccionar Marca:</label>
      <select id="brand" v-model="selectedBrand" @change="updateStoreDropdown">
        <option v-for="(brand, index) in brands" :key="index" :value="brand">
          {{ brand }}
        </option>
      </select>
    </div>

    <div class="store-dropdown">
      <label for="store">Seleccionar Tienda:</label>
      <select id="store" v-model="selectedStore">
        <option v-for="(store, index) in selectedBrandStores" :key="index" :value="store">
          {{ store }}
        </option>
      </select>
    </div>

    <!-- Counters for each file type -->
    <div v-for="(count, index) in fileCounts" :key="index">
      <p>Archivos de tipo {{ index + 1 }}: {{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedBrand: '',
      selectedStore: '',
      brands: ['Bershka', 'Lefties', 'MD', 'Oysho', 'Pull & Bear', 'Stradivarius', 'Zara'], // Example brands
      brandStores: {
        'Bershka': [
          'Bershka Altabrisa',
          'Bershka Andamar',
          'Bershka La Ceiba',
          'Bershka La Laguna',
          'Bershka Paseo Durango',
          'Bershka Plaza Ambar'],
        'Lefties': [
          'Lefties Parque Delta'],
        'MD': [
          'MD Andares',
          'MD Antara Polanco',
          'MD Plaza Satélite '],
        'Oysho': [
          'Oysho La Isla'],
        'Pull & Bear': [
          'Pull & Bear Altabrisa',
          'Pull & Bear Galerias Mty',
          'Pull & Bear Las Américas',
          'Pull & Bear Paseo Del Carmen',
          'Pull & Bear Paseo Durango',
          'Pull & Bear Plaza Averanda'],
        'Stradivarius': [
          'Stradivarius Altama City',
          'Stradivarius Angelopolis',
          'Stradivarius Plaza Antea',
          'Stradivarius Plaza Mayor'],
        'Zara': [
          'Zara Altabrisa',
          'Zara Altama City',
          'Zara Andamar',
          'Zara Andares',
          'Zara Angelopolis',
          'Zara Antara Polanco',
          'Zara Galerias Mty',
          'Zara La Ceiba',
          'Zara La Isla',
          'Zara La Laguna',
          'Zara Las Américas',
          'Zara Parque Delta',
          'Zara Paseo Del Carmen',
          'Zara Plaza Antea',
          'Zara Plaza Averanda',
          'Zara Plaza Mayor',
          'Zara Plaza Satélite']
      },
      uploadedFiles: [],
      fileCounts: [0, 0, 0] // Counter for each file type
    };
  },
  computed: {
    selectedBrandStores() {
      return this.brandStores[this.selectedBrand] || [];
    }
  },
  methods: {
    updateStoreDropdown() {
      this.selectedStore = ''; // Reset selected store when brand changes
    },
    handleFileUpload(event) {
      const fileInput = event.target;
      const file = fileInput.files[0];
      const fileType = this.getFileType(file.name);
      this.uploadedFiles.push({ store: this.selectedStore, fileType });
      this.updateFileCounts();
    },
    getFileType(fileName) {
      // Example function to determine file type based on file name
      // You can implement your own logic here
      if (fileName.includes('type1')) return 0;
      else if (fileName.includes('type2')) return 1;
      else if (fileName.includes('type3')) return 2;
      else return -1; // Invalid file type
    },
    updateFileCounts() {
      this.fileCounts = [0, 0, 0]; // Reset counters
      this.uploadedFiles.forEach(file => {
        if (file.store === this.selectedStore || !this.selectedStore) {
          this.fileCounts[file.fileType]++;
        }
      });
    }
  },
  created() {
    // Update counters when component is created
    this.updateCountersFromRouteParams();
  },
  methods: {
    updateCountersFromRouteParams() {
      const query = this.$route.query;
      // Retrieve uploaded file information from route query parameters
      const store = query.store || '';
      const fileType = parseInt(query.fileType) || -1;

      // Update counters based on retrieved information
      if (store !== '') {
        this.selectedStore = store;
      }
      if (fileType !== -1) {
        this.fileCounts[fileType]++;
      }
    }
  }
};
</script>

<style scoped>
/* CSS styles */
</style>
