import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  standalone: false,
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.css'
})
export class ProjectsHomeComponent {

  showmenupage() {
    const hideIds = ['navhome1', 'navhome2', 'navhome3', 'navhome4', 'navhome5'];
    const showIds = ['navpages1', 'navpages2', 'navpages3', 'navpages4', 'navpages5'];
  
    hideIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  
    showIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'inline-block';
    });
  }
  
    projects = [
      {
        title: 'projects.fullstack',
        description: 'projects.fullstackdesc',
        image: '/assets/images/projects/ls.png',
        github: 'https://github.com/borsosbalazselek',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: 'https://livesenorita.com' // ← új mező
      },
      {
        title: 'projects.nml',
        description: 'projects.nmldesc',
        image: '/assets/images/projects/NML.jpg',
        github: 'https://github.com/borsosbalazselek',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },
      {
        title: 'projects.mud',
        description: 'projects.mudtext',
        image: '/assets/images/projects/mud.jpg',
        github: 'https://github.com/borsosbalazselek',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },
      {
        title: 'projects.pynq',
        description: 'projects.pynqtext',
        image: '/assets/images/projects/pynq.png',
        github: 'https://github.com/borsosbalazselek',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },      {
        title: 'projects.humrob',
        description: 'projects.humrobtext',
        image: '/assets/images/projects/robo.jpg',
        github: 'https://github.com/borsosbalazselek',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },
      {
        title: 'projects.fpga',
        description: 'projects.fpgatext',
        image: '/assets/images/projects/nexys.png',
        github: 'https://github.com/borsosbalazselek',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },
            {
        title: 'projects.simoreg',
        description: 'projects.simoregDesc',
        image: '/assets/images/projects/simoreg.jpg',
        github: '',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },
            {
        title: 'projects.autocar',
        description: 'projects.autocarDesc',
        image: '/assets/images/projects/autocar.jpg',
        github: '',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      },
            {
        title: 'projects.elektrash',
        description: 'projects.elektrashDesc',
        image: '/assets/images/projects/elektrash.jpg',
        github: '',
        video: 'https://youtu.be/KVxXr_iE0hE',
        link: ''
      }
    ];
  }
  