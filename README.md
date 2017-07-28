# USA Flights Visualization
Secondo progetto del corso di Visualizzazione delle Informazioni


Questo progetto visualizza i flussi dei voli all'interno degli stati continentali degli USA dall'anno 1998 al 2008. Ad ogni stato viene associata una tonalità di colore più chiara o più scura rispetto a quella iniziale in base alla differenza tra voli in entrata e voli in uscita nello stato stesso (flights in < flights out -> tonalità chiara; flights in > flights out -> tonalità scura).
Inoltre passando sopra uno stato si visualizza il nome e tale differenza numerica, e vengono evidenziati i flussi relativi allo stato nascondendo tutti gli altri.

Il dataset su cui si basa il progetto si può trovare al link: http://stat-computing.org/dataexpo/2009/the-data.html

Questo dataset è stato usato effettuando delle query con Hive su Hadoop per estrarre i dati di interesse che si possono trovare qui: https://gist.github.com/anaQuispe/public

Per visualizzare la mappa degli Stati Uniti è stato usato questo file: https://gist.githubusercontent.com/mbostock/4090846/raw/us.json

Per rappresentare l'insieme di aereoporti per ogni stato è stato realizzato questo file: https://gist.githubusercontent.com/vale25/67d58596ca4ac06513b1f8a7fb2e15f3/raw/63be35b50801e9be6b35aa10ce0fc0e61567cb4a/centers.csv 

Infine questi dati sono stati utilizzati per mappare il centro di ogni stato (che raggruppa l'insieme degli aeroporti dello stato) e collegare i vari punti con delle curve che rappresentano i voli.

Per visualizzare direttamente il progetto senza scaricare alcun file in locale, si può visitare questo link: https://rawgit.com/luca04/infovis_secondoProgetto/master/usa_flights_visualization.html


Valentina Accadia, 

Luca Mancini, 

Ana Lucia Quispe Pumacayo
