
import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, User, Bell, Shield, Palette } from "lucide-react";

const Settings = () => {
  return (
    <Provider store={store}>
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <SettingsIcon className="h-8 w-8" />
            <span>Settings</span>
          </h1>
          
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="appearance">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="appearance" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span>Appearance</span>
                  </TabsTrigger>
                  <TabsTrigger value="account" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Privacy</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="appearance" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Theme Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="dark-mode">Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable dark mode for the application
                          </p>
                        </div>
                        <Switch id="dark-mode" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="animations">UI Animations</Label>
                          <p className="text-sm text-muted-foreground">
                            Enable animations throughout the interface
                          </p>
                        </div>
                        <Switch id="animations" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="compact-view">Compact View</Label>
                          <p className="text-sm text-muted-foreground">
                            Reduce spacing between elements
                          </p>
                        </div>
                        <Switch id="compact-view" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="account">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium mb-4">Account Settings</h3>
                    <p className="text-muted-foreground">Manage your account preferences and personal information.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                    <p className="text-muted-foreground">Control how and when you receive notifications.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="privacy">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium mb-4">Privacy & Security</h3>
                    <p className="text-muted-foreground">Manage your privacy settings and security options.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    </Provider>
  );
};

export default Settings;
