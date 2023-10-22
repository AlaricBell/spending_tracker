import { create } from "zustand";

type ToasterVariant = "error" | "success";

interface ToasterState {
	isOpen: boolean;
	content: string;
	variant: ToasterVariant;
	setIsOpen: (value: boolean) => void;
	setContent: (content: string) => void;
	setVariant: (variant: ToasterVariant) => void;
}

export const useToasterStore = create<ToasterState>()((set) => ({
	isOpen: false,
	content: "",
	variant: "error",
	setIsOpen: (value) => set((state) => ({ isOpen: value })),
	setContent: (content) => set((state) => ({ content })),
	setVariant: (variant) => set((state) => ({ variant })),
}));
