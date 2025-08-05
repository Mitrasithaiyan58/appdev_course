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

    @NotBlank(message= "Description must not be empty")
    private String description;

    @Min(value=1,message="Duration must be at least 1 hour")
    private int duration;

    @NotNull(message="Level is required")
    @Enumerated(EnumType.STRING)
    private Level level;

    @DecimalMin(value="0.0",inclusive=true,message="Price must not be negative")
    private double price;

    private boolean isActive;


    // @NotBlank(message="Course duration is required")
    // private String courseDuration;

    // @NotBlank(message="Start date is required")
    // private String startDate;
   

public  Course ()
{

}

public long getCourseId()
{
    return courseId;
}

public void setCourseId(long courseId)
{
    this.courseId=courseId;
}
public String getTitle()
{
    return title;
}
public void setTitle(String title)
{
    this.title=title;
}
public String getDescription()
{
    return description;
}
public void setDescription(String description)
{
    this.description=description;
}
public int getDuration()
{
    return duration;
}
public void setDuration(int duration)
{
    this.duration=duration;
}
public Level getLevel()
{
    return level;
}
public void setLevel(Level level)
{
    this.level=level;
}
public double getPrice()
{
    return price;
}
public void setPrice(double price)
{
    this.price=price;
}
public boolean getIsActive()
{
    return isActive;
}
public void setIsActive(boolean active)
{
    isActive=active;
}

public enum Level{
    BEGINNER,
    INTERMEDIATE,
    ADVANCED
}

}


