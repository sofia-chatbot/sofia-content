import { create } from 'zustand';

interface GlobalState {
  hasPdf: boolean;
  setHasPdf: (value: boolean) => void;
  sessionId: string;
  setSessionIdGoblal: (value: string) => void;
}

const useStore = create<GlobalState>((set) => ({
  hasPdf: false,
  setHasPdf: (value: boolean) => set({ hasPdf: value }),
  sessionId: '',
  setSessionIdGoblal: (value: string) => set({sessionId: value}),
}));

export default useStore;