export const EntryStatus = {
  Admin: "Admin",
  Tentative: "Tentative",
  Reserved: "Reserved",
  Held: "Held",
  InRoom: "In Room",
  History: "History",
  Occupant: "Occupant",
  OccupantHistory: "Occupant History",
  OccupantInRoom: "Occupant In Room",
  Attendee: "Attendee",
  AttendeeArrived: "Attendee Arrived",
  AttendeeDeparted: "Attendee Departed",
  Account: "Account",
  Cancelled: "Cancelled",
  Application: "Application",
  Contact: "Contact",
} as const;

export type EntryStatus = typeof EntryStatus[keyof typeof EntryStatus];