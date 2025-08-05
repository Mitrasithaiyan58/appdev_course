package com.examly.springapp.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
@Entity
@Table(name="courses")
public class Course{
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long courseId;

    @NotBlank(message="Title must not be empty")
    private String title;

    @NotBlank(message=Description must not be empty)
    private String description;

    @Min(value=1,message="Duration must be at least 1 hour")
    private int duration;

    @NotNull(message="Level is required")
    @Enumerated(EnumType.STRING)
    private Level level;

    @DecimalMin(value="0.0",inclusive=true,message="Price must not be negative")

    @NotBlank(message="Course duration is required")
    private String courseDuration;

    @NotBlank(message="Start date is required")
    private String startDate;
   

public  Course ()
{

}
public Course(String courseTitle,String trainerName,String courseDuration,String startDate)
{
    this.courseTitle=courseTitle;
    this.trainerName=trainerName;
    this.courseDuration=courseDuration;
    this.startDate=startDate;
}
public long getId()
{
    return id;
}

public void setId(long id)
{
    this.id=id;
}
public String getCourseTitle()
{
    return courseTitle;
}
public void setCourseTitle(String courseTitle)
{
    this.courseTitle=courseTitle;
}
public String getTrainerName()
{
    return trainerName;
}
public void setTrainerName(String trainerName)
{
    this.trainerName=trainerName;
}
public String getCourseDuration()
{
    return courseDuration;
}
public void setCourseDuration(String courseDuration)
{
    this.courseDuration=courseDuration;
}
public String getStartDate()
{
    return startDate;
}
public void setStartDate(String startDate)
{
    this.startDate=startDate;
}

}


