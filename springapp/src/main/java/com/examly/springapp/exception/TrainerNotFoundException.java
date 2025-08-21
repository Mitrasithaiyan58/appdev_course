package com.examly.springapp.exception;

public class TrainerNotFoundException extends RuntimeException {
    public TrainerNotFoundException(Long trainerId) {
        super("Trainer not found with id: " + trainerId);
    }
}
