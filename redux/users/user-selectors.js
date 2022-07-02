export const getUserList = (state) => state.users;
export const getUserDataById = (id) => (state) => state.users.find((item) => item.id === id)?.data;