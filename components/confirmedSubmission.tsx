import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { SetStateAction } from "react";

interface ConfirmedSubmissionProps {
  setIsSubmitted: (value: SetStateAction<boolean>) => void;
}

const ConfirmedSubmission = ({ setIsSubmitted }: ConfirmedSubmissionProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="bg-primary/10 p-4 rounded-full mb-4">
        <Check className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
      <p className="text-muted-foreground text-center mb-6">
        Thank you for reaching out. I&apos;ll get back to you as soon as
        possible.
      </p>
      <Button onClick={() => setIsSubmitted(false)}>
        Send Another Message
      </Button>
    </div>
  );
};

export default ConfirmedSubmission;
