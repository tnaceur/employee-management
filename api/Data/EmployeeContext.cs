using Microsoft.EntityFrameworkCore;
using ContosoEmployee.Models;

namespace ContosoEmployee.Data;

public class EmployeeContext : DbContext
{
    public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
    {
    }

    public DbSet<Employee> Employees { get; set; } = null!;
}