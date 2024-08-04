using Newtonsoft.Json;

namespace GitHubSearch.Contract
{
    public class Owner
    {
        public Owner()
        {
        }

        public Owner(string avatarUrl)
        {
            AvatarUrl = avatarUrl;
        }


        [JsonProperty("avatar_url")]
        public string AvatarUrl { get; set; }
    }
}
