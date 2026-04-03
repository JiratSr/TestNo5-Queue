using Microsoft.EntityFrameworkCore;
using QueueControl_API.Models;

namespace QueueControl_API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<QueueModel> Queues { get; set; }
    }
}