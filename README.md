# Blog de noticias
Web simple de noticias construida con HTML, CSS, Bootstrap y jQuery.

URL: https://rawgit.com/noviluni/news_blog/master/index.html

URL del rss: https://rawgit.com/noviluni/news_blog/master/rss/rss.xml

### Autor: Marc Hernández Cabot

Este proyecto es un encargo de web de noticias que debe cumplir con las siguientes especificaciones:

>La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
>
> Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
>
> Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).
>
> Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.


### Primera propuesta
##### Esta es una imagen de la primera propuesta:
![diseno-inicial](https://cloud.githubusercontent.com/assets/22377678/26696759/00b3ec1a-4710-11e7-932b-00fa0129a441.png)


##### Versión escritorio:
**Noticias**: La primera noticia, al ser la más actual, ocupará aproximadamente todo el espacio disponible, el resto de noticias se cargarán debajo de 2 en 2.

**Anuncio**: Los anuncios, tal y como especificó el cliente, se situarán a la derecha ocupando 300px.



##### Versión móvil
**Noticias**: Todas las noticias ocuparán aproximadamente todo el espacio disponible.

**Anuncio**: Los anuncios, en el móvil ocuparán solo 90px en la parte inferior, y estarán fijados (es decir, aunque se haga scroll se va a mantener en el mismo sitio).



### Resultado
Este ha sido el resultado:

##### Versión escritorio:
![version-pc](https://cloud.githubusercontent.com/assets/22377678/26696858/6f7e4370-4710-11e7-8a92-07176802bbc0.png)

**Botón "cargar todas las noticias"**: Está situado a la derecha de forma fija (aunque hagas scroll se mantiene en el mismo sitio).


##### Versión móvil:
![version-movil](https://cloud.githubusercontent.com/assets/22377678/26696862/7292fa9c-4710-11e7-8fcb-401c63cb934e.png)

**Botón "cargar todas las noticias"**: Está situado en el centro, sobre el anuncio, de forma fija (aunque hagas scroll se mantiene en el mismo sitio).


### Otros aspectos nuevos
**Puntuar noticias**: Debajo de cada noticia ahora hay botones para poder puntuar las noticias. Estos se comportan de forma responsive, colocándose en vertical en la versión móvil.

**Esconder subtítulo en la versión móvil**:  Cuando se pasa a la versión móvil el subtítulo desaparece por cuestiones estéticas y de espacio.


### Posibles mejoras
- Añadir botones de compartir ("me gusta" de Facebook, "tweet" de Twitter, etc.)


### Tecnologías utilizadas
- HTML5
- CSS3
- jQuery (javaScript) + archivos json
- Bootstrap 3


### Herramientas utilizadas
- Gimp
- [Optimizilla](http://optimizilla.com/) (compresor de imágenes)
- [W3 HTML validator](https://validator.w3.org/)
- [W3C RSS Validator](https://validator.w3.org/feed/)

### Tareas:
- ~~Maquetación, README.md con esquema del proyecto (foto del cuaderno).~~
- ~~Presentar el archivo index.html con 3 noticias.~~
- ~~Almacenar 6 noticias en dos archivos json (data/1.json y data/2.json).~~
- ~~Codificar news.js en jQuery para que al hacer click en un botón o al hacer scroll cargue las noticias de los archivos .json.~~
- ~~Escribir rss e incluirlo.~~
- ~~Codificar dos páginas individuales (news1.html y news2.html) para las dos primeras noticias, con una imagen y un video youtube responsives.~~
- ~~Incluir las etiquetas meta con open graph en todas las páginas para compartir título, descripción, imagen, nombre de la aplicación y url de la página.~~
