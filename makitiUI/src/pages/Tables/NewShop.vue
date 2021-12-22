<template>
<div class="row">
    <div class="col-lg-8 offset-lg-1">
        <section class="widget">
            <header>
                <h5>
                    New Shop
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
                            <label class="control-label col-sm-3" for="basic">Upload Image</label>
                            <div class="col-sm-9">
                          <input type="file" class="form-control" id="customFile" />                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="basic-change">
                                Name
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
                            <label class="control-label col-sm-3" for="email">
                                NickName
                            </label>
                            <div class="col-sm-9">
                                <input type="email" id="email" name="email" class="form-control"
                                    data-parsley-trigger="change" data-parsley-validation-threshold="1"
                                    required="required">
                                <span class="help-block">
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="number">
                                Location
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="number" name="number" class="form-control"
                                    data-parsley-type="number" required="required">
                            </div>
                        </div>
                       
   
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="range">
                               Adress
                            </label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="range" name="range"
                                    data-parsley-range="[10, 100]" data-parsley-trigger="change"
                                    data-parsley-validation-threshold="1" required="required">
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                    
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="password">
                                Owner Name
                            </label>
                            <div class="col-sm-9">
                                <input type="password" id="password" name="password" class="form-control mb-sm"
                                    data-parsley-trigger="change" data-parsley-minlength="6" required="required">
                  
                            </div>
                          
                        </div>
                        <div class="form-group row">
                            <label class="control-label col-sm-3" for="website">
                                Description
                            </label>
                            <div class="col-sm-9">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            
                        </div>
                       
                      
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
