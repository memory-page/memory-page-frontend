import { create } from 'zustand';

interface UserInfoState {
  id: string;
  board_name: string;
  password: string;
  bg_num: number;
  graduated_at: string;
  setID: (id: string) => void;
  setBoardName: (name: string) => void;
  setPassword: (password: string) => void;
  setGraduatedAt: (date: string) => void;
}

const useUserInfo = create<UserInfoState>((set) => ({
  id: '',
  board_name: '',
  password: '',
  bg_num: 0,
  graduated_at: '',
  setID: (newID: string) => set(() => ({ id: newID })),
  setBoardName: (name) => set(() => ({ board_name: name })),
  setPassword: (password) => set(() => ({ password })),
  setBgNum: (newBgNum: number) => set(() => ({ bg_num: newBgNum })),
  setGraduatedAt: (date) => set(() => ({ graduated_at: date })),
}));

export default useUserInfo;
