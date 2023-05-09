<template>
  <div class="to">
    <div class="container">
        <div class="row">
            <div class="col-ml-8 mx-auto text-left mt-4">
                <p class="h2">Технологічні операції:</p>
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
  name: 'TOView',
  components: {
  },
  created() {
    this.$store.dispatch("fetchTOs")
  }
}
</script>
