export default function() {
  return [
    {
      title: "대쉬보드",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "통장 잔고 내역",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/acc-balance",
    },
    //{
    //  title: "Blog Posts",
    //  htmlBefore: '<i class="material-icons">vertical_split</i>',
    //  to: "/blog-posts",
    //},
    {
      title: "보탐/출석 추가",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-events",
    },
    {
      title: "보탐 현황",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/botam-list",
    },
    {
      title: "획득 아이템 현황",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/item-list",
    },
    
    //{
    //  title: "Add New Post",
    //  htmlBefore: '<i class="material-icons">note_add</i>',
    //  to: "/add-new-post",
    //},
    {
      title: "혈원 관리 및 추가",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/user-management",
    },

    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
