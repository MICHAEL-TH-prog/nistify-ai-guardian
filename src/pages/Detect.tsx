import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Eye, Activity, AlertTriangle, CheckCircle, Plus, Radar, Bell } from "lucide-react";

const Detect = () => {
  const detectionSystems = [
    { name: "Network Monitoring", status: "active", coverage: 95, alerts: 12 },
    { name: "Endpoint Detection", status: "active", coverage: 88, alerts: 8 },
    { name: "Log Analysis", status: "maintenance", coverage: 72, alerts: 0 },
    { name: "Behavioral Analytics", status: "active", coverage: 65, alerts: 3 },
  ];

  const recentAlerts = [
    { 
      id: "ALERT-001", 
      severity: "high", 
      description: "Multiple failed login attempts detected",
      timestamp: "2024-01-28 10:30:15",
      status: "investigating"
    },
    { 
      id: "ALERT-002", 
      severity: "medium", 
      description: "Unusual network traffic pattern",
      timestamp: "2024-01-28 09:15:42",
      status: "resolved"
    },
    { 
      id: "ALERT-003", 
      severity: "low", 
      description: "New device connected to network",
      timestamp: "2024-01-28 08:45:12",
      status: "investigating"
    },
    { 
      id: "ALERT-004", 
      severity: "high", 
      description: "Potential data exfiltration attempt",
      timestamp: "2024-01-27 16:22:08",
      status: "escalated"
    },
  ];

  const anomalies = [
    { type: "Traffic Spike", confidence: 92, source: "Web Server", impact: "medium" },
    { type: "Off-hours Access", confidence: 85, source: "Database Server", impact: "high" },
    { type: "Unusual File Access", confidence: 78, source: "File Server", impact: "low" },
    { type: "Geographic Anomaly", confidence: 95, source: "User Login", impact: "high" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "default";
      default: return "default";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Detect Module</h1>
            <p className="text-muted-foreground">Continuous monitoring and anomaly detection</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-detect text-white">NIST DE</Badge>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Monitor
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Monitors</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <Eye className="w-10 h-10 text-nist-detect" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Alerts</p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
                <Bell className="w-10 h-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Anomalies Detected</p>
                  <p className="text-2xl font-bold text-foreground">7</p>
                </div>
                <Radar className="w-10 h-10 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Detection Coverage</p>
                  <p className="text-2xl font-bold text-foreground">82%</p>
                </div>
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <Progress value={82} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Detection Systems Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {detectionSystems.map((system, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        system.status === "active" ? "bg-success" :
                        system.status === "maintenance" ? "bg-warning" : "bg-destructive"
                      }`} />
                      <div>
                        <p className="font-medium text-foreground">{system.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {system.alerts} active alerts
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={system.status === "active" ? "default" : "secondary"}>
                        {system.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {system.coverage}% coverage
                      </p>
                    </div>
                  </div>
                  <Progress value={system.coverage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Recent Security Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`w-5 h-5 ${
                      alert.severity === "high" ? "text-destructive" :
                      alert.severity === "medium" ? "text-warning" : "text-primary"
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{alert.id}</p>
                      <p className="text-sm text-muted-foreground">{alert.description}</p>
                      <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={getSeverityColor(alert.severity)}>
                      {alert.severity}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{alert.status}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Radar className="w-5 h-5 mr-2" />
              Anomaly Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {anomalies.map((anomaly, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{anomaly.type}</h4>
                    <Badge variant={
                      anomaly.impact === "high" ? "destructive" :
                      anomaly.impact === "medium" ? "secondary" : "default"
                    }>
                      {anomaly.impact} impact
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Source: {anomaly.source}
                  </p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Confidence Level</span>
                      <span>{anomaly.confidence}%</span>
                    </div>
                    <Progress value={anomaly.confidence} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Detect;