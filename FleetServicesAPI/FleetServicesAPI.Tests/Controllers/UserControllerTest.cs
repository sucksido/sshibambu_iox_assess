// using FleetServicesAPI.Controllers;
// using FleetServicesAPI.Data;
// using FleetServicesAPI.Models;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Moq;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Xunit;

// namespace FleetServicesAPI.Tests.Controllers
// {
//     public class UserControllerTests
//     {
//         private readonly UserController _controller;
//         private readonly Mock<FleetContext> _contextMock;

//         public UserControllerTests()
//         {
//             _contextMock = new Mock<FleetContext>();
//             _controller = new UserController(_contextMock.Object);
//         }

//         [Fact]
//         public async Task GetUsers_ReturnsOkResult_WithListOfUsers()
//         {
//             // Arrange
//             var users = new List<User> { new User { Id = 1, FirstName = "Test", LastName = "User" } };
//             var dbSetMock = new Mock<DbSet<User>>();
//             dbSetMock.As<IQueryable<User>>().Setup(m => m.Provider).Returns(users.AsQueryable().Provider);
//             dbSetMock.As<IQueryable<User>>().Setup(m => m.Expression).Returns(users.AsQueryable().Expression);
//             dbSetMock.As<IQueryable<User>>().Setup(m => m.ElementType).Returns(users.AsQueryable().ElementType);
//             dbSetMock.As<IQueryable<User>>().Setup(m => m.GetEnumerator()).Returns(users.AsQueryable().GetEnumerator());

//             _contextMock.Setup(c => c.Users).Returns(dbSetMock.Object);

//             // Act
//             var result = await _controller.GetUsers();

//             // Assert
//             var okResult = Assert.IsType<OkObjectResult>(result);
//             var returnUsers = Assert.IsType<List<User>>(okResult.Value);
//             Assert.Single(returnUsers);
//         }
//     }
// }
