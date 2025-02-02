export const events = [
  // Valid Events
  {
    id: "adsasagsdas",
    timestamp: "2023-01-01T00:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "123",
      action: "view",
      userId: "123",
      // userName: "Petar Stoyanov",
      //   source: "web",
      metadata: { browser: "Chrome", location: "Bulgaria" },
    },
  },
  {
    id: "adsasagsdab",
    timestamp: "2023-01-02T12:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "124",
      action: "purchase",
      userId: "124",
      userName: "Ivan Petrov",
      source: "mobile_app",
      metadata: { os: "iOS", location: "Serbia" },
    },
  },
  {
    id: "adsasagsdac",
    timestamp: "2023-01-03T14:30:00.000Z",
    payload: {
      targetEntity: "post",
      targetId: "567",
      action: "view",
      userId: "125",
      userName: "Alice Johnson",
      source: "email",
      metadata: { campaign: "newsletter", location: "USA" },
    },
  },
  {
    id: "adsasagsdad",
    timestamp: "2023-01-03T15:30:00.000Z",
    payload: {
      targetEntity: "post",
      targetId: "568",
      action: "comment",
      userId: "126",
      userName: "John Doe",
      source: "web",
      metadata: { browser: "Firefox", location: "UK" },
    },
  },
  {
    id: "adsasagsdae",
    timestamp: "2023-01-04T16:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "789",
      action: "add_to_cart",
      userId: "127",
      userName: "Maria Costa",
      source: "mobile_app",
      metadata: { os: "Android", location: "Brazil" },
    },
  },
  {
    id: "adsasagsdaf",
    timestamp: "2023-01-04T17:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "790",
      action: "add_to_cart",
      userId: "128",
      userName: "Carlos Silva",
      source: "web",
      metadata: { browser: "Edge", location: "Portugal" },
    },
  },

  // Invalid Events (Missing Required Properties)
  {
    id: "adsasagsdag",
    timestamp: "2023-01-05T18:00:00.000Z",
    payload: {
      // targetEntity: "product", // Missing targetEntity
      targetId: "999",
      action: "view",
      userId: "129",
      userName: "Sophia Lee",
      source: "mobile_app",
      metadata: { os: "Android", location: "Germany" },
    },
  },
  {
    id: "adsasagsdah",
    timestamp: "2023-01-06T19:00:00.000Z",
    payload: {
      targetEntity: "product",
      // targetId: "1010", // Missing targetId
      action: "purchase",
      userId: "130",
      userName: "Mark Williams",
      source: "web",
      metadata: { browser: "Safari", location: "France" },
    },
  },
  {
    id: "adsasagsdai",
    timestamp: "2023-01-07T20:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "1111",
      // action: "view", // Missing action
      userId: "131",
      userName: "Olivia Brown",
      source: "email",
      metadata: { campaign: "promotion", location: "USA" },
    },
  },
  {
    id: "adsasagsdaj",
    timestamp: "2023-01-08T21:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "2222",
      action: "add_to_cart",
      // userId: "132", // Missing userId
      userName: "James Anderson",
      source: "web",
      metadata: { browser: "Chrome", location: "Italy" },
    },
  },

  // Edge Case Events
  {
    id: "adsasagsdak",
    timestamp: "2023-01-09T22:00:00.000Z",
    payload: {
      targetEntity: "product",
      targetId: "3333",
      action: "view",
      userId: "133",
      userName: "Eve Roberts",
      source: "mobile_app",
      metadata: { os: "iOS", location: "Spain" },
    },
  },
];
