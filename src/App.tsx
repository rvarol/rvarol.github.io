import "./App.scss";
import Sidebar from "./components/Sidebar";
import {
    AboutPage,
    ContactPage,
    ProjectsPage,
    PublicationsPage,
    ResumePage,
} from "./pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
    return (
        <>
            <main>
                <Sidebar />

                <div className="main-content">
                    <Tabs className="relative" defaultValue="about">
                        <div className="navbar">
                            <TabsList>
                                <TabsTrigger value="about">About</TabsTrigger>
                                <TabsTrigger value="resume">Resume</TabsTrigger>
                                <TabsTrigger value="projects">
                                    Projects
                                </TabsTrigger>
                                <TabsTrigger value="publications">
                                    Publications
                                </TabsTrigger>
                                <TabsTrigger value="contact">
                                    Contact
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="float-left w-[100%]">
                            <TabsContent value="about">
                                <AboutPage />
                            </TabsContent>
                            <TabsContent value="resume">
                                <ResumePage />
                            </TabsContent>
                            <TabsContent value="projects">
                                <ProjectsPage />
                            </TabsContent>
                            <TabsContent value="publications">
                                <PublicationsPage />
                            </TabsContent>
                            <TabsContent value="contact">
                                <ContactPage />
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </main>
        </>
    );
}

export default App;
