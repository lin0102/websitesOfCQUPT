<template>
    <div class="header">
        <div class="navmain">
            <img src="../assets/logo.png" alt="logo" class="logo">
            <div class="backold"><a href="https://hongyan.cqupt.edu.cn/web/">回到旧版</a></div>
        </div>
    </div>
</template>
<style scoped>
.header {
  background-color: #5785fb;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  width: 100%;
  padding-bottom: 10px;
  align-items: flex-end;
}
.navmain {
  display: flex;
  justify-content: space-between;
  width: 992px;
  align-items:flex-end;
}
.backold {
  color: white;
  flex-shrink: 0;
  white-space: nowrap;
  /* position: relative;
  left: 105px; */
}
.backold a {
  text-decoration: none;
}
.backold a:hover {
  text-decoration-line: underline;
}
.backold a:link, .backold a:visited {
  color: white;
}
</style>
