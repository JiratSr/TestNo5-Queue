using QueueControl_API.Data;
using Microsoft.EntityFrameworkCore;

namespace QueueControl_API.Services
{
    public class QueueService
    {
        private readonly AppDbContext _context;

        public QueueService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<string> GetNextQueue()
        {
            using var transaction = await _context.Database.BeginTransactionAsync();

            var queue = await _context.Queues.FirstAsync();

            char letter = queue.CurrentLetter;
            int number = queue.CurrentNumber;

            if (number == 9)
            {
                number = 0;
                letter++;
            }
            else
            {
                number++;
            }

            queue.CurrentLetter = letter;
            queue.CurrentNumber = number;
            queue.UpdateDate = DateTime.Now;

            await _context.SaveChangesAsync();

            await transaction.CommitAsync();

            return $"{letter}{number}";
        }

        public async Task<string> GetCurrentQueue()
        {
            var queue = await _context.Queues.FirstAsync();
            return $"{queue.CurrentLetter}{queue.CurrentNumber}";
        }

        public async Task ResetQueue()
        {
            var queue = await _context.Queues.FirstAsync();

            queue.CurrentLetter = 'A';
            queue.CurrentNumber = 0;

            await _context.SaveChangesAsync();
        }
    }
}