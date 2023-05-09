<template>
  <div class="home">
      <div class="jumbotron jumbotron-fluid form-row text-center" id="lending">
        <div class="col-12 landing">
            <div class='landing-text'>
              <h1 class="display-4">Вітаємо у панелі адміністратора BOM, </h1>
              <h2 class="my-3">тут ви можете переглядати та змінювати</h2>
              <h2 class="my-3">дані про структуру продукту</h2>
              <h2 class="my-4">Оберіть таблицю яку бажаєте переглянути:</h2>
            
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-4">
                <router-link to='/dzo' class="btn btn-dark btn-lg mt-4">
                  Деталі або зборочні одиниці
                </router-link>
                </div>
                <div class="col-4">
                <router-link to='/to' class="btn btn-secondary btn-lg my-4" href="#">
                  Технологічні операції
                </router-link>
                </div>
            </div>
            </div>
            </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
}
</script>

<style scoped>
.landing {
  padding-top: 10%;
  padding-bottom: 5%;
  background-image: url('../../public/background.png');
  background-repeat: no-repeat;
  background-size: 100% 130%;
  background-position: 0px 80px;
}
.landing-text {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 3%;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
}
</style>
