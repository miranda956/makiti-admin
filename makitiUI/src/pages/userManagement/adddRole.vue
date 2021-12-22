<template>
<div class="row">
    <div class="col-lg-8 offset-lg-1">
        <section class="widget">
            <header>
                <h5>
                    ADD ROLE
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
                             ROLE NAME 
                                <span class="help-block">
                                </span>
                            </label>
                            <div class="col-sm-9">
                                <input type="text" id="basic-change" name="basic-change" class="form-control"
                                    data-parsley-trigger="change" data-parsley-minlength="10" required="required">
                            </div>
                        </div>
                        <div class="fv-row">

						<label class="fs-5 fw-bolder form-label mb-2">Role Permissions</label>

						<div class="table-responsive">

                       <table class="table align-middle table-row-dashed fs-6 gy-5">
                       	<tbody class="text-gray-600 fw-bold">
<tr>
						<td class="text-gray-800">Administrator Access 
						<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system"></i></td>
						<td>
																						<!--begin::Checkbox-->
						<label class="form-check form-check-sm form-check-custom form-check-solid me-9">
						<input class="form-check-input" type="checkbox" value="" id="kt_roles_select_all" />
						<span class="form-check-label" for="kt_roles_select_all">Select all</span>
						</label>
						</td>
						</tr>
                        				<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">User Management</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>
                                                                                	<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">Aggrigations</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>
                                                                                	<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">Support Center</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>
                                                                                	<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">Invoice Management</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>
                                                                                	<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">Lead Management</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>
                                                                                	<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">Catalog  Management</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>
                                                                                	<tr>
																					<!--begin::Label-->
																					<td class="text-gray-800">Contact Management</td>
																					<!--end::Label-->
																					<!--begin::Input group-->
																					<td>
																						<!--begin::Wrapper-->
																						<div class="d-flex">
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																								<span class="form-check-label">Read</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																								<span class="form-check-label">Write</span>
																							</label>
																							<!--end::Checkbox-->
																							<!--begin::Checkbox-->
																							<label class="form-check form-check-custom form-check-solid">
																								<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																								<span class="form-check-label">Create</span>
																							</label>
																							<!--end::Checkbox-->
																						</div>
																						<!--end::Wrapper-->
																					</td>
																					<!--end::Input group-->
																				</tr>

                        </tbody>

                       </table>



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
