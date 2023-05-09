<template>
<form class='add-to-form'>
  <p class="h4 my-3 d-flex align-items-center justify-content-center">Додати ТО:</p>
  <div class="mb-2 row row">
    <label for="idManufacturedDetail" class="form-label col col">ID Manufactured Detail</label>
    <input type="text" class="form-control col col" id="idManufacturedDetail" name="idManufacturedDetail">
  </div>
  <div class="mb-2 row">
    <label for="sequenceNumber" class="form-label col">Sequence Number</label>
    <input type="text" class="form-control col" id="sequenceNumber" name="sequenceNumber">
  </div>
  <div class="mb-2 row">
    <label for="duration" class="form-label col">Duration</label>
    <input type="text" class="form-control col" id="duration" name="duration">
  </div>
  <div class="mb-2 row">
    <label for="district" class="form-label col">District</label>
    <input type="text" class="form-control col" id="district" name="district">
  </div>
  <div class="mb-2 row">
    <label for="department" class="form-label col">Department</label>
    <input type="text" class="form-control col" id="department" name="department">
  </div>
  <div class="mb-2 row">
    <label for="equipmentTimeCost" class="form-label col">Equipment Time Cost</label>
    <input type="text" class="form-control col" id="equipmentTimeCost" name="equipmentTimeCost">
  </div>
  <div class="mb-2 row">
    <label for="workerTimeCost" class="form-label col">Worker Time Cost</label>
    <input type="text" class="form-control col" id="workerTimeCost" name="workerTimeCost">
  </div>
  <div class="mb-2 row">
    <label for="cost" class="form-label col">Cost</label>
    <input type="text" class="form-control col" id="cost" name="cost">
  </div>
  <div class="mb-2 row">
    <label for="name" class="form-label col">Name <span class="text-danger">*</span></label>
    <input type="text" class="form-control col" id="name" name="name" required>
    <div class="invalid-feedback">Please enter a name.</div>
  </div>
  <div class="d-flex align-items-center justify-content-center">
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  </div>
</form>
</template>

<script>
export default {
  name: 'AddTO',
  components: {
  },
}
</script>

<style scoped>
.add-to-form {
    text-align: left;
    width: 70%;
    margin-left: 15%;
}
</style>
