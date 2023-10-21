import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-norte',
  templateUrl: './norte.component.html',
  styleUrls: ['./norte.component.css']
})
export class NorteComponent {
  audioUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    // Ruta relativa al archivo de audio en la carpeta assets
    const audioPath = 'assets/audio/regionnorte.mp3';

    // Crea una URL segura para el archivo de audio
    this.audioUrl = this.sanitizer.bypassSecurityTrustResourceUrl(audioPath);
  }
}
