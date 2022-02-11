export type LoginValuesType = {
  usernameOrEmail : string,
  password : string
}

// type userType = {
//   username : string,

// }
export type TasksType = {
  title : string,
  start_time : string,
  end_time : string,
  note : string,
  date? : string
}

export type RegisterValuesType = {
  username : string,
  email : string,
  password : string,
  retry_password?: string,
  first_name : string,
  last_name : string,
}
export type UserSlicerType = {
  auth : null | Boolean,
  user : any,
  token : null | string,
  loading : boolean
}

export type CurrentReminderType = {
  id: number,
  title: string,
  start_time: any,
  end_time: any,
  date: any,
  favorite: boolean,
  note: string,
  user: number
}
export type ReminderSliceType = {
  loading : boolean,
  reminders : any,
  currentReminder : CurrentReminderType | null,
}