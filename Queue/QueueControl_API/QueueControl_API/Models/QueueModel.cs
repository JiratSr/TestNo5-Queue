using System.ComponentModel.DataAnnotations;

namespace QueueControl_API.Models
{
    public class QueueModel
    {
        public int Id { get; set; }

        public char CurrentLetter { get; set; }

        public int CurrentNumber { get; set; }

        public DateTime UpdateDate { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }
    }
}