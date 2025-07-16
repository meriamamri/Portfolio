"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Plus, Edit, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import ProjectForm from './ProjectForm';
import SkillForm from './SkillForm';
import AboutForm from './AboutForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import { projectsData } from '@/Data/projectsData';
import { skillsData } from '@/Data/skillData';
import { aboutData } from '@/Data/aboutData';
import { experiences } from '@/Data/experiences';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');
  const [editingProject, setEditingProject] = useState<any>(null);
  const [editingSkill, setEditingSkill] = useState<any>(null);
  const [editingAbout, setEditingAbout] = useState<any>(null);
  const [editingExperience, setEditingExperience] = useState<any>(null);
  const [editingEducation, setEditingEducation] = useState<any>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [showAboutForm, setShowAboutForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch('/admin/api/logout', { method: 'POST' });
      toast.success('Logged out successfully');
      router.push('/admin/login');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <div className="min-h-screen bg-muted/50">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Projects</h2>
              <Button onClick={() => setShowProjectForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            {showProjectForm && (
              <ProjectForm
                project={editingProject}
                onClose={() => {
                  setShowProjectForm(false);
                  setEditingProject(null);
                }}
                onSave={() => {
                  setShowProjectForm(false);
                  setEditingProject(null);
                  toast.success('Project saved successfully!');
                }}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectsData.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description.substring(0, 100)}...
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingProject(project);
                          setShowProjectForm(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Skills</h2>
              <Button onClick={() => setShowSkillForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </div>

            {showSkillForm && (
              <SkillForm
                skill={editingSkill}
                onClose={() => {
                  setShowSkillForm(false);
                  setEditingSkill(null);
                }}
                onSave={() => {
                  setShowSkillForm(false);
                  setEditingSkill(null);
                  toast.success('Skill saved successfully!');
                }}
              />
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skillsData.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-xs">{skill.name.charAt(0)}</span>
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                    <div className="flex gap-1 mt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingSkill(skill);
                          setShowSkillForm(true);
                        }}
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage About Section</h2>
              <Button onClick={() => setShowAboutForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Paragraph
              </Button>
            </div>

            {showAboutForm && (
              <AboutForm
                aboutItem={editingAbout}
                onClose={() => {
                  setShowAboutForm(false);
                  setEditingAbout(null);
                }}
                onSave={() => {
                  setShowAboutForm(false);
                  setEditingAbout(null);
                  toast.success('About section updated successfully!');
                }}
              />
            )}

            <div className="space-y-4">
              {aboutData.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <p className="text-sm mb-4">{item.description}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingAbout(item);
                          setShowAboutForm(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Work Experience</h2>
              <Button onClick={() => setShowExperienceForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            </div>

            {showExperienceForm && (
              <ExperienceForm
                experience={editingExperience}
                onClose={() => {
                  setShowExperienceForm(false);
                  setEditingExperience(null);
                }}
                onSave={() => {
                  setShowExperienceForm(false);
                  setEditingExperience(null);
                  toast.success('Experience saved successfully!');
                }}
              />
            )}

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{exp.title}</h4>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                        <p className="text-xs text-muted-foreground">{exp.period}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingExperience(exp);
                            setShowExperienceForm(true);
                          }}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Manage Education</h2>
              <Button onClick={() => setShowEducationForm(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </div>

            {showEducationForm && (
              <EducationForm
                education={editingEducation}
                onClose={() => {
                  setShowEducationForm(false);
                  setEditingEducation(null);
                }}
                onSave={() => {
                  setShowEducationForm(false);
                  setEditingEducation(null);
                  toast.success('Education saved successfully!');
                }}
              />
            )}

            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">BSc in Computer Science</h4>
                      <p className="text-sm text-muted-foreground">New York University</p>
                      <p className="text-xs text-muted-foreground">2014 - 2018</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingEducation({
                            degree: 'BSc in Computer Science',
                            institution: 'New York University',
                            period: '2014 - 2018',
                            description: ''
                          });
                          setShowEducationForm(true);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}