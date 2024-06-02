namespace FleetServicesAPI.Models
{
    public class Vehicle
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = new User();
        public string VIN { get; set; } = string.Empty;
        public string LicenseNumber { get; set; } = string.Empty;
        public string PlateNumber { get; set; } = string.Empty;
        public DateTime LicenseExpiry { get; set; }
        public string Model { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
    }
}
