<template>
  <div class="dzo">
    <div class="container">
        <div class="row">
            <div class="col-md-8 mx-auto text-left mt-4">
                <p class="h2">Деталі або зборочні одиниці:</p>
                <div class='row form-dzo'>
                    <div class="col">
                        <AddDZO />
                    </div>
                    <div class='col'>
                        <EditDZO />
                    </div>
                </div>
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
import AddDZO from '../components/AddDZO.vue'
import EditDZO from '../components/EditDZO.vue'

export default {
  name: 'DZOView',
  components: {
    AddDZO,
    EditDZO
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

<style scoped>
.form-dzo {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
    padding-left: 15px;
}
</style>
