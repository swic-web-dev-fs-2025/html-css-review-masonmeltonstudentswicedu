const posts = [
  {
    id: 1,
    user: "techie123",
    content: "Love coding in JavaScript!",
    likes: 45,
    reports: 0,
  },
  {
    id: 2,
    user: "newbie",
    content: "This is spam content",
    likes: 2,
    reports: 8,
  },
  {
    id: 3,
    user: "developer",
    content: "Check out my new project",
    likes: 67,
    reports: 0,
  },
  {
    id: 4,
    user: "student",
    content: "Learning callbacks today",
    likes: 23,
    reports: 1,
  },
];

const sortedEngagementReportHTML = posts
  .sort((a, b) => b.likes - a.likes)
  .map((post) => {
    return `<li>${post.id} ${post.content} - Likes: ${post.likes}</li>`;
  })
  .join("\n");

console.info(sortedEngagementReportHTML);
