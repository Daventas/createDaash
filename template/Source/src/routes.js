import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import BotamList from "./views/BotamList";
import ItemList from "./views/ItemList";
import AddEvents from "./views/AddEvents";
import AccBalance from "./views/AccBalance";
import UserManagement from "./views/UserManagement";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/acc-balance",
    layout: DefaultLayout,
    component: AccBalance
  },
  {
    path: "/add-events",
    layout: DefaultLayout,
    component: AddEvents
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  /*
  {
    path: "/botam-list",
    layout: DefaultLayout,
    component: BotamList
  },
  */
  {
    path: "/item-list",
    layout: DefaultLayout,
    component: ItemList
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/user-management",
    layout: DefaultLayout,
    component: UserManagement
  },
  
];
