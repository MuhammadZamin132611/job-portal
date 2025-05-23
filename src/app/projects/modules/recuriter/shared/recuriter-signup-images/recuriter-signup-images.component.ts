import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recuriter-signup-images',
  imports: [NgStyle, NgFor],
  templateUrl: './recuriter-signup-images.component.html',
  styleUrl: './recuriter-signup-images.component.scss'
})
export class RecuriterSignupImagesComponent {
  cards = [
    {
      img: 'assets/recuriter/authentication/signup1.png',
      alt: '1',
      title: 'Analytics and Reports',
      description: 'Recruiter accounts gain access to platform analytics and reports.'
    },
    {
      img: 'assets/recuriter/authentication/signup2.png',
      alt: '2',
      title: 'Administration Account',
      description: 'Administration accounts have the authority to manage user accounts on the job portal.'
    },
    {
      img: 'assets/recuriter/authentication/signup3.png',
      alt: '3',
      title: 'Job Database Access',
      description: 'Recruiters with access to a pool of resumes and job seekers.'
    },
    {
      img: 'assets/recuriter/authentication/signup4.png',
      alt: '4',
      title: 'Candidate Tracking',
      description: 'Track candidate application status and progress easily.'
    },
    {
      img: 'assets/recuriter/authentication/signup5.png',
      alt: '5',
      title: 'Custom Job Posting',
      description: 'Create custom job postings with ease.'
    }
  ];

  currentCardIndex = 0;

  ngOnInit() {
    setTimeout(() => {
      this.showNextCard();
    }, 2000);
  }

  showNextCard() {
    setInterval(() => {
      this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
    }, 1500); // Adjust speed of animation
  }

}
