import React, { useState, useEffect } from "react";
import clsx from "clsx";

interface ToastProps {
  message: string;
  duration?: number;
  containerClassName?: string;
}

export function Toast({
  message,
  duration = 3000,
  containerClassName,
}: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    visible && (
      <div
        className={clsx(
          "fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded shadow-lg",
          containerClassName
        )}
      >
        {message}
      </div>
    )
  );
}
