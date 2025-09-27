function setUnivNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								 
									for(var  l=0;l<pref_list.length;l++){ 
								   
								   var sel = "";
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].universityName+'</option>');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve University list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setCtryNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								 
									for(var  l=0;l<pref_list.length;l++){ 
								   
								   var sel = "";
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].countryDispName+'</option>');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Country list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}


function setNameList(urlToFetch,fetchType,divIdToUpdate,idSelected)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								
									for(var  l=0;l<pref_list.length;l++){ 
								  
								   var sel = "";
									
								   if(pref_list[l].id == idSelected ) 
								   { sel = ' selected="selected"'; $("#"+ divIdToUpdate + " option[value="+ idSelected+"]").remove();}
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].dispName+'</option>');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setBankNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								
									for(var  l=0;l<pref_list.length;l++){ 
								   
								   var sel = "";
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].bankDispName+'</option>');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve University list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setCourseNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								
									for(var  l=0;l<pref_list.length;l++){ 
								  
								   var sel = "";
									
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].courseDisplayName+'</option>');
                                   $('#'+ divIdToUpdate).multiselect('rebuild');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Course list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setAmenNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								
									for(var  l=0;l<pref_list.length;l++){ 
								  
								   var sel = "";
									
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].amenityDispName+'</option>');
                                   $('#'+ divIdToUpdate).multiselect('rebuild');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Amenities list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setAfflNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								 
									for(var  l=0;l<pref_list.length;l++){ 
								  
								   var sel = "";
									
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].affilName+'</option>');
                                   $('#'+ divIdToUpdate).multiselect('rebuild');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Affiliations list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setAccrNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								
									for(var  l=0;l<pref_list.length;l++){ 
								   
								   var sel = "";
									
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].accreditName+'</option>');
                                   $('#'+ divIdToUpdate).multiselect('rebuild');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Accreditations list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setSchlrspNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								 
									for(var  l=0;l<pref_list.length;l++){ 
								   
								   var sel = "";
									
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].schDisplayName+'</option>');
                                   $('#'+ divIdToUpdate).multiselect('rebuild');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Scholarships list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}

function setRecrNameList(urlToFetch,fetchType,divIdToUpdate)
			{	
				var pref_list = [];
				 $.ajax({
							 type: fetchType,
							 url: urlToFetch,  //
							 
							 success: function (data_add) {
							  
							  if(data_add.status == "SUCCESS") {
								pref_list = data_add.responseData;
								 
									for(var  l=0;l<pref_list.length;l++){ 
								   
								   var sel = "";
									
								   $('#'+ divIdToUpdate).append('<option value="'+pref_list[l].id+'"'+sel+'>'+pref_list[l].recruiter+'</option>');
                                   $('#'+ divIdToUpdate).multiselect('rebuild');
								   
								   }
								} // End If
		
							   else if (data_add.status == "FAILURE") {
							   
							   console.log("Could not retrieve Recruiters list!");
													  
							  } // End Else If
		
							  }, // End Success Call
		
								error: function (data_add, textStatus, errorThrown) { //In case of error
								 alert(errorThrown);
							 }
						   
							 });
		
			}