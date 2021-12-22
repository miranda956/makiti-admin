<template>
<div class="row">
    <div class="col-lg-8 offset-lg-1">
        <section class="widget">
            <header>
                <h5>
                    New Staff
                </h5>
                <div class="widget-controls">
                    <a data-widgster="expand" title="Expand" href="#"><i class="la la-angle-up"></i></a>
                    <a data-widgster="collapse" title="Collapse" href="#"><i class="la la-angle-down"></i></a>
                    <a data-widgster="close" title="Close" href="#"><i class="la la-remove"></i></a>
                </div>
            </header>
            <div class="widget-body">
                <form id="validation-form" class="form-horizontal form-label-left" 
                    data-parsley-priority-enabled="false" novalidate="novalidate">
                    <fieldset>
                        <legend>
                        </legend>
                        
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="basic-change">
                                STAFF NAME
                                <span class="help-block">
                                </span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="basic-change" name="basic-change" class="form-control"
                                    data-parsley-trigger="change" data-parsley-minlength="10" required="required">
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                       
                        
                        
                         <div class="form-group row">
                            <label class="control-label col-sm-3" for="number">
                           STAFFNO.
                            </label>
                            <div class="col-sm-9">
                       <select class="form-control" id="exampleFormControlSelect1">
                      
      
    </select>
                            </div>
                        </div>
   
</p>Assign Role</p>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
  Super Admin
  </label>
</div>


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Admin
  </label>
</div>


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Agents
  </label>
</div>


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Moderator
  </label>
</div>
           

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
Editor  </label>
</div>       


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
Accountant  </label>
</div>    
                    </fieldset>
                    <fieldset>
                    
                          
                       
                       
                      
                    </fieldset>
                    
                    <div>
                        <button type="submit" class="btn btn-success btn-square float-right">
                            Save</button>
                        <button type="button" class="btn btn-default btn-rounded"></button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</div>
</template>
