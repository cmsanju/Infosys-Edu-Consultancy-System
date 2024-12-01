package com.edusity.springboard.Controller;

import com.edusity.springboard.EmailService;
import com.edusity.springboard.Entity.Payment;
import com.edusity.springboard.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "http://localhost:5173")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> savePayment(@RequestBody Payment payment) {
        try {
            Payment savedPayment = paymentService.savePayment(payment);

            // Send a payment confirmation email
            String subject = "Payment Confirmation";
            String body = "Hi " + payment.getUsername() + ",\n\nThank you for your payment for the course!";
            emailService.sendEmail(payment.getEmail(), subject, body);

            return ResponseEntity.ok("Payment saved successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error saving payment: " + e.getMessage());
        }
    }
    @GetMapping
    public ResponseEntity<?> getAllPayments() {
        try {
            List<Payment> payments = paymentService.getAllPayments();
            return ResponseEntity.ok(payments);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching payments: " + e.getMessage());
        }
    }

}
