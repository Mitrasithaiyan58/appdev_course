package com.examly.springapp.controller;

import com.examly.springapp.model.Trainer;
import com.examly.springapp.service.TrainerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/trainers")
@CrossOrigin(origins = "http://localhost:3000")
public class TrainerController {

    @Autowired
    private TrainerService trainerService;

    // Create new trainer
    @PostMapping
    public ResponseEntity<Trainer> addTrainer(@RequestBody Trainer trainer) {
        return new ResponseEntity<>(trainerService.addTrainer(trainer), HttpStatus.CREATED);
    }

    // Get trainer by ID
    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getTrainer(@PathVariable Long id) {
        Trainer trainer = trainerService.getTrainerById(id);
        return ResponseEntity.ok(trainer);
    }

    // Get all trainers
    @GetMapping
    public ResponseEntity<List<Trainer>> getAllTrainers(@RequestParam(required = false) Boolean active) {
        List<Trainer> trainers = (active == null)
                ? trainerService.getAllTrainers()
                : trainerService.getAllTrainers().stream()
                    .filter(trainer -> trainer.isActive() == active)
                    .toList();
        return ResponseEntity.ok(trainers);
    }

    // Update trainer
    @PutMapping("/{id}")
    public ResponseEntity<Trainer> updateTrainer(@PathVariable Long id, @RequestBody Trainer trainer) {
        trainerService.getTrainerById(id); // throws if not found
        trainer.setTrainerId(id);
        return ResponseEntity.ok(trainerService.updateTrainer(id, trainer));
    }

    // Delete trainer
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTrainer(@PathVariable Long id) {
        if (!trainerService.exists(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Trainer not found with id: " + id));
        }
        trainerService.deleteTrainer(id);
        return ResponseEntity.noContent().build();
    }
}
