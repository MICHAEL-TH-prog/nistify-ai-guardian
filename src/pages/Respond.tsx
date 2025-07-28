import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Clock, Users, FileText, CheckCircle, Plus, Play } from "lucide-react";

const Respond = () => {
  const activeIncidents = [
    {
      id: "INC-2024-001",
      title: "Suspicious Network Activity",
      severity: "high",
      status: "investigating",
      assignee: "Security Team",
      timeElapsed: "2h 15m",
      sla: "4h"
    },
    {
      id: "INC-2024-002", 
      title: "Failed Authentication Attempts",
      severity: "medium",
      status: "containment",
      assignee: "John Smith",
      timeElapsed: "45m",
      sla: "2h"
    },
    {
      id: "INC-2024-003",
      title: "Malware Detection",
      severity: "high",
      status: "eradication", 
      assignee: "Sarah Johnson",
      timeElapsed: "6h 30m",
      sla: "8h"
    }
  ];

  const playbooks = [
    { name: "Malware Response", version: "v2.1", lastUpdated: "2024-01-15", status: "active" },
    { name: "Data Breach Response", version: "v1.8", lastUpdated: "2024-01-10", status: "active" },
    { name: "DDoS Attack Response", version: "v1.5", lastUpdated: "2024-01-05", status: "review" },
    { name: "Insider Threat Response", version: "v2.0", lastUpdated: "2024-01-20", status: "active" },
  ];

  const responseTeam = [
    { name: "John Smith", role: "Incident Commander", status: "available", lastActive: "5m ago" },
    { name: "Sarah Johnson", role: "Security Analyst", status: "busy", lastActive: "Active now" },
    { name: "Mike Davis", role: "IT Manager", status: "available", lastActive: "15m ago" },
    { name: "Anna Wilson", role: "Communications Lead", status: "available", lastActive: "2m ago" },
  ];

  const communicationLog = [
    { timestamp: "10:30", author: "System", message: "Incident INC-2024-001 escalated to high priority", type: "system" },
    { timestamp: "10:25", author: "John Smith", message: "Containment measures implemented for affected systems", type: "update" },
    { timestamp: "10:15", author: "Sarah Johnson", message: "Initial analysis complete. Suspicious traffic confirmed", type: "analysis" },
    { timestamp: "10:00", author: "System", message: "New incident INC-2024-001 created automatically", type: "system" },
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
            <h1 className="text-3xl font-bold text-foreground">Respond Module</h1>
            <p className="text-muted-foreground">Incident response and crisis management</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-respond text-white">NIST RS</Badge>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Incident
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Incidents</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-nist-respond" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  <p className="text-2xl font-bold text-foreground">32m</p>
                </div>
                <Clock className="w-10 h-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Team Availability</p>
                  <p className="text-2xl font-bold text-foreground">75%</p>
                </div>
                <Users className="w-10 h-10 text-success" />
              </div>
              <Progress value={75} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Playbook Coverage</p>
                  <p className="text-2xl font-bold text-foreground">92%</p>
                </div>
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <Progress value={92} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Active Incidents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeIncidents.map((incident, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{incident.id}</h4>
                      <p className="text-sm text-muted-foreground">{incident.title}</p>
                    </div>
                    <Badge variant={getSeverityColor(incident.severity)}>
                      {incident.severity}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium">{incident.status}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Assignee</p>
                      <p className="font-medium">{incident.assignee}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Time Elapsed</p>
                      <p className="font-medium">{incident.timeElapsed}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">SLA</p>
                      <p className="font-medium">{incident.sla}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Progress 
                      value={(parseFloat(incident.timeElapsed) / parseFloat(incident.sla)) * 100} 
                      className="h-2" 
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Response Playbooks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {playbooks.map((playbook, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Play className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{playbook.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {playbook.version} • Updated {playbook.lastUpdated}
                      </p>
                    </div>
                  </div>
                  <Badge variant={playbook.status === "active" ? "default" : "secondary"}>
                    {playbook.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Response Team Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {responseTeam.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === "available" ? "bg-success" :
                      member.status === "busy" ? "bg-warning" : "bg-destructive"
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={member.status === "available" ? "default" : "secondary"}>
                      {member.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{member.lastActive}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Communication Log
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {communicationLog.map((log, index) => (
                <div key={index} className="flex items-start space-x-3 p-2">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    log.type === "system" ? "bg-primary" :
                    log.type === "update" ? "bg-success" :
                    log.type === "analysis" ? "bg-warning" : "bg-muted"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                      <span className="text-xs font-medium">{log.author}</span>
                    </div>
                    <p className="text-sm text-foreground">{log.message}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Respond;