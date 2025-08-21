import React from 'react';
import { useTheme } from '@/lib/useTheme';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={toggle}
      aria-label={isDark ? 'Cambiar a claro' : 'Cambiar a oscuro'}
      className={className + ' border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black'}
    >
      {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
      {isDark ? 'Claro' : 'Oscuro'}
    </Button>
  );
}
