import { create } from 'zustand';

interface ReadMoreState {
  clickCount: number;
  increment: () => void;
}

// store for managing on 'read more' button click count on Blog cards
const useReadMoreStore = create<ReadMoreState>((set) => ({
  clickCount: 0,
  increment: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));

export default useReadMoreStore;
