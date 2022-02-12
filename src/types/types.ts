export type LoginValuesType = {
  usernameOrEmail : string,
  password : string
}

export type TasksType = {
  id?: number,
  title : string,
  start_time : string,
  end_time : string | null,
  note : string,
  date? : string,
  favorite?: boolean,
  user?: number,
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


export type ReminderSliceType = {
  loading : boolean,
  reminders : any,
  currentReminder : TasksType | null,
  currentOption : 'today' | 'upcomming-events' | 'important'
}