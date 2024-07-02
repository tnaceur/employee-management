using ContosoEmployee.Models;
using ContosoEmployee.Data;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace ContosoEmployee.Services;

public class EmployeeService
{
    private readonly EmployeeContext _context;

    public EmployeeService(EmployeeContext context)
    {
        _context = context;
    }
    public IEnumerable<Employee> GetAll()
    {
        return _context.Employees.AsNoTracking().ToList();
    }
    public Employee? Get(int id){
        return _context.Employees
            .AsNoTracking()
            .SingleOrDefault(p => p.Id == id);
    }
    public bool Add(Employee newEmployee)
    {
        if (newEmployee.Email != String.Empty && _context.Employees.Any(e => e.Email == newEmployee.Email)) return false;
        _context.Employees.Add(newEmployee);
        _context.SaveChanges();
        return true;
    }
    public void Delete(int id)
    {
        var employee = _context.Employees.Find(id);
        if (employee is null) return;
        _context.Employees.Remove(employee);
        _context.SaveChanges();
    }
    public void Update(Employee employee)
    {
        _context.Entry(employee).State = EntityState.Modified;
        _context.SaveChanges();
    }

}