import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Server, Users, AlertTriangle, CheckCircle, Plus, Database } from "lucide-react";

const Identify = () => {
  const assets = [
    { name: "Customer Database", type: "Database", criticality: "high", lastAssessed: "2024-01-15" },
    { name: "Web Application Server", type: "Server", criticality: "high", lastAssessed: "2024-01-20" },
    { name: "File Server", type: "Server", criticality: "medium", lastAssessed: "2024-01-10" },
    { name: "Email System", type: "Application", criticality: "medium", lastAssessed: "2024-01-25" },
  ];

  const risks = [
    { id: "RISK-001", description: "Unpatched server vulnerabilities", likelihood: "high", impact: "high", status: "open" },
    { id: "RISK-002", description: "Weak password policies", likelihood: "medium", impact: "medium", status: "mitigating" },
    { id: "RISK-003", description: "Lack of data encryption", likelihood: "low", impact: "high", status: "open" },
    { id: "RISK-004", description: "Insufficient backup procedures", likelihood: "medium", impact: "high", status: "closed" },
  ];

  const getRiskColor = (likelihood: string, impact: string) => {
    if ((likelihood === "high" && impact === "high") || 
        (likelihood === "high" && impact === "medium") ||
        (likelihood === "medium" && impact === "high")) {
      return "destructive";
    }
    if (likelihood === "medium" || impact === "medium") {
      return "secondary";
    }
    return "default";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Identify Module</h1>
            <p className="text-muted-foreground">Asset management and risk assessment</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-identify text-white">NIST ID</Badge>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Asset
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Assets</p>
                  <p className="text-2xl font-bold text-foreground">247</p>
                </div>
                <Database className="w-10 h-10 text-nist-identify" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">High Risk Assets</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Open Risks</p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Assessment Coverage</p>
                  <p className="text-2xl font-bold text-foreground">78%</p>
                </div>
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <Progress value={78} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Asset Inventory
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {assets.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{asset.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {asset.type} • Last assessed: {asset.lastAssessed}
                      </p>
                    </div>
                  </div>
                  <Badge variant={
                    asset.criticality === "high" ? "destructive" :
                    asset.criticality === "medium" ? "secondary" : "default"
                  }>
                    {asset.criticality} criticality
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Risk Register
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {risks.map((risk, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`w-5 h-5 ${
                      getRiskColor(risk.likelihood, risk.impact) === "destructive" ? "text-destructive" :
                      getRiskColor(risk.likelihood, risk.impact) === "secondary" ? "text-warning" : "text-primary"
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{risk.id}</p>
                      <p className="text-sm text-muted-foreground">{risk.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {risk.likelihood} likelihood
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {risk.impact} impact
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Badge variant={
                    risk.status === "open" ? "destructive" :
                    risk.status === "mitigating" ? "secondary" : "default"
                  }>
                    {risk.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Identify;