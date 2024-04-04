import { Component } from '@angular/core';
import {CdkAccordion, CdkAccordionItem} from "@angular/cdk/accordion";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CdkAccordionItem,
    MatIcon,
    CdkAccordion
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  items = [
    'Quels sont les conditions d\'admission à made in 243 ?',
    'Quels sont les conditions d\'admission à made in 243 ?',
    'Quels sont les conditions d\'admission à made in 243 ?',
    'Autre ...',
  ];
  expandedIndex = 0;
}
