import { Card, CardContent } from "@/components/ui/card";
import { ComponentType } from "react";

interface ContactInfoProps {
  Icon: ComponentType<{ className?: string }>;
  title: string;
  contactInfo: string;
  hrefInfo: string;
}

const ContactInfo = ({
  Icon,
  title,
  contactInfo,
  hrefInfo,
}: ContactInfoProps) => {
  return (
    <Card>
      <CardContent className="p-6 flex items-start gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">
            <a href={hrefInfo} className="hover:underline">
              {contactInfo}
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
