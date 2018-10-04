const Filters = [
  {id: 1,
   name: "summary_delete",
   condition: "include:summary:.",
   modifier: "replace:summary:"},
  {id: 2,
   name: "created_delete",
   condition: "include:summary:.",
   modifier: "replace:created:"},
  {id: 3,
   name: "location_delete",
   condition: "include:summary:.",
   modifier: "replace:location:"},
  {id: 4,
   name: "after_17PM__delete",
   condition: "after:dtstart:17",
   modifier: "replace:*:nil"}
];

const Actions = [
  {id: 1,
   name: 'calendar1',
   opponent: 'calendar',
   param: 'example@google.com'
  },
  {id: 2,
   name: 'calendar2',
   opponent: 'calendar',
   param: 'example2@google.com'
  },
  {id: 3,
   name: 'slack',
   opponent: 'slack',
   param: 'general'
  },
  {id: 4,
   name: 'mail',
   opponent: 'mail',
   param: 'example@gmail.com'
  }
]

const Groups = [
  {id:1, action: 'calendar1', filters: ["created_delete","location_delete"]},
  {id:2, action: 'calendar2', filters: ["summary_delete"]},
  {id:3, action: 'slack', filters: ["created_delete","after_17PM__delete"]},
  {id:4, action: 'mail', filters: ["after_17PM__delete"]},
]

export {Actions, Filters, Groups}
