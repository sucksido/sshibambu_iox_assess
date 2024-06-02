using Microsoft.EntityFrameworkCore;
using FleetServicesAPI.Models;

namespace FleetServicesAPI.Data
{
    public class FleetContext : DbContext
    {
        public FleetContext(DbContextOptions<FleetContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(u => u.Id);

            modelBuilder.Entity<Account>()
                .HasKey(a => a.Id);

            modelBuilder.Entity<Account>()
                .HasOne(a => a.User)
                .WithMany(u => u.Accounts)
                .HasForeignKey(a => a.UserId);

            modelBuilder.Entity<Quote>()
                .HasKey(q => q.Id);

            modelBuilder.Entity<Quote>()
                .HasOne(q => q.Account)
                .WithMany(a => a.Quotes)
                .HasForeignKey(q => q.AccountId);

            modelBuilder.Entity<Transaction>()
                .HasKey(t => t.Id);

            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.Account)
                .WithMany(a => a.Transactions)
                .HasForeignKey(t => t.AccountId);

            modelBuilder.Entity<Vehicle>()
                .HasKey(v => v.Id);

            modelBuilder.Entity<Vehicle>()
                .HasOne(v => v.User)
                .WithMany(u => u.Vehicles)
                .HasForeignKey(v => v.UserId);
        }
    }
}