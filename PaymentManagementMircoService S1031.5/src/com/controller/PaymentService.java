package com.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import javax.ws.rs.core.MediaType;

import com.model.Payment;

@Path("/payment")
public class PaymentService {

	Payment payment = new Payment();

	@GET
	@Path("/allPayments")
	@Produces(MediaType.TEXT_HTML)
	public String getAllPayments() {
		
		return payment.getAllPayments();
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_HTML)
	public String Insert(@FormParam("t_payment_no") String t_payment_no,
			@FormParam("t_payment_appointment") String t_payment_appointment,
			@FormParam("t_payment_date") String t_payment_date,
			@FormParam("t_payment_customerName") String t_payment_customerName,
			@FormParam("t_payment_cardNo") String t_payment_cardNo,
			@FormParam("t_payment_cardtype") String t_payment_cardtype,
			@FormParam("t_payment_amount") String t_payment_amount) {

		String output = "";

		DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
		Calendar cal = Calendar.getInstance();
		String t_payment_time = dateFormat.format(cal.getTime());

		String Validateoutput = payment.validateCard(Integer.parseInt(t_payment_cardNo));

		if (Validateoutput.equalsIgnoreCase("valid")) {
			output = payment.insertPayment(t_payment_no, t_payment_appointment, t_payment_date, t_payment_time,
					t_payment_customerName, t_payment_cardNo, t_payment_cardtype, t_payment_amount);

		} else {
			output = "{\"status\":\"error\", \"data\":\"Credit Card Details Not Found.. Please Check the Number\"}";
		}

		return output;

	}

	@PUT
	@Path("/editPayment")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String updateDoctor(@FormParam("t_payment_no") String t_payment_no,
			@FormParam("t_payment_appointment") String t_payment_appointment,
			@FormParam("t_payment_date") String t_payment_date,
			@FormParam("t_payment_customerName") String t_payment_customerName,
			@FormParam("t_payment_cardNo") String t_payment_cardNo,
			@FormParam("t_payment_cardtype") String t_payment_cardtype,
			@FormParam("t_payment_amount") String t_payment_amount) {
		

		String output = "";

		DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
		Calendar cal = Calendar.getInstance();
		String t_payment_time = dateFormat.format(cal.getTime());

		Payment payment = new Payment();

		String Validateoutput = payment.validateCard(Integer.parseInt(t_payment_cardNo));

		if (Validateoutput.equalsIgnoreCase("valid")) {
			output = payment.updatePayment(t_payment_no, t_payment_appointment, t_payment_date, t_payment_time,
					t_payment_customerName, t_payment_cardNo, t_payment_cardtype, t_payment_amount);

		} else {
			output = "{\"status\":\"error\", \"data\":\"Credit Card Details Not Found.. Please Check the Number \"}";
		}

		return output;
	}

	@DELETE
	@Path("/deletePaymet")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.TEXT_PLAIN)
	public String deleteDoctor(@FormParam("t_payment_no") String t_payment_no) {
		String output = "";
		
		Payment payment = new Payment();
		output = payment.deletePayment(t_payment_no);
		
		return output;
	}

// Request Parameter mapper function
// I didn't use this class because without using this class I can handle the request parameters as a web service
	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();

			String[] params = queryString.split("&");
			for (String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {

		}
		
		return map;
	}

}
