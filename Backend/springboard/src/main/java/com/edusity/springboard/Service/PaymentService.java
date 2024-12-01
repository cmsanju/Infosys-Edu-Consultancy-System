package com.edusity.springboard.Service;



import com.edusity.springboard.Entity.Payment;
import com.edusity.springboard.Repo.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepo paymentRepository;
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment savePayment(Payment payment) {
        try {
            // Ensure you're handling duplicates gracefully
            return paymentRepository.save(payment);
        } catch (Exception e) {
            throw new RuntimeException("Error saving payment: " + e.getMessage());
        }
    }
}
