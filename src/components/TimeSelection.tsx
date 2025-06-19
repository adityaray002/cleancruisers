
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface TimeSelectionProps {
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

const TimeSelection = ({ selectedTime, onTimeSelect }: TimeSelectionProps) => {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const dates = [
    { date: "Today", day: "15 Jun" },
    { date: "Tomorrow", day: "16 Jun" },
    { date: "Day After", day: "17 Jun" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-green-400" />
            Select Date
          </h3>
          <div className="space-y-3">
            {dates.map((dateOption, index) => (
              <Card key={index} className="bg-gray-800 border-gray-600 hover:border-green-400 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{dateOption.date}</span>
                    <span className="text-gray-400">{dateOption.day}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-green-400" />
            Select Time
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={`text-sm ${
                  selectedTime === time
                    ? "bg-green-400 hover:bg-green-500 text-black"
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => onTimeSelect(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSelection;
