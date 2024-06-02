namespace FleetServicesAPI.Models
{
    public class Account
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = new User();
        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
        public ICollection<Quote> Quotes { get; set; } = new List<Quote>();
    }
}