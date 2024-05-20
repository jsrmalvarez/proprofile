import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:3000/projects';

  public constructor() { }

  private data = {
    "projects": [
        {
            "id": 0,
            "title": "Control System for Office Domotics",
            "photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "company": "ERNI Schweiz AG",
            "summary": "Implementation of a Customizable and Scalable Automation Control System for Office Domotics",
            "detail": "The project aims to transform existing manually controlled office domotics into an advanced system capable of remote control and automation. By integrating control hardware featuring networking capabilities and a touchscreen interface, the project enhances operational efficiency and convenience. This system is designed to be scalable, allowing for the addition of more ZigBee actuators to accommodate varying needs. It also excels in data acquisition, capable of collecting information from sensors and streaming real-time data for advanced processing. A key highlight of this upgrade is the development of a modern and innovative user interface (UI). This UI cleverly blends reusable components with custom elements tailored to specific locations, ensuring a user-friendly experience that enhances interaction with the office environment.",
            "tasks": [
                "Design system architecture: Plan a scalable system architecture to ensure performance, reliability, and seamless integration capabilities.",
                "Select hardware: Evaluate and select compatible hardware components to meet system requirements, focusing on performance and scalability.",
                "Integrate hardware components: Integrate hardware smoothly to ensure interoperability and performance, optimizing the system's hardware setup.",
                "Train office staff: Conduct extensive training sessions for office staff, equipping them with the necessary knowledge and skills to efficiently operate the new system, fostering an environment of technological proficiency and confidence.",
                "Gather requirements: Collaborate closely with stakeholders to meticulously identify and articulate the technical and operational requirements, ensuring all functional and non-functional needs are captured for comprehensive project scoping.",
                "Implement UI: Design an intuitive and visually appealing user interface, enhancing user-system interaction and operational efficiency.",
                "Develop control software: Utilize advanced programming to create responsive and efficient control software for system hardware.",
                "Conduct system testing: Perform thorough testing to validate system functionality, performance, and reliability, ensuring quality standards.",
                "Create documentation: Produce concise documentation detailing system architecture, integration, and user guidelines for smooth deployment and use.",
                "Deploy system: Manage system deployment carefully, ensuring a smooth transition to operational status while following industry best practices.",
                "Gather user feedback: Collect feedback from users to inform ongoing improvements, ensuring the system meets user needs and expectations."
            ],
            "tools": [
                "CI/CD",
                "UI/UX Design",
                "Prototyping",
                "Azure DevOps",
                "Raspberry Pi",
                "ZigBee",
                "Qt",
                "Qt QML",
                "C++",
                "Jira",
                "Confluence"
            ]
        },
        {
            "id": 1,
            "title": "CherishedLoveLocks",
            "photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "company": "CherishedLoveLocks",
            "summary": "Innovative Web3 dApp for Metaverse-Integrated NFTs",
            "detail": "The aim of this project is to develop a Web3 decentralized application (dApp) that introduces a new generation of NFTs (Non-Fungible Tokens) designed specifically for the metaverse. These NFT goods will transcend traditional collectibles by offering interactive, immersive, and utility-driven experiences in virtual environments. The project is focused on creating NFTs that can be used in various metaverse platforms, enhancing user engagement through unique digital assets that offer more than aesthetic value. The project will explore innovative ways to integrate these NFTs into the metaverse, ensuring they are versatile, interactive, and provide real-world utility, thereby setting a new standard for digital ownership.",
            "tasks": [
                "In charge of the software development: Oversee the software development process, coordinating the planning, execution, and delivery of software solutions, ensuring they meet project requirements and quality standards.",
                "Leading the business plan design: Direct the creation of the business plan, guiding the strategic vision, market analysis, and financial forecasting to ensure a comprehensive roadmap for project success.",
                "In charge of the DevOps of the project: Manage the DevOps strategy, optimizing development and operational processes for efficiency, reliability, and faster delivery through automation and continuous integration.",
                "Acting as a community manager: Serve as the community manager, engaging with and growing the project's online community through strategic communication, content creation, and feedback collection to foster a positive and supportive environment."
            ],
            "tools": [
                "Mocha-Chai",
                "Semantic UI",
                "Solidity",
                "web3",
                "React",
                "Rust",
                "WebAssembly",
                "Smart contracts",
                "etherjs",
                "web3js",
                "Hardhat",
                "Truffle"
            ]
        }
    ]
};


  public async getAllProjects(): Promise<Project[]> {
    return Promise.resolve(this.data.projects);
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    const project = this.data.projects.find(p => p.id === id);
    return Promise.resolve(project);
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`New project application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
