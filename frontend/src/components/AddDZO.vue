<template>
<form class='add-dzo-form' @submit.prevent="onSubmit">
  <p class="h4 my-4 mb-4 d-flex align-items-center justify-content-center">Додати ДЗО:</p>
  <div class="form-group my-2 row">
    <label for="idParentDetail" class="form-label col">ID Parent Detail:</label>
    <input type="number" class="form-control col" id="idParentDetail" name="idParentDetail">
  </div>
  <div class="form-group my-2 row">
    <label for="cost" class="form-label col">Cost:</label>
    <input type="float" class="form-control col" id="cost" name="cost">
  </div>
  <div class="form-group my-2 row">
    <label for="weight" class="form-label col">Weight:</label>
    <input type="float" class="form-control col" id="weight" name="weight">
  </div>
  <div class="form-group my-2 row">
    <label for="name" class="form-label col">Name:</label>
    <input type="text" class="form-control col" id="name" name="name" required>
  </div>
  <div class="form-group my-2 row">
    <label for="isManufactured" class="form-label col">Is Manufactured:</label>
    <select class="form-control col" id="isManufactured" name="isManufactured" required>
      <option value="1">Yes</option>
      <option value="0">No</option>
    </select>
  </div>
  <div class="d-flex align-items-center justify-content-center">
  <button type="submit" class="btn btn-primary mt-4">Submit</button>
  </div>
</form>
</template>

<script>
export default {
  name: 'AddDZO',
  components: {
  },
  methods: {
    async onSubmit(e) {
        e.preventDefault()
        const idParentDetail = e.target.idParentDetail.value ? parseInt(e.target.idParentDetail.value) : null
        const cost = e.target.cost.value ? parseFloat(e.target.cost.value) : null
        const weight = e.target.weight.value ? parseFloat(e.target.weight.value) : null
        const name = e.target.name.value
        const isManufactured = parseInt(e.target.isManufactured.value)

        this.$store.dispatch("addDZO", { idParentDetail, cost, weight, name, isManufactured })
        this.$router.go(0)
    }
  },
}
</script>

<style scoped>
.add-dzo-form {
    text-align: left;
    width: 90%;
}
</style>
