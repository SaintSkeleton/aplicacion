<template>
  <div class="flex" v-for="(file, k) in filesPreview" :key="k">
    <div
      class="cursor-pointer"
      @click="selectFile(k)"
      @dragover.prevent="handleDragOver($event, k, 'reset')"
      @dragleave.prevent="handleDragLeave($event, k, 'reset')"
      @drop="handleDrop($event, k, 'reset')"
    >
      <slot :file="file"></slot>
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        :accept="accept"
        @change="uploadDefaultImage($event, k, 'reset')"
      />
    </div>
    <button
      type="button"
      class="remove-btn bg-[#ccc] h-7 rounded-full dark:bg-stone-500 dark:text-white px-2.5"
      @click="removeImg(k)"
    >
      {{ removeBtnText }}
    </button>
  </div>

  <div
    @click="selectFiles"
    @dragover.prevent="handleDragOver($event, filesPreview.length, 'add')"
    @dragleave.prevent="handleDragLeave($event, filesPreview.length, 'add')"
    @drop="handleDrop($event, filesPreview.length, 'add')"
  >
    <slot></slot>
    <input
      ref="newfilesInput"
      type="file"
      class="hidden"
      :accept="accept"
      @change="uploadDefaultImage($event, filesPreview.length, 'add')"
      multiple
    />
  </div>

  <div class="upload-btn relative" :class="{ 'progress progress-striped active': isUploading }">
    <button
      type="button"
      class="flex items-center justify-center bg-slate-700 dark:text-slate-300 dark:bg-blue-700 text-white flex-none py-3 px-8 rounded-full bottom-0 absolute disabled:opacity-70 disabled:cursor-not-allowed"
      :class="{ 'progress-bar cursor-wait': isUploading }"
      @click="uploadingFunction"
      :disabled="filesPreview.length == 0 ? (files.length == 0 ? true : false) : false"
    >
      {{ isUploading ? progressBtnText : uploadBtnText }}
    </button>
  </div>
</template>

<script>
import placeHolderImage from '../assets/images/placeholder.png';
import pdfPreview from '../assets/images/pdf-icon.png';
import textPreview from '../assets/images/text-icon.png';
import audioPreview from '../assets/images/music-icon.png';
import apkPreview from '../assets/images/apk-icon.png';
import zipPreview from '../assets/images/zip-icon.png';
import sqlPreview from '../assets/images/sql-icon.png';
import filePreview from '../assets/images/file-icon.png';

export default {
  name: 'MultipleFileUpload',
  props: {
    accept: {
      type: String
    },
    removeBtnText: {
      type: String,
      default: 'x'
    },
    uploadBtnText: {
      type: String,
      default: 'Upload'
    },
    progressBtnText: {
      type: String,
      default: 'Uploading...'
    },
    uploadedFiles: {
      type: Array,
      required: true
    },
    callback: {
      type: Function,
      required: true
    },
    pdfPreview: {
      type: String,
      default: pdfPreview
    },
    textPreview: {
      type: String,
      default: textPreview
    },
    audioPreview: {
      type: String,
      default: audioPreview
    },
    apkPreview: {
      type: String,
      default: apkPreview
    },
    zipPreview: {
      type: String,
      default: zipPreview
    },
    sqlPreview: {
      type: String,
      default: sqlPreview
    },
    filePreview: {
      type: String,
      default: filePreview
    }
  },
  // ... rest of your component code 
};
</script>
