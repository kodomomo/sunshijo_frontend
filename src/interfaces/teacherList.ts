export interface teacherType {
  teacher_id: string;
  name: string;
  work_place: string;
  subject: string;
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
