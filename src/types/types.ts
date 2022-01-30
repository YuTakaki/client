export type LoginValuesType = {
  usernameOrEmail : string,
  password : string
}

// type userType = {
//   username : string,

// }
export type UserSlicerType = {
  auth : null | Boolean,
  user : any,
  token : null | string,
  loading : boolean
}