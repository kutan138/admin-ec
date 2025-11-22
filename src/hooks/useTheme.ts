import { useContext } from 'react';
import { ThemeContext } from '@/providers/theme/ThemeContext';

export const useTheme = () => useContext(ThemeContext);

