<script setup>
</script>

<template>
  <main class="home-page">
    <div class="buttons" id="profile">
      <a href="profile.html">
        <button type="button">
          <span class="material-symbols-outlined">
            person
          </span>
        </button>
      </a>
    </div>
  </main>
</template>

<style Lang="scss">
buttons .material-symbols-outlined { 
    font-size: 2rem;
    color: var(--light);
    transition: 0.2ms ease-out; 
  
  }

/* Add this for testing: */
#profile button .material-symbols-outlined { 
  font-size: 3rem; /* Use a larger size to see it clearly */
  color: red !important; /* Force red color for visibility */ 
}
</style>