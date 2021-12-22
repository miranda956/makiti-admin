<template>
<div class="row">
    <div class="col-lg-8 offset-lg-1">
        <section class="widget">
            <header>
                <h5>
                    CREATE OPPORTUNITY
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
                                Name
                                <span class="help-block">
                                </span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="basic-change" name="basic-change" class="form-control" placeholder="Leadname"
                                    data-parsley-trigger="change" data-parsley-minlength="10" required="required">
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                       
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="email">
                                phone
                            </label>

                            <div class="col-sm-9">
                            
                                <input type="phone" id="phone" name="phone" class="form-control" placeholder="phonenumber"
                                    data-parsley-trigger="change" data-parsley-validation-threshold="1"
                                    required="required">
                                <span class="help-block">
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="number">
                                Email
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="email" name="email" class="form-control" placeholder="Email"
                                    data-parsley-type="number" required="required">
                            </div>
                        </div>
                       
   
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="range">
                               City
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="range" name="range" placeholder="city"
                                    data-parsley-range="[10, 100]" data-parsley-trigger="change"
                                    data-parsley-validation-threshold="1" required="required">
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                 
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="website">
                                Street
                            </label>
                            <div class="col-sm-9">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="street"></textarea>
                            </div>
                            
                        </div>
                         <div class="form-group row">
                            <label class="control-label col-sm-3" for="password">
                                zipcode
                            </label>
                            <div class="col-sm-9">
                                <input type="password" id="password" name="password" class="form-control mb-sm" placeholder="zipcode"
                                    data-parsley-trigger="change" data-parsley-minlength="6" required="required">
                  
                            </div>
                          
                        </div>
                         <div class="form-group row">
                            <label class="control-label col-sm-3" for="password">
                                website
                            </label>
                            <div class="col-sm-9">
                                <input type="website" id="website" name="website" class="form-control mb-sm" placeholder="website"
                                    data-parsley-trigger="change" data-parsley-minlength="6" required="required">
                  
                            </div>
                          
                        </div>
                            <div class="form-group row">
                            <label class="control-label col-sm-3" for="basic">Upload Logo</label>
                            <div class="col-sm-9">
                          <input type="file" class="form-control" id="customFile" />                            </div>
                        </div>
                       
                      
                    </fieldset>
                    <fieldest>
                    <legend>
                    Lead detail
                    </legend>
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="password">
                                interested in
                            </label>
                            <div class="col-sm-9">
                                <input type="interest" id="interest" name="interest" class="form-control mb-sm" placeholder="interested in"
                                    data-parsley-trigger="change" data-parsley-minlength="6" required="required">
                  
                            </div>
                          
                        </div>
                           <div class="form-group row">
                            <label class="control-label col-sm-3" for="number">
                           Source
                            </label>
                            <div class="col-sm-9">
                       <select class="form-control" id="exampleFormControlSelect1">
                       <option>By company</option>
                       <option>Facebook</option>
                        <option>Google</option>
                        <option>By Friend</option>
                        <option>Linkdin</option>
                        <option>Twitter</option>






      
    </select>
                            </div>
                        </div>
                             <div class="form-group row">
                            <label class="control-label col-sm-3" for="number">
                           AssignedTo staff
                            </label>
                            <div class="col-sm-9">
                       <select class="form-control" id="exampleFormControlSelect1">
                       





      
    </select>
                            </div>
                        </div>
                         <div class="form-group row">
                            <label class="control-label col-sm-3" for="number">
                           Status
                            </label>
                            <div class="col-sm-9">
                       <select class="form-control" id="exampleFormControlSelect1">
                       <option>New</option>
                        <option>Existing</option>

                       





      
    </select>
                            </div>
                        </div>

                    </fieldest>
                    
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
