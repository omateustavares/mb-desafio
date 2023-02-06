export type EventData = {
  id?: string;
  title: string;
  description: string;
  date_and_time: string;
  local: string;
  additional_information?: string;
};

export type EventDataView = {
  id?: string;
  title: string;
  description: string;
  date_and_time: string;
  local: string;
  additional_information?: string;
  toEdit: string;
  eventId: string;
};
