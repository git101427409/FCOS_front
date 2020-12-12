<template>
  <div>
    <div class="nav">
      <!-- 後台nav -->
      <router-link :to="{ name: 'rest-list'}">檢視餐廳資料</router-link> |
      <router-link :to="{ name: 'rest-create'}">新增餐廳</router-link> |
      <router-link :to="{ name: 'meal-create'}">新增餐點</router-link> |
      <router-link :to="{ name: 'menuCategory-create'}">新增菜單分類</router-link>
    </div>
    <router-view/>
  </div>
</template>
