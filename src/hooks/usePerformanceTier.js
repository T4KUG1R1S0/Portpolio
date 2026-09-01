import { useState, useEffect } from 'react';

export function usePerformanceTier() {
  const [tier, setTier] = useState('high'); // 'low' | 'medium' | 'high'

  useEffect(() => {
    // Cek jumlah CPU Cores
    const cores = navigator.hardwareConcurrency || 4;
    // Cek koneksi / memory jika ada
    const isLowEndDevice = cores <= 4;

    if (isLowEndDevice) {
      setTier('low');
    } else if (cores <= 6) {
      setTier('medium');
    } else {
      setTier('high');
    }
  }, []);

  return tier;
}