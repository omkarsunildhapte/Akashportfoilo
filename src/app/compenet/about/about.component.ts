import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fillWidth', [
      state('empty', style({ width: '0%' })),
      transition('empty => *', animate('1s ease-in')),
    ]),
  ],
})
export class AboutComponent {
  @ViewChild('clientsCount', { static: false }) clientsCountElement!: ElementRef;
  @ViewChild('projectsCount', { static: false }) projectsCountElement!: ElementRef;
  @ViewChild('experienceCount', { static: false }) experienceCountElement!: ElementRef;
  currentClientsCount: number = 0;
  currentProjectsCount: number = 0;
  currentExperience: number = 0;
  targetClientsCount: number = 50; // Set your target clients count
  targetProjectsCount: number = 40; // Set your target projects count
  targetExperience: number = 4; // Set your target experience count
  animationSpeed: number = 2000; // Animation duration in milliseconds

  progressItems = [
    { title: 'web design', percent: 90, animationState: 'empty' },
    { title: 'web developer', percent: 40, animationState: 'empty' },
    { title: 'graphic design', percent: 65, animationState: 'empty' },
    { title: 'digital marketing', percent: 80, animationState: 'empty' },
    { title: 'javascript', percent: 20, animationState: 'empty' },
  ];
  experience: any = [
    {
      postion: "Technical Lead", companyName: "Quintus Tech Pvt. Ltd.", stating: "Aug, 2022", ending: "Present", location: "Indore, Madhya Pradesh, India", describe: "As a team leader of 40 members, I oversaw the development of a one-stop product for web and Android platforms with graphic designers.My responsibilities included conducting technical interviews, driving initiatives to develop a strong tech culture, providing support to clients and team members, reviewing code, establishing project requirements, and delegating tasks.I also designed and implemented an API for a fin- tech client and maintained BPMN workflows for their EKYC services.I kept up - to - date with industry trends, motivated staff, and communicated transparently with the team about progress, challenges, and successes."
    },
    {
      postion: "Technical Lead", companyName: "Quintus Tech Pvt. Ltd.", stating: "Aug, 2022", ending: "Present", location: "Indore, Madhya Pradesh, India", describe: "As a team leader of 40 members, I oversaw the development of a one-stop product for web and Android platforms with graphic designers.My responsibilities included conducting technical interviews, driving initiatives to develop a strong tech culture, providing support to clients and team members, reviewing code, establishing project requirements, and delegating tasks.I also designed and implemented an API for a fin- tech client and maintained BPMN workflows for their EKYC services.I kept up - to - date with industry trends, motivated staff, and communicated transparently with the team about progress, challenges, and successes."
    },
    {
      postion: "Technical Lead", companyName: "Quintus Tech Pvt. Ltd.", stating: "Aug, 2022", ending: "Present", location: "Indore, Madhya Pradesh, India", describe: "As a team leader of 40 members, I oversaw the development of a one-stop product for web and Android platforms with graphic designers.My responsibilities included conducting technical interviews, driving initiatives to develop a strong tech culture, providing support to clients and team members, reviewing code, establishing project requirements, and delegating tasks.I also designed and implemented an API for a fin- tech client and maintained BPMN workflows for their EKYC services.I kept up - to - date with industry trends, motivated staff, and communicated transparently with the team about progress, challenges, and successes."
    },
  ]
  ngAfterViewInit() {
    // After the view is initialized, you can access the DOM elements
    this.clientsCountElement.nativeElement.style.animationDuration = this.animationSpeed + 'ms';
    this.projectsCountElement.nativeElement.style.animationDuration = this.animationSpeed + 'ms';
    this.experienceCountElement.nativeElement.style.animationDuration = this.animationSpeed + 'ms';
  }

  ngOnInit() {
    this.startCounting();
    this.updateProgress();
  }
  updateProgress() {
    this.progressItems.forEach((item) => {
      setTimeout(() => {
        item.animationState = 'full';
      }, 1000); // Delay the animation by 1000ms (adjust as needed)
    });
  }
  startCounting() {
    const clientsIncrement = Math.ceil(this.targetClientsCount / (this.animationSpeed / 20));
    const projectsIncrement = Math.ceil(this.targetProjectsCount / (this.animationSpeed / 20));
    const experienceIncrement = this.targetExperience / (this.animationSpeed / 20);
    const clientsCountInterval = setInterval(() => {
      this.currentClientsCount += clientsIncrement;
      if (this.currentClientsCount >= this.targetClientsCount) {
        this.currentClientsCount = this.targetClientsCount;
        clearInterval(clientsCountInterval);
      }
    }, 20);

    const projectsCountInterval = setInterval(() => {
      this.currentProjectsCount += projectsIncrement;
      if (this.currentProjectsCount >= this.targetProjectsCount) {
        this.currentProjectsCount = this.targetProjectsCount;
        clearInterval(projectsCountInterval);
      }
    }, 20);

    const experienceCountInterval = setInterval(() => {
      this.currentExperience += experienceIncrement;
      if (this.currentExperience >= this.targetExperience) {
        this.currentExperience = this.targetExperience;
        clearInterval(experienceCountInterval);
      }
    }, 20);
  }
}
