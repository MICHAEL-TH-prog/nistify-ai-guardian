import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Clock, Database, CheckCircle, AlertTriangle, Plus, RefreshCw } from "lucide-react";

const Recover = () => {
  const recoveryPlans = [
    { 
      name: "Database Recovery Plan", 
      type: "Data Recovery", 
      rto: "2 hours", 
      rpo: "15 minutes", 
      lastTested: "2024-01-15",
      status: "current"
    },
    { 
      name: "Network Infrastructure Recovery", 
      type: "Infrastructure", 
      rto: "4 hours", 
      rpo: "1 hour", 
      lastTested: "2024-01-10",
      status: "current"
    },
    { 
      name: "Application Recovery Plan", 
      type: "Application", 
      rto: "1 hour", 
      rpo: "30 minutes", 
      lastTested: "2023-12-20",
      status: "outdated"
    },
    { 
      name: "Communication Systems Recovery", 
      type: "Communication", 
      rto: "30 minutes", 
      rpo: "5 minutes", 
      lastTested: "2024-01-25",
      status: "current"
    }
  ];

  const backupStatus = [
    { system: "Customer Database", lastBackup: "2024-01-28 02:00", status: "success", size: "125 GB" },
    { system: "Application Server", lastBackup: "2024-01-28 02:15", status: "success", size: "45 GB" },
    { system: "File Server", lastBackup: "2024-01-28 01:45", status: "failed", size: "0 GB" },
    { system: "Email System", lastBackup: "2024-01-28 02:30", status: "success", size: "78 GB" },
  ];

  const recoveryMetrics = [
    { name: "Recovery Time Objective (RTO)", current: "2.5 hours", target: "2 hours", status: "warning" },
    { name: "Recovery Point Objective (RPO)", current: "30 minutes", target: "15 minutes", status: "warning" },
    { name: "Mean Time to Recovery (MTTR)", current: "45 minutes", target: "30 minutes", status: "warning" },
    { name: "Backup Success Rate", current: "95%", target: "99%", status: "good" },
  ];

  const recentRecoveries = [
    {
      incident: "File Server Failure",
      system: "File Server",
      startTime: "2024-01-25 14:30",
      endTime: "2024-01-25 16:45",
      duration: "2h 15m",
      dataLoss: "5 minutes",
      status: "completed"
    },
    {
      incident: "Network Outage",
      system: "Network Infrastructure", 
      startTime: "2024-01-20 09:15",
      endTime: "2024-01-20 10:30",
      duration: "1h 15m",
      dataLoss: "None",
      status: "completed"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Recover Module</h1>
            <p className="text-muted-foreground">Business continuity and recovery planning</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-recover text-white">NIST RC</Badge>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Recovery Plan
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Recovery Plans</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <RotateCcw className="w-10 h-10 text-nist-recover" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Backup Success</p>
                  <p className="text-2xl font-bold text-foreground">95%</p>
                </div>
                <Database className="w-10 h-10 text-success" />
              </div>
              <Progress value={95} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average RTO</p>
                  <p className="text-2xl font-bold text-foreground">2.5h</p>
                </div>
                <Clock className="w-10 h-10 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Recovery Score</p>
                  <p className="text-2xl font-bold text-foreground">78%</p>
                </div>
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <Progress value={78} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RotateCcw className="w-5 h-5 mr-2" />
                Recovery Plans
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recoveryPlans.map((plan, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{plan.name}</h4>
                      <p className="text-sm text-muted-foreground">{plan.type}</p>
                    </div>
                    <Badge variant={plan.status === "current" ? "default" : "destructive"}>
                      {plan.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">RTO</p>
                      <p className="font-medium">{plan.rto}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">RPO</p>
                      <p className="font-medium">{plan.rpo}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">
                      Last tested: {plan.lastTested}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Backup Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {backupStatus.map((backup, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {backup.status === "success" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    )}
                    <div>
                      <p className="font-medium text-foreground">{backup.system}</p>
                      <p className="text-sm text-muted-foreground">
                        {backup.lastBackup} • {backup.size}
                      </p>
                    </div>
                  </div>
                  <Badge variant={backup.status === "success" ? "default" : "destructive"}>
                    {backup.status}
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
                <Clock className="w-5 h-5 mr-2" />
                Recovery Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recoveryMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{metric.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Current: {metric.current} | Target: {metric.target}
                      </p>
                    </div>
                    {metric.status === "good" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-warning" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="w-5 h-5 mr-2" />
                Recent Recovery Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentRecoveries.map((recovery, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{recovery.incident}</h4>
                    <Badge variant="default">{recovery.status}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">System</p>
                      <p className="font-medium">{recovery.system}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-medium">{recovery.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Data Loss</p>
                      <p className="font-medium">{recovery.dataLoss}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Completed</p>
                      <p className="font-medium">{recovery.endTime}</p>
                    </div>
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

export default Recover;