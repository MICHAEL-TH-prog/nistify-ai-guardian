import { useState } from "react";
import { User, Settings, Bell, LogOut, Shield, HelpCircle, Lock, Eye, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const AdminProfileDropdown = () => {
  const { toast } = useToast();
  const [profileDialog, setProfileDialog] = useState(false);
  const [preferencesDialog, setPreferencesDialog] = useState(false);
  const [notificationsDialog, setNotificationsDialog] = useState(false);
  const [securityDialog, setSecurityDialog] = useState(false);
  const [helpDialog, setHelpDialog] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "admin@company.com",
    phone: "+1 (555) 123-4567",
    role: "Security Administrator",
    department: "Information Security",
    bio: "Experienced cybersecurity professional with 10+ years in risk management and compliance."
  });

  // Preferences state
  const [preferences, setPreferences] = useState({
    theme: "system",
    language: "en",
    timezone: "America/New_York",
    dateFormat: "MM/dd/yyyy",
    dashboardLayout: "default"
  });

  // Notification preferences
  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    pushNotifications: true,
    securityIncidents: true,
    policyUpdates: true,
    riskAlerts: true,
    complianceDeadlines: true,
    weeklyReports: false,
    maintenanceAlerts: true
  });

  // Security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: true,
    sessionTimeout: "30",
    passwordExpiry: "90",
    loginNotifications: true,
    deviceTrust: true
  });

  const handleProfileSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
    setProfileDialog(false);
  };

  const handlePreferencesSave = () => {
    toast({
      title: "Preferences Saved",
      description: "Your account preferences have been updated.",
    });
    setPreferencesDialog(false);
  };

  const handleNotificationsSave = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
    setNotificationsDialog(false);
  };

  const handleSecuritySave = () => {
    toast({
      title: "Security Settings Updated",
      description: "Your security configuration has been updated.",
    });
    setSecurityDialog(false);
  };

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    setLogoutDialog(false);
    // Here you would typically handle the actual logout logic
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <User className="w-4 h-4" />
            <span className="ml-2">Admin</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-background border-border">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={() => setProfileDialog(true)}>
            <User className="w-4 h-4 mr-2" />
            Profile Settings
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => setPreferencesDialog(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Account Preferences
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => setNotificationsDialog(true)}>
            <Bell className="w-4 h-4 mr-2" />
            Notification Settings
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => setSecurityDialog(true)}>
            <Shield className="w-4 h-4 mr-2" />
            Security Settings
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={() => setHelpDialog(true)}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Help & Support
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem 
            onClick={() => setLogoutDialog(true)}
            className="text-destructive focus:text-destructive"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Profile Settings Dialog */}
      <Dialog open={profileDialog} onOpenChange={setProfileDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] bg-background">
          <DialogHeader>
            <DialogTitle>Profile Settings</DialogTitle>
            <DialogDescription>
              Manage your personal information and account details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={profileForm.firstName}
                onChange={(e) => setProfileForm({...profileForm, firstName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={profileForm.lastName}
                onChange={(e) => setProfileForm({...profileForm, lastName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={profileForm.email}
                onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profileForm.phone}
                onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input
                id="role"
                value={profileForm.role}
                onChange={(e) => setProfileForm({...profileForm, role: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={profileForm.department}
                onChange={(e) => setProfileForm({...profileForm, department: e.target.value})}
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileForm.bio}
                onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                className="min-h-[80px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setProfileDialog(false)}>Cancel</Button>
            <Button onClick={handleProfileSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Account Preferences Dialog */}
      <Dialog open={preferencesDialog} onOpenChange={setPreferencesDialog}>
        <DialogContent className="max-w-xl bg-background">
          <DialogHeader>
            <DialogTitle>Account Preferences</DialogTitle>
            <DialogDescription>
              Customize your application settings and display preferences.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select value={preferences.theme} onValueChange={(value) => setPreferences({...preferences, theme: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={preferences.language} onValueChange={(value) => setPreferences({...preferences, language: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={preferences.timezone} onValueChange={(value) => setPreferences({...preferences, timezone: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="America/New_York">Eastern Time</SelectItem>
                    <SelectItem value="America/Chicago">Central Time</SelectItem>
                    <SelectItem value="America/Denver">Mountain Time</SelectItem>
                    <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    <SelectItem value="UTC">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateFormat">Date Format</Label>
                <Select value={preferences.dateFormat} onValueChange={(value) => setPreferences({...preferences, dateFormat: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="MM/dd/yyyy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dd/MM/yyyy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="yyyy-MM-dd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dashboardLayout">Dashboard Layout</Label>
              <Select value={preferences.dashboardLayout} onValueChange={(value) => setPreferences({...preferences, dashboardLayout: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreferencesDialog(false)}>Cancel</Button>
            <Button onClick={handlePreferencesSave}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Notification Settings Dialog */}
      <Dialog open={notificationsDialog} onOpenChange={setNotificationsDialog}>
        <DialogContent className="max-w-xl bg-background">
          <DialogHeader>
            <DialogTitle>Notification Settings</DialogTitle>
            <DialogDescription>
              Configure how and when you receive notifications.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <h4 className="font-medium">Delivery Methods</h4>
              <div className="flex items-center justify-between">
                <Label htmlFor="emailAlerts">Email Alerts</Label>
                <Switch
                  id="emailAlerts"
                  checked={notificationSettings.emailAlerts}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, emailAlerts: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="pushNotifications">Push Notifications</Label>
                <Switch
                  id="pushNotifications"
                  checked={notificationSettings.pushNotifications}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, pushNotifications: checked})}
                />
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Alert Types</h4>
              <div className="flex items-center justify-between">
                <Label htmlFor="securityIncidents">Security Incidents</Label>
                <Switch
                  id="securityIncidents"
                  checked={notificationSettings.securityIncidents}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, securityIncidents: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="policyUpdates">Policy Updates</Label>
                <Switch
                  id="policyUpdates"
                  checked={notificationSettings.policyUpdates}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, policyUpdates: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="riskAlerts">Risk Alerts</Label>
                <Switch
                  id="riskAlerts"
                  checked={notificationSettings.riskAlerts}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, riskAlerts: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="complianceDeadlines">Compliance Deadlines</Label>
                <Switch
                  id="complianceDeadlines"
                  checked={notificationSettings.complianceDeadlines}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, complianceDeadlines: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="weeklyReports">Weekly Reports</Label>
                <Switch
                  id="weeklyReports"
                  checked={notificationSettings.weeklyReports}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, weeklyReports: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="maintenanceAlerts">Maintenance Alerts</Label>
                <Switch
                  id="maintenanceAlerts"
                  checked={notificationSettings.maintenanceAlerts}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, maintenanceAlerts: checked})}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNotificationsDialog(false)}>Cancel</Button>
            <Button onClick={handleNotificationsSave}>Save Settings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Security Settings Dialog */}
      <Dialog open={securityDialog} onOpenChange={setSecurityDialog}>
        <DialogContent className="max-w-xl bg-background">
          <DialogHeader>
            <DialogTitle>Security Settings</DialogTitle>
            <DialogDescription>
              Manage your account security and authentication settings.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch
                id="twoFactor"
                checked={securitySettings.twoFactorEnabled}
                onCheckedChange={(checked) => setSecuritySettings({...securitySettings, twoFactorEnabled: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="loginNotifications">Login Notifications</Label>
                <p className="text-sm text-muted-foreground">Get notified of new device logins</p>
              </div>
              <Switch
                id="loginNotifications"
                checked={securitySettings.loginNotifications}
                onCheckedChange={(checked) => setSecuritySettings({...securitySettings, loginNotifications: checked})}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="deviceTrust">Trusted Device Management</Label>
                <p className="text-sm text-muted-foreground">Remember trusted devices</p>
              </div>
              <Switch
                id="deviceTrust"
                checked={securitySettings.deviceTrust}
                onCheckedChange={(checked) => setSecuritySettings({...securitySettings, deviceTrust: checked})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                <Select value={securitySettings.sessionTimeout} onValueChange={(value) => setSecuritySettings({...securitySettings, sessionTimeout: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                <Select value={securitySettings.passwordExpiry} onValueChange={(value) => setSecuritySettings({...securitySettings, passwordExpiry: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSecurityDialog(false)}>Cancel</Button>
            <Button onClick={handleSecuritySave}>Save Settings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Help & Support Dialog */}
      <Dialog open={helpDialog} onOpenChange={setHelpDialog}>
        <DialogContent className="max-w-2xl bg-background">
          <DialogHeader>
            <DialogTitle>Help & Support</DialogTitle>
            <DialogDescription>
              Get assistance and access helpful resources.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Documentation
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User Guide & Tutorials</li>
                  <li>• NIST CSF 2.0 Framework</li>
                  <li>• Compliance Resources</li>
                  <li>• Security Best Practices</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: support@company.com</p>
                  <p>Phone: +1 (555) 123-HELP</p>
                  <p>Hours: Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">System Information</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Version</p>
                  <p className="font-medium">v2.1.0</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Updated</p>
                  <p className="font-medium">Dec 15, 2024</p>
                </div>
                <div>
                  <p className="text-muted-foreground">License</p>
                  <p className="font-medium">Enterprise</p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setHelpDialog(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={logoutDialog} onOpenChange={setLogoutDialog}>
        <AlertDialogContent className="bg-background border-border">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out? Any unsaved changes will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Log Out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};