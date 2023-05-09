<template>
  <div class="to">
    <div class="container">
        <div class="row">
            <div class="col-ml-8 mx-auto text-left mt-4">
                <p class="h2">Технологічні операції:</p>
                <div class='row form-to'>
                  <div class="col">
                    <AddTO />
                  </div>
                  <div class='col'>
                    <EditTO />
                  </div>
                </div>
                <table class="table table-sm table-dark mt-4">
                <thead>
                    <tr>
                    <th scope="col">idTO</th>
                    <th scope="col">idManufacturedDetail</th>
                    <th scope="col">sequenceNumber</th>
                    <th scope="col">duration</th>
                    <th scope="col">district</th>
                    <th scope="col">department</th>
                    <th scope="col">equipmentTimeCost</th>
                    <th scope="col">workerTimeCost</th>
                    <th scope="col">cost</th>
                    <th scope="col">name</th>
                    <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>  
                    <tr :key="to.idTO" v-for="to in $store.state.tos">
                        <th scope="row">{{ to.idTO }}</th>
                        <td>{{ to.idManufacturedDetail }}</td>
                        <td>{{ to.sequenceNumber }}</td>
                        <td>{{ to.duration }}</td>
                        <td>{{ to.district }}</td>
                        <td>{{ to.department }}</td>
                        <td>{{ to.equipmentTimeCost }}</td>
                        <td>{{ to.workerTimeCost }}</td>
                        <td>{{ to.cost }}</td>
                        <td>{{ to.name }}</td>
                        <td>
                            <button class="bin-button" @click="deleteTO(to.idTO)">
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
import AddTO from '../components/AddTO.vue'
import EditTO from '../components/EditTO.vue'

export default {
  name: 'TOView',
  components: {
    EditTO,
    AddTO
  },
  methods: {
    async deleteTO(id) {
        this.$store.dispatch('deleteTO', id).then(() => {
        this.$router.go(0)
        })
    },
  },
  created() {
    this.$store.dispatch("fetchTOs")
  }
}
</script>

<style scoped>
.form-to {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 90%;
    margin-left: 5%;
    padding-left: 5%;
}
</style>
