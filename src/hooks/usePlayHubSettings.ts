import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ADULT_KEY = "playhub_18plus";
const COINS_KEY = "playhub_coins";

const readBoolean = (key: string, fallback = false) => {
  if (typeof window === "undefined") return fallback;
  return window.localStorage.getItem(key) === "true";
};

const readNumber = (key: string, fallback = 0) => {
  if (typeof window === "undefined") return fallback;
  const parsed = Number(window.localStorage.getItem(key));
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const usePlayHubSettings = () => {
  const [adultEnabled, setAdultEnabled] = useState<boolean>(() => readBoolean(ADULT_KEY, false));
  const [coins, setCoins] = useState<number>(() => readNumber(COINS_KEY, 320));
  const coinsRef = useRef(coins);

  useEffect(() => {
    coinsRef.current = coins;
  }, [coins]);

  useEffect(() => {
    window.localStorage.setItem(ADULT_KEY, String(adultEnabled));
  }, [adultEnabled]);

  useEffect(() => {
    window.localStorage.setItem(COINS_KEY, String(coins));
  }, [coins]);

  useEffect(() => {
    const onStorage = () => {
      setAdultEnabled(readBoolean(ADULT_KEY, false));
      setCoins(readNumber(COINS_KEY, 320));
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const earnCoins = useCallback((amount: number) => {
    const safeAmount = Math.max(0, Math.floor(amount));
    if (safeAmount === 0) return;
    setCoins((prev) => prev + safeAmount);
  }, []);

  const spendCoins = useCallback((amount: number) => {
    const safeAmount = Math.max(0, Math.floor(amount));
    if (safeAmount === 0) return true;
    if (coinsRef.current < safeAmount) return false;
    setCoins((prev) => prev - safeAmount);
    return true;
  }, []);

  const formattedCoins = useMemo(() => coins.toLocaleString(), [coins]);

  return {
    adultEnabled,
    setAdultEnabled,
    coins,
    formattedCoins,
    earnCoins,
    spendCoins,
  };
};
