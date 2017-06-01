# Blog de noticias
Web simple de noticias construido con HTML, CSS, Bootstrap y jQuery.

Este proyecto es un encargo de web de noticias que debe cumplir con las siguientes especificaciones:

>La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
>
> Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
>
> Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).
>
> Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.


### Primera propuesta
Esta es una imagen de la primera propuesta


##### Versión escritorio:
Noticias: La primera noticia, al ser la más actual, ocupará aproximadamente todo el espacio disponible, el resto de noticias se cargarán debajo de 2 en 2.

Anuncio: Los anuncios, tal y como especificó el cliente, se situarán a la derecha ocupando 300px.

Botón "cargar todas las noticias": Estará situado a la derecha de forma fija (aunque hagas scroll se va a mantener en el mismo sitio).

##### Versión móvil
Noticias: Todas las noticias ocuparán aproximadamente todo el espacio disponible.

Anuncio: Los anuncios, en el móvil ocuparán solo 90px en la parte inferior, y estarán fijados (es decir, aunque se haga scroll se va a mantener en el mismo sitio).

Botón "cargar todas las noticias": Estará situado en el centro, sobre el anuncio, de forma fija (aunque hagas scroll se va a mantener en el mismo sitio).


### Resultado
Esta son dos capturas de pantalla del resultado final:



##### Aspectos nuevos:
- Puntuar noticias:
Debajo de cada noticia ahora hay botones para poder puntuar las noticias. Estos se comportan de forma responsive, colocándose en vertial en la versión móvil.

- Esconder subtítulo en la versión móvil:
Cuando se pasa a la versión móvil el subtítulo desaparece por cuestiones estéticas y de espacio.



### Posibles mejoras
- Añadir botones de compartir ("me gusta" de Facebook, "tweet" de Twitter, etc.)


### Tecnologías utilizadas
- HTML5
- CSS3
- jQuery (javaScript) + archivos json
- Bootstrap 3


### Herramientas utilizadas
- Gimp
- Optimizilla (compresor de imágenes): http://optimizilla.com/
- W3 HTML validator: https://validator.w3.org/
- W3C RSS Validator: https://validator.w3.org/feed/

### Tareas:
- Maquetación, README.md con esquema del proyecto (foto del cuaderno).
- ~~Presentar el archivo index.html con 3 noticias.~~
- ~~Almacenar 6 noticias en dos archivos json (data/1.json y data/2.json).~~
- ~~Codificar news.js en jQuery para que al hacer click en un botón o al hacer scroll cargue las noticias de los archivos .json.~~
- Escribir rss e incluirlo.
- ~~Codificar dos páginas individuales (news1.html y news2.html) para las dos primeras noticias, con una imagen y un video youtube responsives.~~
- ~~Incluir las etiquetas meta con open graph en todas las páginas para compartir título, descripción, imagen, nombre de la aplicación y url de la página.~~
