const sidebarItems = [
  {
    title: "Dashboard",
    icon: "fa-home",
    path: "/dashboard",
  },
  {
    title: "Users",
    icon: "fa-user",
    path: "/users",
  },
  {
    title: "Settings",
    icon: "fa-cog",
    path: "/settings",
  },
  {
    title: "Products",
    icon: "fa-shopping-cart",
    path: "/products",
  },
  {
    title: "Topics",
    icon: "fa-bookmark",
    path: "/topics",
  },
  {
    title: "Posts",
    icon: "fa-file-alt",
    path: "/posts",
  },
  {
    title: "Categories",
    icon: "fa-tags",
    path: "/categories",
  },
  {
    title: "Comments",
    icon: "fa-comments",
    path: "/comments",
  },
  {
    title: "AcountSettings",
    icon: "fa-cog",
    path: "/accountSettings",
  },
  {
    title: "Analytics",
    icon: "fa-chart-bar",
    path: "/Analytics",
  },
];

function handleAdminSidebar(req, res, next) {
  res.locals.path = req.path;
  res.locals.sidebarItems = sidebarItems;
  next();
}
module.exports = handleAdminSidebar;
