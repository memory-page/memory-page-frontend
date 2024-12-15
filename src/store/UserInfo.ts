import { create } from 'zustand';

const UserInfo = create((set) => ({
  id: '',
  board_name: '어드민',
  password: '1234',
  bg_num: 0,
  graduated_at: '2024-11-30',

  setID: (newID: string) => set(() => ({ id: newID })),

  setBoardName: (newBoardName: string) =>
    set(() => ({ board_name: newBoardName })),

  setPassword: (newPassword: string) => set(() => ({ password: newPassword })),

  setBgNum: (newBgNum: number) => set(() => ({ bg_num: newBgNum })),

  setGraduatedAt: (newGraduatedAt: string) =>
    set(() => ({ graduated_at: newGraduatedAt })),
}));

export default UserInfo;
