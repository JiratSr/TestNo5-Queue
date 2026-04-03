using Microsoft.AspNetCore.Mvc;
using QueueControl_API.Services;

namespace QueueControl_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QueueController : ControllerBase
    {
        private readonly QueueService _service;

        public QueueController(QueueService service)
        {
            _service = service;
        }

        [HttpPost("next")]
        public async Task<IActionResult> Next()
        {
            var q = await _service.GetNextQueue();
            return Ok(q);
        }

        [HttpGet("current")]
        public async Task<IActionResult> Current()
        {
            var q = await _service.GetCurrentQueue();
            return Ok(q);
        }

        [HttpPost("reset")]
        public async Task<IActionResult> Reset()
        {
            await _service.ResetQueue();
            return Ok("00");
        }
    }
}