import { create } from 'zustand';

interface UserInfoState {
  board_name: string;
  password: string;
  graduated_at: string;
  setBoardName: (name: string) => void;
  setPassword: (password: string) => void;
  setGraduatedAt: (date: string) => void;
}

const useUserInfo = create<UserInfoState>((set) => ({
  board_name: '',
  password: '',
  graduated_at: '',
  setBoardName: (name) => set(() => ({ board_name: name })),
  setPassword: (password) => set(() => ({ password })),
  setGraduatedAt: (date) => set(() => ({ graduated_at: date })),
}));

export default useUserInfo;
