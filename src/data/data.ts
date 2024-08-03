import PythonIcon from "../../public/images/skills/python.svg";
import PyTorchIcon from "../../public/images/skills/pytorch.svg";
import ComsolIcon from "../../public/images/skills/comsol.svg";
import DjangoIcon from "../../public/images/skills/django.svg";
import MatlabIcon from "../../public/images/skills/matlab.svg";
import ReactIcon from "../../public/images/skills/react.svg";
import ROSIcon from "../../public/images/skills/ros.svg";
import CPPIcon from "../../public/images/skills/cpp.svg";

import Publication1 from "../../public/images/publications/publication-1.webp";
import Publication2 from "../../public/images/publications/publication-2.webp";
import Publication3 from "../../public/images/publications/publication-3.png";
import Publication4 from "../../public/images/publications/publication-4.jpeg";
import Publication5 from "../../public/images/publications/publication-5.png";
import Publication6 from "../../public/images/publications/publication-6.png";
import Publication7 from "../../public/images/publications/publication-7.webp";
import Publication8 from "../../public/images/publications/publication-8.png";
import Publication9 from "../../public/images/publications/publication-9.png";
import Publication10 from "../../public/images/publications/publication-10.png";
import Publication11 from "../../public/images/publications/publication-11.png";

export const InterestsData = [
    {
        title: "Machine learning",
        description:
            "I have a good experience with the PyTorch framework. I have worked on developing, training and deploying relatively large models for various applications.",
        icon: "ai",
        altText: "design icon",
    },
    {
        title: "Bioimaging",
        description:
            "Previously, I worked with novel imaging techniques for single cell analysis. Particularly, with 3D cellular images.",
        icon: "microscope",
        altText: "design icon",
    },
    {
        title: "Web development",
        description:
            "The most modern and high-quality design made at a professional level.",
        icon: "web",
        altText: "design icon",
    },
    {
        title: "Research",
        description:
            "The most modern and high-quality design made at a professional level.",
        icon: "experiment",
        altText: "design icon",
    },
];

export const EducationData = [
    {
        name: "Ph.D. in Mechatronics Engineering @ Yıldız Technical University, Turkey",
        years: "2020 - current",
        description: [
            "PhD Thesis Title: Holographic Cell Stiffness Mapping Using Acoustic Stimulation",
        ],
    },
    {
        name: "M.Sc. in Computer Engineering @ Boğaziçi University, Turkey",
        years: "2016 - 2019",
        description: ["MSc Thesis Title: Action Recognition in Social Robots"],
    },
    {
        name: "B.Sc. in Mechatronics Engineering @ Yıldız Technical University, Turkey",
        years: "2002 - 2004",
        description: [
            "BSc Final Project: Unmanned Drone For Firefighting Missions",
        ],
    },
];

export const ExperienceData = [
    {
        name: "Research Assistant @ Universität der Bundeswehr München",
        years: "Feb 2021 - present",
        description: [
            "- Development of a holotomographic imaging system for 3D cellular imaging.",
            "- Development of algorithms for classification, feature extraction, and DNA fragmentation prediction using 3D cellular images.",
            "- Awarded 500.000€ funding for the development of the system by <i>Bayerisches Staatsministerium für Wirtschaft, Landesentwicklung und Energie</i>.",
        ],
    },
    {
        name: "Researcher @ Yıldız Technical University (Project No: 116E743)",
        years: "Dec 2017 - Dec 2021",
        description: [
            "- Design and implementation of a phase-stepping Mach-Zehnder interferometer and standing-wave acoustic trapping system.",
            "- Experience in holographic reconstruction, super-resolution algorithms and processing of 3D cellular images.",
            "- Development of an acousto-holographic system for the measurement of whole-cell stiffness maps.",
        ],
    },
    {
        name: "Software Engineer @ Biatech Medical Devices",
        years: "Aug 2015 - Sept 2016",
        description: [
            "- Development of a Programmable Logic Controller (PLC) and user interface for a spinal decompression device. Medical CE, IEC 62304 and ISO 13485 certification.",
        ],
    },
    {
        name: "Internship @ Yıldız Technical University Central Laboratory",
        years: "Summer of 2015",
        description: [
            "- Experience in PCB prototyping, CMOS circuit design, and development of embedded computer vision applications.",
        ],
    },
    {
        name: "Internship @ Tekhnelogos Software",
        years: "Summer of 2014",
        description: [
            "- Development of 3D visualization software using OpenGL for designing and verifying natural gas installations in buildings.",
        ],
    },
    {
        name: "Student Assistant @ Yıldız Technical University Central Laboratory",
        years: "Oct 2012 - Jun 2013",
        description: [
            "- Development of YTU Central Laboratory website and laboratory management software using ASP.NET and MySQL.",
        ],
    },
];

export const SkillsData = [
    {
        title: "Python",
        starCount: 5,
        icon: PythonIcon,
    },
    {
        title: "PyTorch",
        starCount: 5,
        icon: PyTorchIcon,
    },
    {
        title: "Django",
        starCount: 4,
        icon: DjangoIcon,
    },
    {
        title: "React",
        starCount: 4,
        icon: ReactIcon,
    },
    {
        title: "C / C++",
        starCount: 3,
        icon: CPPIcon,
    },
    {
        title: "MATLAB / Simulink",
        starCount: 3,
        icon: MatlabIcon,
    },
    {
        title: "COMSOL Multiphysics",
        starCount: 3,
        icon: ComsolIcon,
    },
    {
        title: "Robot Operating System",
        starCount: 3,
        icon: ROSIcon,
    },
];

export const PublicationData = [
    {
        link: "https://www.nature.com/articles/s41598-023-45150-y",
        image: Publication1,
        journal: "Scientific Reports",
        datetime: "Nov 6, 2023",
        title: "Virtual staining for pixel-wise and quantitative analysis of single cell images",
        description:
            "Accurate, automated virtual staining of unstained sperm images, revolutionizing subcellular analysis and enhancing reliability without traditional staining's biases.",
    },
    {
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0146280622003796",
        image: Publication2,
        journal: "Current Problems in Cardiology",
        datetime: "Feb 1, 2023",
        title: "Machine learning approach on high risk treadmill exercise test to predict obstructive coronary artery disease by using P, QRS, and T waves’ features",
        description:
            "The study developed a machine learning model to improve Treadmill Exercise Test (TET) accuracy by analyzing ECG signals, reducing unnecessary invasive Coronary Angiography (CAG). Using data from 294 patients, five algorithms were trained, with the XGBoost model achieving about 80.92% accuracy. These models surpassed traditional cardiologist evaluations and could enhance non-invasive cardiac diagnostics, minimizing invasive procedures.",
    },
    {
        link: "https://pubs.rsc.org/en/content/articlelanding/2023/lc/d3lc00177f",
        image: Publication3,
        journal: "Lab on a Chip",
        datetime: "Apr 27, 2022",
        title: "On the application of hydrodynamic cavitation on a chip in cellular injury and drug delivery",
        description:
            "This study investigates the use of hydrodynamic cavitation (HC) on a chip to enhance the effectiveness of the anticancer drug Doxorubicin (DOX). By precisely controlling the cavitation process in microfluidic devices, the research demonstrated that HC can improve DOX's anticancer activity, induce various cellular injuries, and potentially increase drug delivery through enhanced cell permeability.",
    },
    {
        link: "https://www.sciencedirect.com/science/article/pii/S0925400522012862",
        image: Publication4,
        journal: "Sensors and Actuators B",
        datetime: "Dec 12, 2022",
        title: "Microfluidic wound scratching platform based on an untethered microrobot with magnetic actuation",
        description:
            "This study introduces a novel method for conducting wound healing assays within a microfluidic system using an untethered magnetic microrobot. This robot, capable of being manipulated in four degrees of freedom, allows for the creation of wounds of uniform size and varying shapes in a closed system without damaging the cells or using chemicals. The findings revealed that wound shape impacts healing rates, with triangle-shaped wounds healing the slowest and plus-shaped wounds the fastest. This advancement highlights the potential for microrobots in enhancing lab-on-a-chip applications and could extend to 3D cell cultures.",
    },
    {
        link: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/myc.13498",
        image: Publication5,
        journal: "Mycoses",
        datetime: "Jul 16, 2022",
        title: "Deep convolutional neural networks for onychomycosis detection using microscopic images with KOH examination",
        description:
            "This study developed deep neural networks, VGG16 and InceptionV3, to automate fungi detection in microscopic images, demonstrating higher accuracy and specificity than traditional methods used by dermatologists. The models, tested against 16 dermatologists using images from patients with onychomycosis and normal nails, significantly outperformed human experts, highlighting the potential of AI in improving fungal infection diagnostics.",
    },
    {
        link: "https://www.nature.com/articles/s41467-022-35075-x",
        image: Publication6,
        journal: "Nature Communications",
        datetime: "Nov 29, 2022",
        title: "Acousto-holographic reconstruction of whole-cell stiffness maps",
        description:
            "This study introduces a novel method for conducting wound healing assays within a microfluidic system using an untethered magnetic microrobot. This robot, capable of being manipulated in four degrees of freedom, allows for the creation of wounds of uniform size and varying shapes in a closed system without damaging the cells or using chemicals. The findings revealed that wound shape impacts healing rates, with triangle-shaped wounds healing the slowest and plus-shaped wounds the fastest. This advancement highlights the potential for microrobots in enhancing lab-on-a-chip applications and could extend to 3D cell cultures.",
    },
    {
        link: "https://www.mdpi.com/2077-0383/11/17/5102",
        image: Publication7,
        journal: "Journal of Clinical Medicine",
        datetime: "Aug 17, 2022",
        title: "MobileSkin: Classification Of Skin Lesion Images Acquired Using Mobile Phone-Attached Hand-Held Dermoscopes",
        description:
            "This study presents a dataset of dermoscopic images captured with a mobile phone-attached hand-held dermoscope and details the development of four deep learning models, with the MobileNetV2 and Xception models achieving the highest accuracy in classifying eight types of skin lesions.",
    },
    {
        link: "https://asmedigitalcollection.asme.org/mechanismsrobotics/article-abstract/13/6/061005/1103439/Untethered-Microrobot-Motion-Mechanism-With",
        image: Publication8,
        journal: "J. Mechanisms & Robotics",
        datetime: "May 31, 2021",
        title: "Untethered Microrobot Motion Mechanism With Increased Longitudinal Force",
        description:
            "This article introduces the 'KERKAN configuration' a novel method for enhancing microrobot manipulation in high-flowrate microfluidic channels using a permanent magnet-based diamagnetic levitation system. By employing a strategic arrangement of ferromagnetic magnets and pyrolytic graphite, this setup significantly improves stability and force handling, demonstrating superior performance in both experimental and simulation studies.",
    },
    {
        link: "https://ieeexplore.ieee.org/abstract/document/9314083",
        image: Publication9,
        journal: "Transactions on Mechatronics",
        datetime: "Jan 5, 2021",
        title: "Longitudinal Motion Modeling and Experimental Verification of a Microrobot Subject to Liquid Laminar Flow",
        description:
            "This article presents a novel magnetic manipulation technique that improves the positioning accuracy of a microrobot in microfluidic channels under high laminar flows up to 4.5 mL/min. Using a configuration with two ring-shaped magnets, the setup significantly enhances magnetic trapping forces, enabling the microrobot to maintain stable linear trajectories despite varying flow rates and robot speeds.",
    },
    {
        link: "https://www.mdpi.com/2076-3417/10/24/9107",
        image: Publication10,
        journal: "Applied Sciences",
        datetime: "Dec 20, 2020",
        title: "Interferometric Measurement of TGF-β Induced Epithelial-Mesenchymal Transition of Tumor Cells",
        description:
            "This paper presents a holographic imaging technique for 3D reconstruction of live cells during the epithelial-mesenchymal transition (EMT) in dynamic cell cultures, overcoming challenges posed by high-scattering mediums with a noise-reducing, high-speed algorithm. The technique demonstrated significant advantages in imaging quality and simplicity over traditional methods, providing insights into morphological changes during EMT and potential future applications in modeling cellular interactions.",
    },
    {
        link: "https://www.mdpi.com/2072-666X/9/3/126",
        image: Publication11,
        journal: "Micromachines",
        datetime: "Mar 14, 2018",
        title: "Micro-UFO (Untethered Floating Object): A Highly Accurate Microrobot Manipulation Technique",
        description:
            "This article introduces a new microrobot manipulation technique using diamagnetic levitation to achieve nano-level positional accuracy within a liquid environment, eliminating friction between the microrobot and substrate surfaces. Through finite element method (FEM) simulations and experimental validation, the technique demonstrates high precision in controlling the microrobot's movement across specified trajectories with less than 1 µm error, functioning effectively at various speeds and levitation heights without the need for strong electromagnets or bulky permanent magnets.",
    },
];
