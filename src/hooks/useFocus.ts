import { useRef } from 'react';

export default function useFocus() {
  const ref = useRef<HTMLInputElement>(null);
  const setFocus = () => {
    ref.current && ref.current.focus();
  };

  return { ref, setFocus };
}
