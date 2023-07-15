import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-de-codigo',
  templateUrl: './area-de-codigo.component.html',
  styleUrls: ['./area-de-codigo.component.css']
})
export class AreaDeCodigoComponent implements OnInit {
  ngOnInit() {
    const textAreas = document.getElementsByClassName('text-area');
    const textAreasArray = Array.from(textAreas) as HTMLTextAreaElement[];

    textAreasArray.forEach((textArea: HTMLTextAreaElement) => {
      textArea.addEventListener('input', () => {
        const highlightedText = this.highlightText(textArea.value, textArea.selectionStart);
        textArea.innerHTML = highlightedText;
      });
    });
  }

  highlightText(text: string, cursorPosition: number): string {
    const words = text.split(' ');
    const highlightedWords = words.map(word => {
      if (word.startsWith(text.slice(0, cursorPosition))) {
        return `<span class="highlight">${word}</span>`;
      } else {
        return word;
      }
    });
    return highlightedWords.join(' ');
  }
}
