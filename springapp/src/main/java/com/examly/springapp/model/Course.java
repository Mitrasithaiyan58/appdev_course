package com.examly.springapp.model;
import jakarta.persistence.*;
@Entity
@Table(name="courses")
public class Course{
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String courseTitle;
    private String trainerName;
    private String courseDuration;
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


