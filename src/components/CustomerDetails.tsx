
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomerDetailsProps {
  customerDetails: {
    name: string;
  };
  onDetailsChange: (details: { name: string }) => void;
}

const CustomerDetails = ({ customerDetails, onDetailsChange }: CustomerDetailsProps) => {
  const handleChange = (field: string, value: string) => {
    onDetailsChange({
      ...customerDetails,
      [field]: value
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Your Details</h3>
        <p className="text-gray-400">Please provide your name for the booking</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="customerName" className="text-white mb-2 block">
            Full Name *
          </Label>
          <Input
            id="customerName"
            type="text"
            placeholder="Enter your full name"
            value={customerDetails.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;

