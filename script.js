function generateURLs(currentPage) {
    // Convertiamo il numero della pagina in un numero intero
    const currentPageNumber = parseInt(currentPage);

    // Calcoliamo l'URL per la pagina precedente
    const previousPage = currentPageNumber - 1 > 0 ? currentPageNumber - 1 : 1;
    const previousURL = `${previousPage}.html`;

    // Calcoliamo l'URL per la pagina successiva
    const nextPage = currentPageNumber + 1;
    const nextURL = `${nextPage}.html`;

    // Restituiamo un oggetto contenente entrambi gli URL
    return {
        previous: previousURL,
        next: nextURL
    };
}

// Otteniamo il nome del file HTML corrente
const currentPage = location.pathname.split("/").pop().replace(".html", "");

// Generiamo gli URL per le pagine precedente e successiva
const urls = generateURLs(currentPage);

// Aggiungiamo i link di navigazione al documento HTML
const navigationDiv = document.getElementById("navigation");
navigationDiv.innerHTML = `
    <a href="${urls.previous}">&lt;</a>
    &nbsp; | &nbsp;
    <a href="${urls.next}">&gt;</a>
`;
