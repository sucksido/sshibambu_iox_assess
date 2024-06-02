namespace FleetServicesAPI.Models
{
    public class Quote
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; } = new Account();
        public DateTime Date { get; set; }
        public DateTime ValidTo { get; set; }
        public string QuoteNumber { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Status { get; set; } = string.Empty;
    }
}