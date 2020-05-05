<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/main.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">

				<h1 class="m-3">Payment Management</h1>

				<form id="formPayment">
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="pNo" style="width:158px">Payment No: </span>
						</div>
						<input type="text" id="t_payment_no" name="t_payment_no">
					</div>
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="appNo" style="width:158px">Appointment No:
							</span>
						</div>
						<input type="text" id="t_payment_appointment" name="t_payment_appointment">
					</div>
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="pDate" style="width:158px">Payment Date: </span>
						</div>
						<input type="date" id="t_payment_date" name="t_payment_date">
					</div>
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="pCus" style="width:158px">Customer Name: </span>
						</div>
						<input type="text" id="t_payment_customerName" name="t_payment_customerName">
					</div>
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="pCardNo" style="width:158px">Card No: </span>
						</div>
						<input type="number" id="t_payment_cardNo" name="t_payment_cardNo">
					</div>
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="pCardType" style="width:158px">Card Type: </span>
						</div>
						<select id="t_payment_cardtype" name="t_payment_cardtype">
							<option value="0">--Select Your Card Type--</option>
							<option value="VISA">VISA</option>
							<option value="Master">Master</option>
							<option value="Credit Card">Credit Card</option>
						</select>
					</div>
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="pAmount" style="width:158px">Payment Amount
								(Rs): </span>
						</div>
						<input type="number" id="t_payment_amount" name="t_payment_amount"
							min="0">
					</div>

					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>

					<input type="button" id="btnSave" value="Save" class="btn btn-primary">
					<input type="hidden" id="hidPaymentIDSave" name="hidPaymentIDSave" value="">
				</form>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-12" id="colStudents"></div>
		</div>
	</div>
	
	
</body>
</html>