import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'job-portal';
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle("Job Portal");
  }


  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  isOnline = navigator.onLine;

  @HostListener('window:online')
  onOnline() {
    this.isOnline = true;
  }

  @HostListener('window:offline')
  onOffline() {
    this.isOnline = false;
  }

  openNetworkSettings() {
    const ua = navigator.userAgent || navigator.vendor;

    // On Android, attempt to redirect to settings via intent
    if (/android/i.test(ua)) {
      window.location.href = 'intent:#Intent;action=android.settings.WIFI_SETTINGS;end';
    }
    // On iOS, suggest opening settings
    else if (/iPad|iPhone|iPod/.test(ua)) {
      alert('Please open Settings > Wi-Fi to check your connection.');
    }
    // On desktop or unknown platform
    else {
      alert('Please check your network settings manually.');
    }
  }
}
