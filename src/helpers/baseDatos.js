// Quemar una base de datos

export let productos=Array(
    {
        nombre:"El abrebocas",
        descripcion:"El abrebocas es un album musical, principalmente compuesto por Doble Porción, con la discografia de Moebiuz, y se publico el 2 de enero de 2013. Su genero es Hip-hop/rap. El grupo esta formado por Metricas Frias y Mañas Ru-fino.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/el%20abrebocas.jpg?alt=media&token=91f0b17d-9244-4343-8b81-c0cce12961a9","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20el%20abrebocas.png?alt=media&token=7582055e-88d3-440a-815c-768681f5d120"],
        precio:70000,
        popularidad:4.2
    },
    {
        nombre:"Juegos de azar",
        descripcion:"Juegos de azar es un album musical, principalmente compuesto por Doble Porción, con la discografia de Doble porcion, y se publico el 10 de julio de 2020. Su genero es Musica pop-India,Hip-hop/rap. El grupo esta formado por Metricas Frias y Mañas Ru-fino.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Juegos%20de%20azar2.png.jpg?alt=media&token=a46a5501-df2b-4ba0-ad25-949fb18c6285","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20juegos%20de%20azar.png?alt=media&token=d2c1016e-4b08-44b1-8db5-f1a92665f1d4"],
        precio:75000,
        popularidad:4.2
    },
    {
        nombre:"Manzanas a la vuelta",
        descripcion:"Manzanas a la vuelta es un album musical, principalmente compuesto por Doble Porción, con la discografia de Moebiuz, y se publico el 16 de septiembre de 2016. Su genero es Hip-hop/rap. El grupo esta formado por Metricas Frias y Mañas Ru-fino.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Manzanas%20a%20la%20vuelta2.png.jpg?alt=media&token=50e8ad95-576a-458f-8ab7-e0fed095ea7a","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20manzanas%20a%20la%20vuelta.png?alt=media&token=78f059ce-b9c7-40a6-810f-db100e40db41"],
        precio:90000,
        popularidad:4.2
    },
    {
        nombre:"Serenata sin mariachis",
        descripcion:"Serenata sin mariachis es un album musical, principalmente compuesto por Metricas Frias, con la discografia de Moebiuz, y se publico el 10 de agosto de 2016. Su genero es Música pop india, Japanese Hip Hop/Rap, Hip-hop/rap, Argentinian Trap y J-Pop.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Serenata%20sin%20mariachis2.png.jpg?alt=media&token=fd8b0dc5-3c7b-47d0-af1c-d8e41deb2703","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20serenata%20sin%20mariachis.png?alt=media&token=4e19bf0e-d4e1-4ccf-a1e5-c437e9cd2784"],
        precio:100000,
        popularidad:4.2
    },
    {
        nombre:"Circulo vicioso",
        descripcion:"Circulo vicioso es un album musical, principalmente compuesto por Granuja, con la discografia de Moebiuz, y se publico el 31 de marzo de 2017. Su genero es Hip-hop/rap.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Circulo%20vicioso2.png.jpg?alt=media&token=c02edd12-997b-47b1-b1f4-37cebca1cc62","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20circulo%20vicioso.png?alt=media&token=2f28adad-a161-4d6e-a87f-6f0b970a03d5"],
        precio:60000,
        popularidad:4.2
    },
    {
        nombre:"Despues de muertos",
        descripcion:"Despues de muertos es un album musical, principalmente compuesto por Metricas Frias, con la discografia de Cocaine Beatz, y se publico el 17 de diciembre de 2021. Su genero es Música pop india, Clásica y Hip Hop/Rap.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Despues%20de%20muertos2.png.jpg?alt=media&token=c34aab41-cc8e-45de-b445-00185ab32a1d","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20despues%20de%20muertos.png?alt=media&token=cd9d7eeb-7aaf-4be6-900d-d716c5d6591f"],
        precio:70000,
        popularidad:4.2
    },
    {
        nombre:"La bomba de ziroshima",
        descripcion:"La bomba de ziroshima es un album musical, principalmente compuesto por Zof Ziro, con la discografia de Moebiuz, y se publico el 25 de junio de 2016. Su genero es Hip-hop/rap.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/La%20bomba%20de%20ziroshima2.png.jpg?alt=media&token=c0c72f22-641b-4655-b374-a224854102c9","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20la%20bomba%20de%20ziroshima.png?alt=media&token=0d4b3de4-c9a6-46c6-a4d4-e264439eae0b"],
        precio:72000,
        popularidad:4.2
    },
    {
        nombre:"Oculto",
        descripcion:"Oculto es un album musical, principalmente compuesto por Granuja y Metricas Frias, con la discografia de Granuja, y se publico el 4 de diciembre de 2020. Su genero es Hip-hop/rap.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Oculto2.jpg?alt=media&token=699b59da-6d65-4355-a979-43a816003b4c","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20oculto.png?alt=media&token=afc9b8ff-f6dd-497e-b0f0-8d6f9946d68a"],
        precio:80000,
        popularidad:4.2
    },
    {
        nombre:"Rap de la montaña",
        descripcion:"Rap de la montaña un album musical, principalmente compuesto por Mañas Ru-fino, con la discografia de Moebiuz, y se publico el 6 de enero de 2015. Su genero es Hip-hop/rap.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Rap%20de%20la%20monta%C3%B1a2.jpg?alt=media&token=8f293f40-e78f-4dbd-b4b1-27dfc980b969","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20rap%20de%20la%20monta%C3%B1a.png?alt=media&token=d78977cf-85e5-4db4-a117-daf2ed854b8a"],
        precio:95000,
        popularidad:4.2
    },
    {
        nombre:"Tamara",
        descripcion:"Tamara un album musical, principalmente compuesto por Mañas Ru-fino, con la discografia de Mañas Ru-fino, y se publico el 30 de abril de 2020. Su genero es Hip-hop/rap.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/Tamara2.jpg?alt=media&token=7bcd665e-b60e-440f-9c9e-bdcc35ff77ee","https://firebasestorage.googleapis.com/v0/b/sgbtienda-f1f36.appspot.com/o/cd%20tamara.png?alt=media&token=620192aa-7900-41a9-83fe-d67d31dfd3a8"],
        precio:85000,
        popularidad:4.2
    }
)