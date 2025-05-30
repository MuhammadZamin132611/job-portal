import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-recuriter-requirement-main',
  imports: [CommonModule, MaterialModule],
  templateUrl: './recuriter-requirement-main.component.html',
  styleUrl: './recuriter-requirement-main.component.scss',
})
export class RecuriterRequirementMainComponent {
  selectedPeriod = 'All';

  selectPeriod(period: string) {
    this.selectedPeriod = period;
  }

  get filteredRequirements() {
    if (this.selectedPeriod === 'All') {
      return this.requirementData;
    }
    if (this.selectedPeriod === 'Bookmarked') {
      return this.requirementData.filter(item => item.bookmarked === true);
    }

    return this.requirementData.filter(item => item.status === this.selectedPeriod);
  }


  data = [
    { icon: "work_outline", name: 'All', count: '235', iconColor: 'text-[#0175A2]', },
    { icon: "flash_on_outline", name: 'Active', count: '65', iconColor: 'text-[#21A14B]', },
    { icon: "work_outline", name: 'InActive', count: '25', iconColor: 'text-[#F79009]' },
    { icon: "thumb_up_outline", name: 'Closed', count: '125', iconColor: 'text-[#4E5BA6]', },
    { icon: "star_outline", name: 'Bookmarked', count: '15', iconColor: 'text-[#9E77ED]', },
  ];

  jobCondition: string | null = null;
  condition(jobId: string) {
    this.jobCondition = this.jobCondition === jobId ? null : jobId;
  }


  requirementData = [
    {
      logo: 'assets/profile/profile_image.png',
      title: 'Web Designer',
      jobId: '239143',
      status: 'InActive',
      bookmarked: true,
      lastModified: '6 Mar 2022',
      avatars: [
        { label: '01', bg: 'bg-pink-300' },
        { label: '02', bg: 'bg-yellow-300' },
        { label: '03', bg: 'bg-blue-300' },
        { label: '04', bg: 'bg-red-300' },
        { label: '+5', bg: 'bg-gray-300' }
      ],
      metrics: [
        { label: 'Total Position', value: 170, color: 'text-[#344054]' },
        { label: 'Sourced', value: 180, color: 'text-[#0175A2]' },
        { label: 'Shortlisted', value: 120, color: 'text-[#5D6B98]' },
        { label: 'Offered', value: 80, color: 'text-[#21A14B]' }
      ],
      details: [
        { title: 'Modified on', icon: 'arrow_downward', values: ['3 Mar 2022', '3 Mar 2022'] },
        { title: 'Status', values: ['InActive', 'Active'] },
        { title: 'Changed By', values: ['Candice Wu', 'John Vince'] },
        { title: 'Reason', values: ['Due to high number of applications recevied', 'Opened requirement'] },
        { title: 'Comments', values: ['Got Approval from the Client', 'Not mentioned'] }
      ]
    },
    {
      title: 'Backend Developer',
      jobId: '893421',
      status: 'Active',
      bookmarked: false,
      lastModified: '12 Jan 2023',
      logo: '',
      avatars: [
        { label: 'A', bg: 'bg-purple-300' },
        { label: 'B', bg: 'bg-green-300' },
        { label: 'C', bg: 'bg-orange-300' },
        { label: 'D', bg: 'bg-cyan-300' },
        { label: '+2', bg: 'bg-gray-300' }
      ],
      metrics: [
        { label: 'Total Position', value: 100, color: 'text-[#344054]' },
        { label: 'Sourced', value: 150, color: 'text-[#0175A2]' },
        { label: 'Shortlisted', value: 90, color: 'text-[#5D6B98]' },
        { label: 'Offered', value: 45, color: 'text-[#21A14B]' }
      ],
      details: [
        { title: 'Modified on', icon: 'arrow_downward', values: ['10 Jan 2023', '11 Jan 2023'] },
        { title: 'Status', values: ['InActive', 'Active'] },
        { title: 'Changed By', values: ['Alice Ray', 'Mark Green'] },
        { title: 'Reason', values: ['Role refinement', 'Client request'] },
        { title: 'Comments', values: ['Initial round done', 'Pending approval'] }
      ]
    },
    {
      title: 'UI/UX Engineer',
      jobId: '672198',
      status: 'Closed',
      bookmarked: false,
      lastModified: '9 Sep 2023',
      logo: '',
      avatars: [
        { label: 'UX', bg: 'bg-indigo-300' },
        { label: 'UI', bg: 'bg-lime-300' },
        { label: '03', bg: 'bg-pink-300' },
        { label: '04', bg: 'bg-teal-300' },
        { label: '+3', bg: 'bg-gray-300' }
      ],
      metrics: [
        { label: 'Total Position', value: 75, color: 'text-[#344054]' },
        { label: 'Sourced', value: 60, color: 'text-[#0175A2]' },
        { label: 'Shortlisted', value: 40, color: 'text-[#5D6B98]' },
        { label: 'Offered', value: 20, color: 'text-[#21A14B]' }
      ],
      details: [
        { title: 'Modified on', icon: 'arrow_downward', values: ['8 Sep 2023', '9 Sep 2023'] },
        { title: 'Status', values: ['Active', 'InActive'] },
        { title: 'Changed By', values: ['Sara Khan', 'Luke Adams'] },
        { title: 'Reason', values: ['UI alignment issues fixed', 'Update in client specs'] },
        { title: 'Comments', values: ['UI prototype sent', 'Awaiting feedback'] }
      ]
    },
    {
      title: 'DevOps Engineer',
      jobId: '427891',
      status: 'InActive',
      bookmarked: false,
      lastModified: '21 Apr 2023',
      logo: '',
      avatars: [
        { label: 'D1', bg: 'bg-gray-300' },
        { label: 'D2', bg: 'bg-blue-300' },
        { label: 'D3', bg: 'bg-yellow-300' },
        { label: 'D4', bg: 'bg-red-300' },
        { label: '+1', bg: 'bg-purple-300' }
      ],
      metrics: [
        { label: 'Total Position', value: 50, color: 'text-[#344054]' },
        { label: 'Sourced', value: 45, color: 'text-[#0175A2]' },
        { label: 'Shortlisted', value: 25, color: 'text-[#5D6B98]' },
        { label: 'Offered', value: 15, color: 'text-[#21A14B]' }
      ],
      details: [
        { title: 'Modified on', icon: 'arrow_downward', values: ['19 Apr 2023', '20 Apr 2023'] },
        { title: 'Status', values: ['InActive'] },
        { title: 'Changed By', values: ['Chris Paul', 'Jane Doe'] },
        { title: 'Reason', values: ['Tooling migration', 'Pipeline update'] },
        { title: 'Comments', values: ['Client postponed requirement', 'Not mentioned'] }
      ]
    },
    {
      title: 'Mobile App Developer',
      jobId: '902143',
      status: 'Active',
      bookmarked: true,
      lastModified: '28 Feb 2024',
      logo: '',
      avatars: [
        { label: 'M1', bg: 'bg-amber-300' },
        { label: 'M2', bg: 'bg-rose-300' },
        { label: 'M3', bg: 'bg-cyan-300' },
        { label: 'M4', bg: 'bg-orange-300' },
        { label: '+4', bg: 'bg-gray-300' }
      ],
      metrics: [
        { label: 'Total Position', value: 90, color: 'text-[#344054]' },
        { label: 'Sourced', value: 80, color: 'text-[#0175A2]' },
        { label: 'Shortlisted', value: 70, color: 'text-[#5D6B98]' },
        { label: 'Offered', value: 35, color: 'text-[#21A14B]' }
      ],
      details: [
        { title: 'Modified on', icon: 'arrow_downward', values: ['27 Feb 2024', '28 Feb 2024'] },
        { title: 'Status', values: ['Active'] },
        { title: 'Changed By', values: ['Natalie Young', 'Henry Cox'] },
        { title: 'Reason', values: ['Urgent client delivery', 'Sprint initiated'] },
        { title: 'Comments', values: ['All tasks defined', 'Waiting for QA'] }
      ]
    },
    {
      title: 'Full Stack Developer',
      jobId: '519384',
      status: 'InActive',
      bookmarked: false,
      lastModified: '15 May 2024',
      logo: '',
      avatars: [
        { label: 'F1', bg: 'bg-red-300' },
        { label: 'F2', bg: 'bg-lime-300' },
        { label: 'F3', bg: 'bg-cyan-300' },
        { label: 'F4', bg: 'bg-yellow-300' },
        { label: '+6', bg: 'bg-gray-300' }
      ],
      metrics: [
        { label: 'Total Position', value: 110, color: 'text-[#344054]' },
        { label: 'Sourced', value: 90, color: 'text-[#0175A2]' },
        { label: 'Shortlisted', value: 60, color: 'text-[#5D6B98]' },
        { label: 'Offered', value: 40, color: 'text-[#21A14B]' }
      ],
      details: [
        { title: 'Modified on', icon: 'arrow_downward', values: ['13 May 2024', '14 May 2024'] },
        { title: 'Status', values: ['InActive', 'Active'] },
        { title: 'Changed By', values: ['Paul Lane', 'Anita Roy'] },
        { title: 'Reason', values: ['Redefining role', 'Hiring pause'] },
        { title: 'Comments', values: ['Manager review pending', 'Update awaited'] }
      ]
    }
  ];


}
