<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to='/'>Bill of Material Admin Panel</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <router-link class="nav-link" to='/'>Головна</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" to='/dzo'>ДЗО</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link" to='/to'>ТО</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>