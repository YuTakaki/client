export type LoginValuesType = {
  usernameOrEmail : string,
  password : string
}

// type userType = {
//   username : string,

// }
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