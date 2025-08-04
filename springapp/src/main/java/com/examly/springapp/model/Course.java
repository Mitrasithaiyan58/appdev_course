package com.examly.springapp.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
@Entity
@Table(name="courses")
public class Course{
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message="Course title is required")
    private String courseTitle;

    @NotBlank(message="Trainer name is required")
    private String trainerName;

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


