namespace GitHubSearch.Contract
{
    public class Repository
    {
        public Repository()
        {
        }

        public Repository(string name, Owner owner, bool isBookmarked = false)
        {
            Name = name;
            Owner = owner;
            IsBookmarked = isBookmarked;
        }

        public string Name { get; set; }

        public Owner Owner { get; set; }

        public bool IsBookmarked { get; set; }
    }
}