import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, BarChart3, Shield, Eye, AlertTriangle } from "lucide-react";

const Reports = () => {
  const reportTemplates = [
    {
      name: "Executive Summary Report",
      description: "High-level cybersecurity posture overview for leadership",
      type: "Executive",
      frequency: "Monthly",
      lastGenerated: "2024-01-25",
      format: ["PDF", "PowerPoint"]
    },
    {
      name: "Compliance Assessment Report",
      description: "Detailed compliance status against regulatory requirements",
      type: "Compliance",
      frequency: "Quarterly",
      lastGenerated: "2024-01-15",
      format: ["PDF", "Excel"]
    },
    {
      name: "Risk Assessment Report",
      description: "Current risk landscape and mitigation strategies",
      type: "Risk",
      frequency: "Monthly",
      lastGenerated: "2024-01-28",
      format: ["PDF", "Word"]
    },
    {
      name: "Incident Response Report",
      description: "Summary of security incidents and response activities",
      type: "Operational",
      frequency: "Weekly",
      lastGenerated: "2024-01-28",
      format: ["PDF", "Excel"]
    },
    {
      name: "NIST CSF Maturity Report",
      description: "Framework implementation status and maturity scores",
      type: "Maturity",
      frequency: "Quarterly",
      lastGenerated: "2024-01-20",
      format: ["PDF", "Excel"]
    },
    {
      name: "Audit Trail Report",
      description: "Comprehensive evidence archive for external auditors",
      type: "Audit",
      frequency: "On-demand",
      lastGenerated: "2024-01-10",
      format: ["PDF", "Archive"]
    }
  ];

  const scheduledReports = [
    {
      name: "Monthly Executive Summary",
      nextGeneration: "2024-02-01",
      recipients: ["CEO", "CTO", "Board"],
      status: "scheduled"
    },
    {
      name: "Quarterly Compliance Review",
      nextGeneration: "2024-04-01",
      recipients: ["Compliance Team", "External Auditor"],
      status: "scheduled"
    },
    {
      name: "Weekly Incident Summary",
      nextGeneration: "2024-02-05",
      recipients: ["Security Team", "IT Management"],
      status: "scheduled"
    }
  ];

  const recentReports = [
    {
      name: "January 2024 Security Posture Report",
      type: "Executive",
      generatedBy: "System",
      date: "2024-01-28 09:00",
      size: "2.4 MB",
      downloads: 12
    },
    {
      name: "Q4 2023 Compliance Assessment",
      type: "Compliance",
      generatedBy: "Sarah Johnson",
      date: "2024-01-25 14:30",
      size: "5.8 MB",
      downloads: 8
    },
    {
      name: "Risk Register Update - January",
      type: "Risk",
      generatedBy: "Mike Davis",
      date: "2024-01-24 11:15",
      size: "1.9 MB",
      downloads: 15
    },
    {
      name: "Incident Response Summary - Week 4",
      type: "Operational",
      generatedBy: "System",
      date: "2024-01-22 16:00",
      size: "892 KB",
      downloads: 6
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Documentation</h1>
            <p className="text-muted-foreground">Generate and manage compliance reports</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
            <Button>
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Reports</p>
                  <p className="text-2xl font-bold text-foreground">47</p>
                </div>
                <FileText className="w-10 h-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled Reports</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <Calendar className="w-10 h-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Downloads This Month</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                </div>
                <Download className="w-10 h-10 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Evidence Items</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <BarChart3 className="w-10 h-10 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Available Report Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reportTemplates.map((template, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{template.name}</h4>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    <Badge variant="secondary">{template.type}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-muted-foreground">
                        {template.frequency}
                      </span>
                      <span className="text-muted-foreground">
                        Last: {template.lastGenerated}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {template.format.map((format, formatIndex) => (
                        <Badge key={formatIndex} variant="outline" className="text-xs">
                          {format}
                        </Badge>
                      ))}
                      <Button size="sm" variant="outline">
                        <Download className="w-3 h-3 mr-1" />
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Scheduled Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {scheduledReports.map((report, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{report.name}</h4>
                    <Badge variant="default">{report.status}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Next Generation:</span>
                      <span className="font-medium">{report.nextGeneration}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Recipients: </span>
                      <span>{report.recipients.join(", ")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Recent Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {report.type === "Executive" && <Shield className="w-5 h-5 text-primary" />}
                      {report.type === "Compliance" && <FileText className="w-5 h-5 text-primary" />}
                      {report.type === "Risk" && <AlertTriangle className="w-5 h-5 text-primary" />}
                      {report.type === "Operational" && <Eye className="w-5 h-5 text-primary" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{report.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Generated by {report.generatedBy}</span>
                        <span>{report.date}</span>
                        <span>{report.size}</span>
                        <span>{report.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
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

export default Reports;