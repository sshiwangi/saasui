"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const Calendar = ({
  initialDate = new Date(),
  onDateSelect,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    onDateSelect?.(newDate);
  };

  const generateCalendarDays = () => {
    const days = [];
    const totalCells = Math.ceil((totalDays + startingDayOfWeek) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - startingDayOfWeek + 1;
      const isValidDay = dayNumber > 0 && dayNumber <= totalDays;

      if (isValidDay) {
        const date = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          dayNumber
        );
        const isSelected = selectedDate?.toDateString() === date.toDateString();

        days.push(
          <button
            key={i}
            onClick={() => handleDateClick(dayNumber)}
            className={cn(
              "w-8 h-8 rounded-full text-sm flex items-center justify-center",
              "hover:bg-primary-light transition-colors",
              isSelected &&
                "bg-secondary-dark text-neutrals-light hover:bg-secondary-light",
              !isSelected && "text-neutrals-light"
            )}
          >
            {dayNumber}
          </button>
        );
      } else {
        days.push(<div key={i} className="w-8 h-8" />);
      }
    }

    return days;
  };

  return (
    <Card className="w-[320px] p-4 bg-primary-dark border-primary-ash">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={previousMonth}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-light transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-primary-muted" />
        </button>

        <h2 className="text-base font-semibold text-neutrals-light">
          {monthYear}
        </h2>

        <button
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary-light transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-primary-muted" />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="h-8 flex items-center justify-center text-sm text-primary-muted"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-y-2">{generateCalendarDays()}</div>

      {/* Clear Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => {
            setSelectedDate(null);
            onDateSelect?.(null as any);
          }}
          className="px-4 py-2 text-sm text-primary-muted hover:bg-primary-light rounded-lg transition-colors"
        >
          Clear
        </button>
      </div>
    </Card>
  );
};

export default Calendar;
