import AcoustoHolographyImage from "../../public/images/projects/acoustoholography.png";
import HolotomographyImage from "../../public/images/projects/holotomography.png";
import DAPImage from "../../public/images/projects/dap.png";
import MicroRobotImage from "../../public/images/projects/microrobot.png";
import DroneImage from "../../public/images/projects/drone.png";

export type ProjectDataType = {
    image: string;
    minilogo: string;
    projectTitle: string;
    projectCategory: string;
    text: string;
    photos: string[];
};

export const ProjectData: ProjectDataType[] = [
    {
        image: HolotomographyImage,
        minilogo: "./assets/images/minilogo-microscopy.png",
        projectTitle: "Holotomographic microscope",
        projectCategory: "Bioimaging",
        text: "Within this project, we have developed a 3D-capable holotomographic microscope that can take detailed 3D images of sperm cells in real-time. This data was then used to create a dataset of paired images of phase-contrast, holotomographic and, fluorescent sperm images. I was responsible for using this dataset to train a model that can estimate the 3D morphological features and DNA fragmentation index using only the phase-contrast modality of the sperm cell. This product enabled, for the first time, the clinician to measure the DNA fragmentation index of individual sperm cells in real-time and use the selected sperm cells for IVF therapy.",
        photos: [
            "./images/projects/dap.png",
            "./images/projects/drone.png",
            "./images/projects/glove.png",
            "./images/projects/microrobot.png",
        ],
    },
    {
        image: AcoustoHolographyImage,
        minilogo: "./assets/images/minilogo-robotics.png",
        projectTitle: "Acousto Holographic Imaging",
        projectCategory: "Bioimaging",
        text: "Within this project we created a novel acousto-holographic imaging system for measuring stiffness profiles of live cells using a contact free method. We sent acoustic signal unto an elastic live cell and measured the deflections on its membrane in response using holographic imaging. The force-deflection graph allowed us to map the Young's modulus at each point on its surface. This allowed us to create a very detailed map of the stiffness distribution over the cell membrane.",
        photos: [
            "./images/projects/dap.png",
            "./images/projects/drone.png",
            "./images/projects/glove.png",
            "./images/projects/microrobot.png",
        ],
    },
    {
        image: MicroRobotImage,
        minilogo: "./assets/images/minilogo-robotics.png",
        projectTitle: "Microrobotic Control",
        projectCategory: "Robotics",
        text: "Within this project, I developed a visual feedback control module for a microrobotic system that can operate under a flowing liquid environment. The environment was developed to mimic the blood flow. I developed a motion control algorithm that can withstand high rate laminar flows up to 4.5 mL/min",
        photos: [
            "./images/projects/dap.png",
            "./images/projects/drone.png",
            "./images/projects/glove.png",
            "./images/projects/microrobot.png",
        ],
    },
    {
        image: DAPImage,
        minilogo: "./assets/images/minilogo-webdevelopment.png",
        projectTitle: "Action recognition for social robotics",
        projectCategory: "Machine Learning",
        text: "This project was my M.Sc. thesis. I developed an action recognition module for a social robotic assistant using an RGB-D camera for daily observation of elderly people to understand and anticipate their daily routine and detect when something unusual happens (e.g. the person falls, forgets to take her medicine, or goes into a depressive state). This was part of a larger effort to develop a comprehensive social robotics assistant within the Bogazici University, Istanbul.",
        photos: [
            "./images/projects/dap.png",
            "./images/projects/drone.png",
            "./images/projects/glove.png",
            "./images/projects/microrobot.png",
        ],
    },
    {
        image: DroneImage,
        minilogo: "./assets/images/minilogo-webdevelopment.png",
        projectTitle: "Drone for firefighting missions",
        projectCategory: "Robotics",
        text: "This was a project I did for the final year of my BSc. I developed a quadrotor drone that could be deployed to a  scene of a fire and provide a real-time analysis of the it to firefighters.",
        photos: [
            "./images/projects/dap.png",
            "./images/projects/drone.png",
            "./images/projects/glove.png",
            "./images/projects/microrobot.png",
        ],
    }
];
