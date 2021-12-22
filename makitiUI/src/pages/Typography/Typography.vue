<template>
  <div class="tables-basic">
    <h2 class="page-title">Products <span class="fw-semi-bold"></span></h2>
    <router-link to="/app/components/newproduct">  <button type="button" class="btn btn-primary" @click="goToHome()">New Product</button>
</router-link>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Products <span class='fw-semi-bold'>Lists</span></h5>"
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
                  <th>Picture</th>
                  <th>Title</th>
                  <th class="hidden-sm-down">Description</th>
                  <th class="hidden-sm-down">Unused</th>
                  <th class="hidden-sm-down">Location</th>
                  <th class="hidden-sm-down">Status</th>
                   <th class="hidden-sm-down">Address</th>
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