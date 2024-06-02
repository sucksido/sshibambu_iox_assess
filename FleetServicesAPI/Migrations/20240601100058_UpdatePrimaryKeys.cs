using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FleetServicesAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdatePrimaryKeys : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VehicleId",
                table: "Vehicles",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Users",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "TransactionId",
                table: "Transactions",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "QuoteId",
                table: "Quotes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "AccountId",
                table: "Accounts",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Vehicles",
                newName: "VehicleId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Users",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Transactions",
                newName: "TransactionId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Quotes",
                newName: "QuoteId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Accounts",
                newName: "AccountId");
        }
    }
}
