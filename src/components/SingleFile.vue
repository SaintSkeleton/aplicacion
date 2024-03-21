<template>
  <div class="flex">
    <div
      class="cursor-pointer"
      @click="selectFile()"
      @dragover.prevent="handleDragOver($event)"
      @dragleave.prevent="handleDragLeave($event)"
      @drop="handleDrop($event)"
    >
      <slot :file="file"></slot>
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        :accept="accept"
        @change="handleFileChange($event)"
      />
    </div>
    <div class="upload-btn relative" :class="{ 'progress progress-striped active': isUploading }">
      <button
        type="button"
        class="flex items-center justify-center bg-slate-700 dark:text-slate-300 dark:bg-blue-700 text-white flex-none py-3 px-8 rounded-full bottom-0 absolute disabled:opacity-70 disabled:cursor-not-allowed"
        :class="{ 'progress-bar cursor-wait': isUploading }"
        @click="uploadingFunction"
        :disabled="!file.previewUrl"
      >
        {{ isUploading ? progressBtnText : uploadBtnText }}
      </button>
    </div>
  </div>
</template>

<script>
import pdfPreview from '../assets/images/pdf-icon.png';
import textPreview from '../assets/images/text-icon.png';
import audioPreview from '../assets/images/music-icon.png';
import apkPreview from '../assets/images/apk-icon.png';
import zipPreview from '../assets/images/zip-icon.png';
import sqlPreview from '../assets/images/sql-icon.png';
import filePreview from '../assets/images/file-icon.png';

export default {
  name: 'SingleFileUpload',
  props: {
    accept: {
      type: String
    },
    uploadBtnText: {
      type: String,
      default: 'Upload'
    },
    progressBtnText: {
      type: String,
      default: 'Uploading...'
    },
    uploadedFile: {
      type: Object,
      required: true
    },
    callback: {
      type: Function,
      required: true
    },
    //  ... Your other props 
  },
  data() {
    return {
      isUploading: false,
      file: {
        previewType: '',
        previewUrl: null, 
        previewName: '',
        isDragging: false
      },
      fileObj: {}
    };
  },
  mounted() {
   // ... Your mounted logic 
  },
  methods: {
    async uploadingFunction() {
      this.isUploading = true;
      await this.callback(this.fileObj);

      // Reset the file details:
      this.file = {
        previewType: '',
        previewUrl: null, 
        previewName: '',
        isDragging: false
      };

      if (this.uploadedFile) {
        // ... Your uploadedFile logic  
      }

      this.isUploading = false;
    },
    selectFile() {
      // ... Your file selection logic
    },
    handleFileChange(event) {
      // ... Your file change logic  
    },
    previewFile(file) {
      // ... Your preview logic 
    },
    handleDragOver(event) {
      // ... Your drag over logic 
    },
    handleDragLeave(event) {
      // ...  Your drag leave logic  
    },
    handleDrop(event) {
      // ...  Your drop logic  
    }
  }
};
</script>
