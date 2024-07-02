using System.ComponentModel;
using ContosoEmployee.Data;
using ContosoEmployee.Models;
using ContosoEmployee.Services;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace ContosoEmployee.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly EmployeeService _service;
    
    public EmployeeController(EmployeeService service)
    {
        _service = service;
    }

    [HttpGet]
    public IEnumerable<Employee> GetAll() {
        return _service.GetAll().ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Employee> Get(int id)
    {
        var employee = _service.Get(id);
        if (employee is null)
            return NotFound();
        return employee;
    }

    [HttpPost]
    public IActionResult Add(Employee employee)
    {
        if (_service.Add(employee) is false)
            return Conflict();
        return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var employee = _service.Get(id);
        if (employee is null)
            return NotFound();
        _service.Delete(id);
        return NoContent();
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Employee employee)
    {
        if (id != employee.Id)
            return BadRequest();
        var existingEmployee = _service.Get(id);
        if (existingEmployee is null)
            return NotFound();
        _service.Update(employee);
        return NoContent();
    }

}