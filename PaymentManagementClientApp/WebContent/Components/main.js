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
 var type = ($("#hidPaymentIDSave").val() == "") ? "POST" : "PUT"; 
 var formUrl = "";

 // Decide API call according to the request type
 if($("#hidPaymentIDSave").val() == ""){
	 formUrl = "http://localhost:8080/PaymentManagementMircoServiceS1031.5/PaymentModule/payment/insert";
 }else{
	 formUrl = "http://localhost:8080/PaymentManagementMircoServiceS1031.5/PaymentModule/payment/editPayment";
 }

$.ajax({
		url : formUrl,
		type : type,
		data :  $("#formPayment").serialize(), 
		dataType : "text",
		complete : function(response, status) {
			onItemSaveComplete(response.responseText, status);
		}
	});
}); 

function onItemSaveComplete(response, status) {
	if (status == "success") {
			var resultSet = JSON.parse(response);

	if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();

			$("#divPaymentGrid").html(resultSet.data);
	} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
			}

	} else if (status == "error") {
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
	} else {
			$("#alertError").text(
						"Unknown error while saving..");
			$("#alertError").show();
		}

			$("#hidItemIDSave").val("");
			$("#formItem")[0].reset();
	}

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

// UPDATE==========================================
$(document).on("click",".btnUpdate", function(event) {
	
 $("#hidPaymentIDSave").val($(this).closest("tr").find('#hidPaymentIDUpdate').val());
 $("#t_payment_no").val($(this).closest("tr").find('td:eq(1)').text());
 $("#t_payment_appointment").val($(this).closest("tr").find('td:eq(2)').text());
 $("#t_payment_date").val($(this).closest("tr").find('td:eq(3)').text());
 $("#t_payment_customerName").val($(this).closest("tr").find('td:eq(5)').text());
 $("#t_payment_cardNo").val($(this).closest("tr").find('td:eq(6)').text());
 $("#t_payment_cardtype").val($(this).closest("tr").find('td:eq(7)').text());
 $("#t_payment_amount").val($(this).closest("tr").find('td:eq(8)').text());
});


$(document).on("click", ".btnRemove", function(event) {
	var id = $("#hidPaymentIDSave").val()
	
	$.ajax({
		url : "http://localhost:8080/PaymentManagementMircoServiceS1031.5/PaymentModule/payment/deletePaymet",
		type : "DELETE",
		data : "t_payment_no=" + $(this).data("t_payment_no"),
		dataType : "text",
		complete : function(response, status) {
			onPaymentDeleteComplete(response.responseText, status);
		}	
	});
});

function onPaymentDeleteComplete(response, status) {
	if (status == "success") {

		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();

			$("#divPaymentGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}