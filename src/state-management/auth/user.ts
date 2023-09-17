import { create } from "zustand";

interface UserStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<UserStore>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
