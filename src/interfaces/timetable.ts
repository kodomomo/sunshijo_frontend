export interface constantType {
  number: string;
  text: string;
}

export interface getParamsType {
  grade: string;
  class_num: string;
  startAt: string;
  endAt: string;
}

export interface changeTimetableType {
  record_id: string;
  origin_grade: string;
  origin_class: string;
  origin_gradations: string;
  origin_day: string;
  origin_name: string;
  new_grade: string;
  new_class: string;
  new_gradations: string;
  new_day: string;
  new_name: string;
  name: string;
}

export interface periodType {
  grade: string;
  class_num: string;
  name: string;
  gradations: string;
  day_at: string;
  week_of_day: string;
}

export interface timetableType {
  0?: periodType[];
  1?: periodType[];
  2?: periodType[];
  3?: periodType[];
  4?: periodType[];
}
