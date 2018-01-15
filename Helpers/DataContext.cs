using Microsoft.EntityFrameworkCore;
using PasalDotCom.Models.User;

namespace PasalDotCom.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<UserModel> Users { get; set; }
    }
}