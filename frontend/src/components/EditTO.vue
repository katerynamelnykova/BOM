<template>
<form class='edit-to-form' @submit.prevent="onSubmit">
  <p class="h4 my-3 d-flex align-items-center justify-content-center">Змінити ТО:</p>
  <div class="mb-1 row">
    <label for="idTO" class="form-label col">ID TO<span class="text-danger">*</span></label>
    <input type="text" class="form-control col" id="idTO" name="idTO" required>
  </div>
  <div class="mb-1 row">
    <label for="idManufacturedDetail" class="form-label col">ID Manufactured Detail</label>
    <input type="text" class="form-control col" id="idManufacturedDetail" name="idManufacturedDetail">
  </div>
  <div class="mb-1 row">
    <label for="sequenceNumber" class="form-label col">Sequence Number</label>
    <input type="text" class="form-control col" id="sequenceNumber" name="sequenceNumber">
  </div>
  <div class="mb-1 row">
    <label for="duration" class="form-label col">Duration</label>
    <input type="text" class="form-control col" id="duration" name="duration">
  </div>
  <div class="mb-1 row">
    <label for="district" class="form-label col">District</label>
    <input type="text" class="form-control col" id="district" name="district">
  </div>
  <div class="mb-1 row">
    <label for="department" class="form-label col">Department</label>
    <input type="text" class="form-control col" id="department" name="department">
  </div>
  <div class="mb-1 row">
    <label for="equipmentTimeCost" class="form-label col">Equipment Time Cost</label>
    <input type="text" class="form-control col" id="equipmentTimeCost" name="equipmentTimeCost">
  </div>
  <div class="mb-1 row">
    <label for="workerTimeCost" class="form-label col">Worker Time Cost</label>
    <input type="text" class="form-control col" id="workerTimeCost" name="workerTimeCost">
  </div>
  <div class="mb-1 row">
    <label for="cost" class="form-label col">Cost</label>
    <input type="text" class="form-control col" id="cost" name="cost">
  </div>
  <div class="mb-1 row">
    <label for="name" class="form-label col">Name</label>
    <input type="text" class="form-control col" id="name" name="name">
    <div class="invalid-feedback">Please enter a name.</div>
  </div>
  <div class="d-flex align-items-center justify-content-center">
    <button type="submit" class="btn btn-primary my-3">Submit</button>
  </div>
</form>
</template>

<script>
export default {
  name: 'EditTO',
  components: {
  },
  methods: {
    async onSubmit(e) {
        e.preventDefault()
        const idTO = parseInt(e.target.idTO.value)
        const idManufacturedDetail = e.target.idManufacturedDetail.value ? parseInt(e.target.idManufacturedDetail.value) : null
        const sequenceNumber = e.target.sequenceNumber.value ? parseInt(e.target.sequenceNumber.value) : null
        const duration = e.target.duration.value ? parseFloat(e.target.duration.value) : null
        const district = e.target.district.value || null
        const department = e.target.department.value || null
        const equipmentTimeCost = e.target.equipmentTimeCost.value ? parseFloat(e.target.equipmentTimeCost.value) : null
        const workerTimeCost = e.target.workerTimeCost.value ? parseFloat(e.target.workerTimeCost.value) : null
        const cost = e.target.cost.value ? parseFloat(e.target.cost.value) : null
        const name = e.target.name.value || null
        
        this.$store.dispatch("editTO", { idTO, idManufacturedDetail, sequenceNumber, duration, district, department, equipmentTimeCost, workerTimeCost, cost, name })
        this.$router.go(0)
    }
  },
}
</script>

<style scoped>
.edit-to-form {
    text-align: left;
    width: 70%;
}
</style>
