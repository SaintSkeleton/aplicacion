<template>
    <div class="form-container">
        <div class="store-dropdown">
            <label for="store">Seleccionar Tienda:</label>
            <input type="text" v-model="searchQuery" placeholder="Buscar tienda...">
            <select id="store" v-model="selectedStore">
                <option v-for="(store, index) in filteredStores" :key="index" :value="store">
                    {{ store }}
                </option>
            </select>
        </div>
        <div class="tabs">
            <div class="tab" v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                :class="{ 'active': activeTab === index }">
                {{ tab.label }}
            </div>
        </div>
        <div class="form-content">
            <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
                <h2>{{ tab.title }}</h2>
                <input type="file" @change="handleFileUpload(index)" accept="image/*">
                <div v-if="tab.uploadedFile">
                    <p>Archivo subido: {{ tab.uploadedFile.name }}</p>
                    <button class="confirmation-button">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            selectedStore: '',
            searchQuery: '',
            stores: [
                'Bershka Altabrisa',
                'Bershka Andamar',
                'Bershka La Ceiba',
                'Bershka La Laguna',
                'Bershka Paseo Durango',
                'Bershka Plaza Ambar',
                'Lefties Parque Delta',
                'MD Andares',
                'MD Antara Polanco',
                'MD Plaza Satélite ',
                'Oysho La Isla',
                'Pull & Bear Altabrisa',
                'Pull & Bear Galerias Mty',
                'Pull & Bear Las Américas',
                'Pull & Bear Paseo Del Carmen',
                'Pull & Bear Paseo Durango',
                'Pull & Bear Plaza Averanda',
                'Stradivarius Altama City',
                'Stradivarius Angelopolis',
                'Stradivarius Plaza Antea',
                'Stradivarius Plaza Mayor',
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
                'Zara Plaza Satélite'
            ],
            tabs: [
                {
                    label: 'Paso 1',
                    title: 'Solicitud de constancia de representatividad',
                    uploadedFile: null
                },
                {
                    label: 'Paso 2',
                    title: 'Aviso de tramite',
                    uploadedFile: null
                },
                {
                    label: 'Paso 3',
                    title: 'Constancias de representatividad',
                    uploadedFile: null
                }
            ]
        };
    },
    computed: {
        filteredStores() {
            return this.stores.filter(store =>
                store.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    },
    methods: {
        handleFileUpload(event) {
            // Handle file upload and retrieve file information
            const fileInput = event.target;
            const file = fileInput.files[0];
            const fileType = this.getFileType(file.name);
            const store = this.selectedStore;

            // Set the uploaded file for the current tab
            this.$set(this.tabs[this.activeTab], 'uploadedFile', file);

            // Navigate back to homepage with uploaded file information as query parameters
            this.$router.push({
                path: '/',
                query: {
                    store: store,
                    fileType: fileType
                }
            });
        }
        ,
        getFileType(fileName) {
            // Determine file type based on file name
            // You can implement your own logic here
            if (fileName.includes('type1')) return 0;
            else if (fileName.includes('type2')) return 1;
            else if (fileName.includes('type3')) return 2;
            else return -1; // Invalid file type
        }
    }
};
</script>

<style scoped>
.form-container {
    width: 80%;
    margin: 0 auto;
}

.store-dropdown {
    margin-bottom: 20px;
}

.tabs {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}

.tab {
    padding: 10px;
    cursor: pointer;
}

.tab.active {
    font-weight: bold;
}

.form-content {
    padding: 20px 0;
}

.input-container {
    margin-bottom: 20px;
}

.confirmation-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

.confirmation-button:hover {
    background-color: #45a049;
}
</style>