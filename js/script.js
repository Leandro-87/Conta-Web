const url = window.location.href
const urlSplit = url.split("/")[4].split(".")[0]


const idBody = document.body
idBody.classList.add(urlSplit)

function removeAttr(seletor, atributo){
    const remove = document.querySelector(seletor)
    remove.removeAttribute(atributo)
};
removeAttr('#rodape .style12', 'class');
removeAttr('#rodape tbody tr td.style13', 'class');


function addClass(seletor, classe){
    const addTitlePage = document.getElementById(seletor);
    addTitlePage.classList.add(classe);
};
addClass('ctl00_ContentPlaceHolder1_Label16', 'dv-title-page');
addClass('ctl00_ContentPlaceHolder2_btnincluir', 'dv-transition')
addClass('ctl00_HyperLink1', 'dv-transition')