<script setup></script>

<template>
  <div class="mb-2">
    <header data-bs-theme="dark">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" :to="{ name: 'home' }">TNP Bio</RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" :to="{ name: 'product' }"
                  >분야별 제품정보</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" :to="{ name: 'brand' }">취급브랜드</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" :to="{ name: 'event' }">이벤트</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" :to="{ name: 'price' }">견적의뢰</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link active" :to="{ name: 'company' }">회사소개</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
/*
.navbar-nav {
  align-items: center;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
}
  */
</style>
