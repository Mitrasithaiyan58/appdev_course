package com.examly.springapp.service;

import com.examly.springapp.exception.TrainerNotFoundException;
import com.examly.springapp.model.Trainer;
import com.examly.springapp.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    // Create or update trainer
    public Trainer addTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    // Get trainer by ID
    public Trainer getTrainerById(Long trainerId) {
        return trainerRepository.findById(trainerId)
                .orElseThrow(() -> new TrainerNotFoundException(trainerId));
    }

    // Get all trainers
    public List<Trainer> getAllTrainers() {
        return trainerRepository.findAll();
    }

    // Update trainer
    public Trainer updateTrainer(Long trainerId, Trainer updatedTrainer) {
        updatedTrainer.setTrainerId(trainerId);
        return trainerRepository.save(updatedTrainer);
    }

    // Delete trainer
    public void deleteTrainer(Long trainerId) {
        trainerRepository.deleteById(trainerId);
    }

    // Check existence
    public boolean exists(Long trainerId) {
        return trainerRepository.existsById(trainerId);
    }
}
