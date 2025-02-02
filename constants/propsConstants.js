export const REQUIRED_KEYS = {
  ID: "id",
  TIMESTAMP: "timestamp",
  PAYLOAD: {
    TARGET_ENTITY: "payload.targetEntity",
    TARGET_ID: "payload.targetId",
    ACTION: "payload.action",
    USER_ID: "payload.userId",
    USER_NAME: "payload.userName",
  },
};

export const REQUIRED_PROPS = [
  REQUIRED_KEYS.ID,
  REQUIRED_KEYS.TIMESTAMP,
  ...Object.values(REQUIRED_KEYS.PAYLOAD),
];
