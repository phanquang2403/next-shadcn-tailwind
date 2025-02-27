"use client";
import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext({
	sessionToken: "",
	setSessionToken: (token: string) => {},
});

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within a AppProvider");
	}
	return context;
};

interface AppProviderProps {
	readonly children: React.ReactNode;
	readonly initialSessionToken?: string;
}
export default function AppProvider({
	children,
	initialSessionToken = "",
}: AppProviderProps) {
	const [sessionToken, setSessionToken] = useState<string>(initialSessionToken);

	const contextValue = useMemo(
		() => ({ sessionToken, setSessionToken }),
		[sessionToken, setSessionToken]
	);

	return (
		<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
	);
}
