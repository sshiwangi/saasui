"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  onClose?: () => void;
}

const TimePicker = ({
  value = "12:30 PM",
  onChange,
  onClose,
}: TimePickerProps) => {
  const [selectedTime, setSelectedTime] = useState(value);

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 0; i < 24; i++) {
      const hour = i % 12 || 12;
      const period = i < 12 ? "AM" : "PM";
      slots.push(`${hour.toString().padStart(2, "0")}:00 ${period}`);
      slots.push(`${hour.toString().padStart(2, "0")}:30 ${period}`);
    }
    return slots;
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    onChange?.(time);
  };

  return (
    <Card className="w-[320px] bg-primary-dark border-primary-ash shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-primary-ash">
        <h2 className="text-xl font-medium text-neutrals-light">
          {selectedTime}
        </h2>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-light transition-colors"
        >
          <X className="w-5 h-5 text-primary-muted" />
        </button>
      </div>

      {/* Time Slots */}
      <div className="max-h-[400px] overflow-y-auto py-2 scrollbar-thin">
        {generateTimeSlots().map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={cn(
              "w-full px-4 py-3 text-left transition-colors",
              "flex items-center justify-between",
              time === selectedTime
                ? "bg-primary-light"
                : "hover:bg-primary-ash/50"
            )}
          >
            <span
              className={cn(
                "text-lg",
                time === selectedTime
                  ? "text-secondary-dark"
                  : "text-neutrals-light"
              )}
            >
              {time.split(" ")[0]}
            </span>
            <span
              className={cn(
                "text-lg",
                time === selectedTime
                  ? "text-secondary-dark"
                  : "text-primary-muted"
              )}
            >
              {time.split(" ")[1]}
            </span>
          </button>
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: var(--primary-ash);
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: var(--primary-muted);
        }
      `}</style>
    </Card>
  );
};

export default TimePicker;
