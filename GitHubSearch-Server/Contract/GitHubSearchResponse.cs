namespace GitHubSearch.Contract
{
    public class GitHubSearchResponse
    {
        public GitHubSearchResponse()
        {
            Items = new List<Repository>();
        }

        public List<Repository> Items { get; set; }
    }
}
