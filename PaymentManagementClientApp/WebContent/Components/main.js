$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});
// SAVE
$(document).on("click", "#btnSave", function(event) { 
	// Clear status msges-------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();

// Form validation---------------- 
 //var status = validateItemForm();
 var status = true;
// If not valid------------------- 
 if (status != true) {
 $("#alertError").text(status);
 $("#alertError").show(); 
 return;
 }

// If valid----------------------- 
 $("#formPayment").submit()
}); 


function validateItemForm() {
	  
	if ($("#t_payment_no").val().trim() == "")  {
		return "Insert Payment Number.";  
		} 

	if ($("#t_payment_appointment").val().trim() == "")  {
		return "Insert Appointment Number";  
		} 
	 
	if ($("#t_payment_date").val().trim() == "")  {
		return "Select Payment Date";  
		}  
	 
	if ($("#t_payment_time").val().trim() == "")  {
		return "Select Payment Time.";  
		}  
	 
	if ($("#t_payment_customerName").val().trim() == "")  {
		return "Insert Custumer Name.";  
		} 
	 
	if ($("#t_payment_cardNo").val().trim() == "")  {
		return "Insert Card Number.";  
		}  
	 
	if ($("#t_payment_amount").val().trim() == "")  {
		return "Insert Payment Value.";  
		} 
	
	if ($("#t_payment_cardtype").val() == "0")  {
		return "Select Card Type.";  
		} 

	return true;
}