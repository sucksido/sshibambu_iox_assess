namespace FleetServicesAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string IDNumber { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public ICollection<Account> Accounts { get; set; } = new List<Account>();
        public ICollection<Vehicle> Vehicles { get; set; } = new List<Vehicle>();
    }
}