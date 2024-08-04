using GitHubSearch.Contract;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace GitHubSearch.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class GitHubRepositoriesController : ControllerBase
    {
        private readonly ILogger<GitHubRepositoriesController> _logger;
        private readonly HttpClient _httpClient;

        public GitHubRepositoriesController(ILogger<GitHubRepositoriesController> logger, HttpClient httpClient)
        {
            _logger = logger;
            _httpClient = httpClient;

        }

        [HttpGet]
        public async Task <IEnumerable<Repository>> Repositories(string keyword)
        {
            if (string.IsNullOrWhiteSpace(keyword))
            {
                return Enumerable.Empty<Repository>();
            }

            var searchRepositoriesUrl = Consts.RepositoriesGetUrl;

            var uriBuilder = new UriBuilder(searchRepositoriesUrl)
            {
                Query = $"q={Uri.EscapeDataString(keyword)}"
            };

            _httpClient.DefaultRequestHeaders.UserAgent.TryParseAdd("request");

            try
            {
                var responseString = await _httpClient.GetStringAsync(uriBuilder.Uri);
                var response = JsonConvert.DeserializeObject<GitHubSearchResponse>(responseString);
                return response?.Items ?? Enumerable.Empty<Repository>();
            }
            catch (HttpRequestException ex)
            {
                _logger.LogError(ex, "Error occurred while fetching repositories from GitHub.");
                return Enumerable.Empty<Repository>();
            }
        }
    }
}