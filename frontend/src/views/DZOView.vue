<template>
  <div class="dzo">
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto text-left mt-4">
                <p class="h2">Деталі або зборочні одиниці:</p>
                <table class="table table-sm table-dark mt-4">
                <thead>
                    <tr>
                    <th scope="col">idDetail</th>
                    <th scope="col">idParentDetail</th>
                    <th scope="col">cost</th>
                    <th scope="col">weight</th>
                    <th scope="col">name</th>
                    <th scope="col">isManufactured</th>
                    <th> </th>
                    </tr>
                </thead>
                <tbody>  
                    <tr :key="dzo.idDetail" v-for="dzo in $store.state.dzos">
                        <th scope="row">{{ dzo.idDetail }}</th>
                        <td>{{ dzo.idParentDetail }}</td>
                        <td>{{ dzo.cost }}</td>
                        <td>{{ dzo.weight }}</td>
                        <td>{{ dzo.name }}</td>
                        <td>{{ dzo.isManufactured }}</td>
                        <td>
                            <button class="bin-button" @click="deleteDZO(dzo.idDetail)">
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DZOView',
  components: {
  },
  methods: {
    async deleteDZO(id) {
        this.$store.dispatch('deleteDZO', id).then(() => {
        this.$router.go(0)
        })
    },
  },
  created() {
    this.$store.dispatch("fetchDZOs")
  }
}
</script>

<style>
.bin-button {
    background: transparent;
    border-color: transparent;
    color: white;
}
</style>
