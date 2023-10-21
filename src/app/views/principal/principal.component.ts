import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  lugar= {
    titles: '',
    province: '',
    coordinates: '',
    poster: '',
    región: ''
    
  }


  lugares = [
     {
    titles:'Salinas Grandes',
    province: 'Jujuy',
    coordinates:'23°45′00″S 65°25′00″O',
    poster: 'assets/Salinas Grandes.jpg',
    región: 'norte'
    
     },
  {

    titles:'Abra del Acay',
    province: 'Salta',
    coordinates:'24°26′12″S 66°14′20″O',
    poster: 'assets/Abra del Acay.jpg',
    región: 'norte'
    
  },
  {

    titles:'Cuesta del Obispo',
    province: 'Salta',
    coordinates:'25°10′00″S 66°12′00″O',
    poster: 'assets/Cuesta del Obispo.jpg',
    región: 'norte'
    
  },
  {

    titles:'Quebrada de las Flechas',
    province: 'Salta',
    coordinates:'27°15′12″S 66°45′18″O',
    poster: 'assets/Quebrada de las Flechas.jpg',
    región: 'norte'
    
  },
  {

    titles:'Ciudad Sagrada de Quilmes',
    province: 'Tucumán',
    coordinates:'26°53′40″S 66°23′55″O',
    poster: 'assets/Ciudad Sagrada de Quilmes.jpg',
    región: 'norte'
    
  },
  {

    titles:'Parque Nacional Talampaya',
    province: 'La Rioja',
    coordinates:'29°47′45″S 67°48′40″O',
    poster: 'assets/Parque Nacional Talampaya.jpg',
    región: 'norte'
    
  },
  {
    titles:'Valle de la Luna',
    province: 'San juan',
    coordinates:'30°07′00″S 67°54′43″O',
    poster: 'assets/Valle de la Luna.jpg',
    región: 'centro'
    
  },
  {

    titles:'Las Leñas',
    province: 'Mendoza',
    coordinates:'35°08′46″S 70°04′52″O',
    poster: 'assets/Las Leñas.jpg',
    región: 'centro'

  
  },
  {

    titles:'Malargue',
    province: 'Mendoza',
    coordinates:'36°10′00″S 69°20′00″O',
    poster: 'assets/Malargue.jpg',
    región: 'centro'

    
  },
  {

    titles:'Lago Puelo',
    province: 'Chubut',
    coordinates:'42°09′55″S 71°38′13″O',
    poster: 'assets/Lago Puelo.jpg',
    región: 'sur'

    
  },
  {

    titles:'Glaciar Perito Moreno',
    province: 'Santa Cruz',
    coordinates:'59°29′00″S 73°03′00″O',
    poster: 'assets/Glaciar Perito Moreno.jpg',
    región: 'sur'

    
  },
  {
    
    titles:'Cabo Virgenes',
    province: 'Santa Cruz',
    coordinates:'52°20′00″S 68°21′00″O',
    poster: 'assets/Cabo Virgenes.jpg',
    región: 'sur'

  }

  ];
}
