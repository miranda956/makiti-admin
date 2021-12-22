<template>
  <div class="tables-basic">
    <h2 class="page-title">Categories <span class="fw-semi-bold"></span></h2>
    <router-link to="/app/catalog/newcategory">  <button type="button" class="btn btn-primary" @click="goToHome()">New Category</button>
</router-link>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Categories <span class='fw-semi-bold'>Lists</span></h5>"
          customHeader settings close
        >
             <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1"></label>
  </div>
  
</div>
         
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Category</th>
                  <th class="hidden-sm-down">Category Type</th>
                  <th class="hidden-sm-down">Actions</th>



                </tr>
              </thead>
              <tbody>
             
              </tbody>
            </table>
          </div>
          
        </Widget>
      </b-col>
    </b-row>
    <b-row>
     
     
   </b-row>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
  goToHome(){
   this.$router.push('/app/components/staff'); 
      }
  }

</script>