
import React from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertCircle } from "lucide-react";

interface SweetenerDetailsProps {
  name: string;
  description: string;
  activeCompounds: string[];
  therapeuticApplications: string[];
  safetyConsiderations: string[];
}

const SweetenerDetails: React.FC<SweetenerDetailsProps> = ({
  name,
  description,
  activeCompounds,
  therapeuticApplications,
  safetyConsiderations
}) => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Card className="p-6">
        <h4 className="font-semibold mb-4">Active Compounds</h4>
        <ul className="space-y-2">
          {activeCompounds.map((compound, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1">
                <CheckCircle className="h-4 w-4 text-leaf-600" />
              </div>
              <span>{compound}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h4 className="font-semibold mb-4">Therapeutic Applications</h4>
        <ul className="space-y-2">
          {therapeuticApplications.map((application, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1">
                <CheckCircle className="h-4 w-4 text-leaf-600" />
              </div>
              <span>{application}</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6">
        <h4 className="font-semibold mb-4">Safety & Usage Guidelines</h4>
        <ul className="space-y-2">
          {safetyConsiderations.map((consideration, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1">
                <AlertCircle className="h-4 w-4 text-carrot-600" />
              </div>
              <span>{consideration}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default SweetenerDetails;
