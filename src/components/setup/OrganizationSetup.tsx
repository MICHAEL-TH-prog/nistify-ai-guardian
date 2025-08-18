import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, DollarSign, Shield, CheckCircle, ArrowRight } from "lucide-react";

interface OrganizationData {
  name: string;
  size: string;
  sector: string;
  customSector: string;
  regulations: string[];
  currentProfile: string;
  targetProfile: string;
}

const companySizes = [
  "1-10 employees",
  "11-50 employees", 
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees"
];


const sectors = [
  "Financial Services",
  "Healthcare",
  "Technology",
  "Manufacturing",
  "Retail",
  "Government",
  "Education",
  "Energy & Utilities",
  "Other"
];

const regulations = [
  "HIPAA",
  "SOC 2",
  "ISO 27001"
];

const profiles = [
  { id: "tier1", name: "Tier 1: Partial", description: "Basic cybersecurity practices" },
  { id: "tier2", name: "Tier 2: Risk Informed", description: "Regular risk assessments" },
  { id: "tier3", name: "Tier 3: Repeatable", description: "Formal processes and procedures" },
  { id: "tier4", name: "Tier 4: Adaptive", description: "Advanced and adaptive cybersecurity" }
];

export const OrganizationSetup = () => {
  const [step, setStep] = useState(1);
  const [orgData, setOrgData] = useState<OrganizationData>({
    name: "",
    size: "",
    sector: "",
    customSector: "",
    regulations: [],
    currentProfile: "",
    targetProfile: ""
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleRegulationChange = (regulation: string, checked: boolean) => {
    setOrgData(prev => ({
      ...prev,
      regulations: checked 
        ? [...prev.regulations, regulation]
        : prev.regulations.filter(r => r !== regulation)
    }));
  };

  const isStepComplete = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return orgData.name && orgData.size && (orgData.sector !== "Other" ? orgData.sector : orgData.customSector);
      case 2:
        return orgData.regulations.length > 0;
      case 3:
        return orgData.currentProfile;
      case 4:
        return orgData.targetProfile;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Organization Setup</h1>
        <p className="text-muted-foreground">
          Let's configure your NIST Cybersecurity Framework implementation
        </p>
        <div className="max-w-md mx-auto">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">
            Step {step} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Step 1: Company Metadata */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input
                  id="company-name"
                  placeholder="Enter your company name"
                  value={orgData.name}
                  onChange={(e) => setOrgData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Company Size</Label>
                <Select 
                  value={orgData.size} 
                  onValueChange={(value) => setOrgData(prev => ({ ...prev, size: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    {companySizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {size}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Industry Sector</Label>
                <Select 
                  value={orgData.sector} 
                  onValueChange={(value) => setOrgData(prev => ({ ...prev, sector: value, customSector: value === "Other" ? "" : prev.customSector }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {orgData.sector === "Other" && (
                  <Input
                    placeholder="Please specify your industry sector"
                    value={orgData.customSector}
                    onChange={(e) => setOrgData(prev => ({ ...prev, customSector: e.target.value }))}
                    className="mt-2"
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Regulations */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Compliance Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Select all regulations and compliance frameworks that apply to your organization:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regulations.map((regulation) => (
                <div key={regulation} className="flex items-center space-x-2">
                  <Checkbox
                    id={regulation}
                    checked={orgData.regulations.includes(regulation)}
                    onCheckedChange={(checked) => 
                      handleRegulationChange(regulation, checked as boolean)
                    }
                  />
                  <Label htmlFor={regulation} className="text-sm">
                    {regulation}
                  </Label>
                </div>
              ))}
            </div>
            
            {orgData.regulations.length > 0 && (
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm font-medium mb-2">Selected Regulations:</p>
                <div className="flex flex-wrap gap-2">
                  {orgData.regulations.map((reg) => (
                    <Badge key={reg} variant="secondary">
                      {reg}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Current Profile */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Current Cybersecurity Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              What best describes your current cybersecurity maturity level?
            </p>
            
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  orgData.currentProfile === profile.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setOrgData(prev => ({ ...prev, currentProfile: profile.id }))}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">{profile.name}</h3>
                    <p className="text-sm text-muted-foreground">{profile.description}</p>
                  </div>
                  {orgData.currentProfile === profile.id && (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Step 4: Target Profile */}
      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Target Cybersecurity Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              What cybersecurity maturity level would you like to achieve?
            </p>
            
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  orgData.targetProfile === profile.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setOrgData(prev => ({ ...prev, targetProfile: profile.id }))}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">{profile.name}</h3>
                    <p className="text-sm text-muted-foreground">{profile.description}</p>
                  </div>
                  {orgData.targetProfile === profile.id && (
                    <CheckCircle className="w-5 h-5 text-primary" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          Previous
        </Button>
        
        <div className="flex items-center space-x-2">
          {step < totalSteps ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!isStepComplete(step)}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => {
                // Save organization data and proceed to dashboard
                console.log("Organization setup complete:", orgData);
              }}
              disabled={!isStepComplete(step)}
            >
              Complete Setup
              <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};