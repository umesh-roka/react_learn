




export const userSlice = createSlice({
  name:'userSlice',
  initialstate:{
    users:[]
  },
  reducers:{
  addUser:(state,action)=>{
    state.users.push(action.payload);
  }
  }
});
export const {addUser}= userSlice.actions;
