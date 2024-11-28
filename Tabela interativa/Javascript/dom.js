function createTableRow(id, nome, nota1, nota2, nota3, nota4, media) {
    return `<tr class="linha" id="${id}">
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${nota3}</td>
        <td>${nota4}</td>
        <td>${media}</td>
    </tr>`;
}