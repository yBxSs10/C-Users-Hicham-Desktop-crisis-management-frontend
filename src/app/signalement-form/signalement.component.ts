import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-signalement',
  templateUrl: './signalement.component.html',
  styleUrls: ['./signalement.component.scss'],
  imports: [
    MatCard
  ]
})
export class SignalementComponent implements OnInit {
  caseType!: number; // Pour stocker le type de cas
  signalementContent: any; // Pour stocker le contenu correspondant

  // Contenu simulé pour les cas
  casesContent = {
    1: {
      title: 'Cas 1 : Incendie en milieu urbain',
      description:
        'Un incendie s’est déclaré dans un immeuble résidentiel en plein centre-ville.',
      steps: [
        { title: 'Étape 1', details: 'Évacuer les résidents en toute sécurité.' },
        { title: 'Étape 2', details: 'Contacter les pompiers immédiatement.' },
        { title: 'Étape 3', details: 'Mettre en place un périmètre de sécurité.' },
      ],
    },
    2: {
      title: 'Cas 2 : Fuite de produit chimique',
      description:
        'Une fuite de produit chimique dangereux a été détectée dans une usine.',
      steps: [
        { title: 'Étape 1', details: 'Évacuer les employés et les environs.' },
        { title: 'Étape 2', details: 'Identifier la nature du produit chimique.' },
        { title: 'Étape 3', details: 'Informer les autorités compétentes.' },
      ],
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer le paramètre 'case' depuis l'URL
    this.route.queryParams.subscribe((params) => {
      this.caseType = +params['case']; // Convertir en nombre
      // @ts-ignore
      this.signalementContent = this.casesContent[this.caseType];
    });
  }
}
