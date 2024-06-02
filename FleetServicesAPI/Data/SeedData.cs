using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FleetServicesAPI.Models;

namespace FleetServicesAPI.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new FleetContext(
                serviceProvider.GetRequiredService<DbContextOptions<FleetContext>>()))
            {
                // Look for any users.
                if (context.Users.Any())
                {
                    return; // DB has been seeded
                }

                // Add Users
                for (int i = 1; i <= 100; i++)
                {
                    context.Users.Add(new User
                    {
                        FirstName = $"FirstName{i}",
                        LastName = $"LastName{i}",
                        IDNumber = $"ID{i}",
                        Password = $"Password{i}",
                        Email = $"user{i}@example.com"
                    });
                }

                // Save changes to get User IDs for Account seeding
                context.SaveChanges();

                // Add Accounts
                var users = context.Users.ToList();
                foreach (var user in users)
                {
                    for (int i = 1; i <= 1; i++)
                    {
                        context.Accounts.Add(new Account
                        {
                            UserId = user.Id
                        });
                    }
                }

                // Save changes to get Account IDs for Transaction and Quote seeding
                context.SaveChanges();

                // Add Vehicles
                foreach (var user in users)
                {
                    for (int i = 1; i <= 1; i++)
                    {
                        context.Vehicles.Add(new Vehicle
                        {
                            UserId = user.Id,
                            VIN = $"VIN{i}{user.Id}",
                            LicenseNumber = $"LN{i}{user.Id}",
                            PlateNumber = $"PN{i}{user.Id}",
                            LicenseExpiry = DateTime.Now.AddYears(1),
                            Model = $"Model{i}",
                            Color = $"Color{i}"
                        });
                    }
                }

                // Save changes to get Vehicle IDs for further processing if needed
                context.SaveChanges();

                // Add Transactions and Quotes
                var accounts = context.Accounts.ToList();
                foreach (var account in accounts)
                {
                    for (int i = 1; i <= 1; i++)
                    {
                        context.Transactions.Add(new Transaction
                        {
                            AccountId = account.Id,
                            Date = DateTime.Now,
                            Type = $"Type{i}",
                            Amount = 100 + i
                        });

                        context.Quotes.Add(new Quote
                        {
                            AccountId = account.Id,
                            Date = DateTime.Now,
                            ValidTo = DateTime.Now.AddMonths(1),
                            QuoteNumber = $"QN{i}{account.Id}",
                            Description = $"Description{i}",
                            Amount = 200 + i,
                            Status = $"Status{i}"
                        });
                    }
                }

                context.SaveChanges();
            }
        }
    }
}