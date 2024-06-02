namespace FleetServicesAPI.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; } = new Account();
        public DateTime Date { get; set; }
        public string Type { get; set; } = string.Empty;
        public decimal Amount { get; set; }
    }
}