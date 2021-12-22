<template>
  <div>
  
  <div class="container">
  <div class="row clearfix">
    <div class="col-md-12">
      <table class="table table-bordered table-hover" id="tab_logic">
        <col width="10%">
        <col width="10%">
        <col width="40%">
        <col width="20%">
        <col width="20%">
        <thead>
        <p>Generate Invoice</p> 
          <tr>
            <th class="text-center"> # </th>
            <th class="text-center"> Date </th>
            <th class="text-center"> Description </th>
            <th class="text-center"> Category </th>
            <th class="text-center"> Cost </th>
          </tr>
        </thead>
        <tbody>
          <tr id="addr0">
            <td>1</td>
            <td><input type="date" name='date[]'  placeholder='Date' class="form-control"/></td>
            <td><textarea name='desc[]' placeholder='Expense Description' class="form-control desc"/></textarea></td>
            <td><input type="text" name='category[]' placeholder='Expense Category' class="form-control cat"/></td>
            <td><input type="number" name='cost[]' placeholder='Total Cost' class="form-control total"/></td>
          </tr>
          <tr id="addr1"></tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="row clearfix">
    <div class="col-md-12">
      <button id="add_row" class="btn btn-default pull-left">Add Row</button>
      <button id='delete_row' class="pull-right btn btn-default">Delete Row</button>
    </div>
  </div>
  <div class="row clearfix" style="margin-top:20px">
    <div class="pull-right col-md-4">
      <table class="table table-bordered table-hover" id="tab_logic_total">
        <tbody>
          <tr>
            <th class="text-center">Sub Total</th>
            <td class="text-center"><input type="number" name='sub_total' placeholder='0.00' class="form-control" id="sub_total" readonly/></td>
          </tr>
          <tr>
            <th class="text-center">Advance</th>
            <td class="text-center"><input type="number" name='advance_amount' id="advance_amount" placeholder='0.00' class="form-control"/></td>
          </tr>
          <tr>
            <th class="text-center">Grand Total</th>
            <td class="text-center"><input type="number" name='total_amount' id="total_amount" placeholder='0.00' class="form-control" readonly/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
</template>
