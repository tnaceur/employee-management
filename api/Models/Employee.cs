using System.ComponentModel.DataAnnotations;

namespace ContosoEmployee.Models;

public class Employee
{
    public int Id { get; set; }

    [Required]
    [MaxLength(20)]
    public string FirstName { get; set; } = null!;
    [Required]
    [MaxLength(20)]
    public string LastName { get; set; } = null!;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    [Required]
    [MaxLength(50)]
    public string Position { get; set; } = null!;
    [Required]
    public int Salary { get; set; }
}