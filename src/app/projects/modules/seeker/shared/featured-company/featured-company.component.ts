import { Component } from '@angular/core';
import { MaterialModule } from '../../../../shared/material.module';

@Component({
  selector: 'app-featured-company',
  imports: [MaterialModule],
  templateUrl: './featured-company.component.html',
  styleUrl: './featured-company.component.scss'
})
export class FeaturedCompanyComponent {

  featuredCompanyData = [
    {
      companyLogo: 'assets/company_logo/cpmpany_logo1.png',
      companyName: 'Tech Company',
      loaction: 'Gurgaon, India',
      employee: '100 Employee',
      jobOpeningCount: '22'
    },
    {
      companyLogo: 'assets/company_logo/cpmpany_logo2.png',
      companyName: 'Company Name',
      loaction: 'Banglore, India',
      employee: '50 Employee',
      jobOpeningCount: '15'
    },
    {
      companyLogo: 'assets/company_logo/cpmpany_logo1.png',
      companyName: 'Tech Company',
      loaction: 'Gurgaon, India',
      employee: '100 Employee',
      jobOpeningCount: '22'
    },
    {
      companyLogo: 'assets/company_logo/cpmpany_logo2.png',
      companyName: 'Company Name',
      loaction: 'Banglore, India',
      employee: '50 Employee',
      jobOpeningCount: '15'
    },
    {
      companyLogo: 'assets/company_logo/cpmpany_logo1.png',
      companyName: 'Tech Company',
      loaction: 'Gurgaon, India',
      employee: '100 Employee',
      jobOpeningCount: '22'
    },
  ];
}
