<template>
<form class='edit-dzo-form' @submit.prevent="onSubmit">
  <p class="h4 my-3 d-flex align-items-center justify-content-center">Змінити ДЗО:</p>
  <div class="form-group my-1 row">
    <label for="idDetail" class="form-label col">ID Detail:</label>
    <input type="number" class="form-control col" id="idDetail" name="idDetail" required>
  </div>
  <div class="form-group my-1 row">
    <label for="idParentDetail" class="form-label col">ID Parent Detail:</label>
    <input type="number" class="form-control col" id="idParentDetail" name="idParentDetail">
  </div>
  <div class="form-group my-1 row">
    <label for="cost" class="form-label col">Cost:</label>
    <input type="float" class="form-control col" id="cost" name="cost">
  </div>
  <div class="form-group my-1 row">
    <label for="weight" class="form-label col">Weight:</label>
    <input type="float" class="form-control col" id="weight" name="weight">
  </div>
  <div class="form-group my-1 row">
    <label for="name" class="form-label col">Name:</label>
    <input type="text" class="form-control col" id="name" name="name">
  </div>
  <div class="form-group my-1 row">
    <label for="isManufactured" class="form-label col">Is Manufactured:</label>
    <select class="form-control col" id="isManufactured" name="isManufactured">
      <option value="1">Yes</option>
      <option value="0">No</option>
    </select>
  </div>
  <div class="d-flex align-items-center justify-content-center">
  <button type="submit" class="btn btn-primary my-4">Submit</button>
  </div>
</form>
</template>

<script>
export default {
  name: 'EditDZO',
  components: {
  },
  methods: {
    async onSubmit(e) {
        e.preventDefault()
        const idDetail = parseInt(e.target.idDetail.value)
        const idParentDetail = e.target.idParentDetail.value ? parseInt(e.target.idParentDetail.value) : null
        const cost = e.target.cost.value ? parseFloat(e.target.cost.value) : null
        const weight = e.target.weight.value ? parseFloat(e.target.weight.value) : null
        const name = e.target.name.value || null
        const isManufactured = parseInt(e.target.isManufactured.value)
        console.log(idDetail, idParentDetail, cost, weight, name, isManufactured)
        
        this.$store.dispatch("editDZO", { idDetail, idParentDetail, cost, weight, name, isManufactured })
        this.$router.go(0)
    }
  },
}
</script>

<style scoped>
.edit-dzo-form {
    text-align: left;
    width: 90%;
}
</style>
