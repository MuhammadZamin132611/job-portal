import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recuriter-dashboard-subscription-plan',
  imports: [MaterialModule, CommonModule],
  templateUrl: './recuriter-dashboard-subscription-plan.component.html',
  styleUrl: './recuriter-dashboard-subscription-plan.component.scss'
})
export class RecuriterDashboardSubscriptionPlanComponent {

  creditInfo = [
    {
      limit: '30/50',
      name: 'Job Post',
      image: 'assets/recuriter/dashboard/job_post.png'
    },
    {
      limit: '50/100',
      name: 'Cv Download',
      image: 'assets/recuriter/dashboard/cv_download.png'
    },
    {
      limit: '15/15',
      name: 'Team Members',
      image: 'assets/recuriter/dashboard/team_member.png'
    },
    {
      limit: '1000/1500',
      name: 'Emails',
      image: 'assets/recuriter/dashboard/subscription_email.png'
    },
    {
      limit: '500/1000',
      name: 'Messages',
      image: 'assets/recuriter/dashboard/subscription_message.png'
    },
  ]
}
