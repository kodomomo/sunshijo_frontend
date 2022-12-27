export interface constantType {
  number: string;
  text: string;
}

export interface getParamsType {
  grade: string;
  classNum: string;
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
  mon?: periodType[];
  tue?: periodType[];
  wed?: periodType[];
  thu?: periodType[];
  fri?: periodType[];
}

export interface recordsType {
  origin_grade: string;
  origin_class: string;
  origin_subject: string;
  origin_date: string;
  origin_gradations: string;
  new_grade: string;
  new_class: string;
  new_date: string;
  new_subject: string;
  new_gradations: string;
  new_teacher_id: string;
}
